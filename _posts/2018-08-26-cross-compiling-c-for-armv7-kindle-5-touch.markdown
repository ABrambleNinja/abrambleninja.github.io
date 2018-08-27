---
layout: post
title:  "Cross-compiling C for ARMv7 (Kindle 5 Touch)"
date:   2018-08-26 17:05:16 -0700
tags: kindle
---

One of my friends has a really neat clock in his room - he took his old [Kindle Touch](https://wiki.mobileread.com/wiki/Kindle_Touch) and reprogrammed it to display a digital clock and the weather. I really liked the idea because it's an E-ink display, so it doesn't emit any light or take much power to leave running, and I thought it looked super nice as well, so I decided to try to make something similar.

I purchased a cheap Kindle off of Ebay for $20 or so. Of course, the first thing I did when it came in the mail was to [jailbreak it](https://wiki.mobileread.com/wiki/Kindle_Touch_Hacking) so that I could start signing my own apps. The jailbreak installs a program called KUAL, Kindle Unified Application Launcher, that makes it easy to launch command-line programs from the Kindle itself. It also installs an SSH server for accessing the Linux operating system on the device.

At first, I decided to try to write my program in the same way that my friend had -- writing an "official" style Kindle app using the KDK, and running it on the Kindle by adding a known key to the developer keystore. After a lot of research into the [Java Personal Basis Profile](https://docs.oracle.com/javame/config/cdc/ref-impl/pbp1.1.2/jsr217/) and how to properly sign Java packages, I was able to get Hello World running on the Kindle!

However, my friend had been complaining about the limitations of the PBP (for instance, the Kindle version could not connect to SSL-enabled websites), so I started to look into some alternatives. I happened upon [this](https://www.mobileread.com/forums/showpost.php?p=2469940&postcount=38) Kindle program that was able to draw a working calculator on the screen without using any of the Java stuff! I played around with this for a bit and was able to get a Hello World using PyGTK working as well, but I decided that I wanted to learn how the cross-compilation worked so I could write my app in a different language. I eventually want to write it in Rust, but I figured that it would be easier to start with something more common like C.

I wasn't really able to find too many guides on how to cross-compile code from my x86 Arch Linux machine to 32-bit ARMv7, but I was eventually able to puzzle it together. I first attempted to install the package [community/arm-none-eabi-gcc](https://www.archlinux.org/packages/community/x86_64/arm-none-eabi-gcc/) (which also installed binutils), but I eventually learned that the `none` part of the package name meant that it was designed to produce bare-metal executables. When I tried compiling a hello world program using `arm-none-eabi-gcc`, I got the following error:

```
$ arm-none-eabi-gcc helloarm.c
/usr/lib/gcc/arm-none-eabi/8.2.0/../../../../arm-none-eabi/bin/ld: /usr/lib/gcc/arm-none-eabi/8.2.0/../../../../arm-none-eabi/lib/libc.a(lib_a-exit.o): in function `exit':
exit.c:(.text.exit+0x2c): undefined reference to `_exit'
/usr/lib/gcc/arm-none-eabi/8.2.0/../../../../arm-none-eabi/bin/ld: /usr/lib/gcc/arm-none-eabi/8.2.0/../../../../arm-none-eabi/lib/libc.a(lib_a-sbrkr.o): in function `_sbrk_r':
sbrkr.c:(.text._sbrk_r+0x18): undefined reference to `_sbrk'
/usr/lib/gcc/arm-none-eabi/8.2.0/../../../../arm-none-eabi/bin/ld: /usr/lib/gcc/arm-none-eabi/8.2.0/../../../../arm-none-eabi/lib/libc.a(lib_a-writer.o): in function `_write_r':
writer.c:(.text._write_r+0x24): undefined reference to `_write'
/usr/lib/gcc/arm-none-eabi/8.2.0/../../../../arm-none-eabi/bin/ld: /usr/lib/gcc/arm-none-eabi/8.2.0/../../../../arm-none-eabi/lib/libc.a(lib_a-closer.o): in function `_close_r':
closer.c:(.text._close_r+0x18): undefined reference to `_close'
/usr/lib/gcc/arm-none-eabi/8.2.0/../../../../arm-none-eabi/bin/ld: /usr/lib/gcc/arm-none-eabi/8.2.0/../../../../arm-none-eabi/lib/libc.a(lib_a-fstatr.o): in function `_fstat_r':
fstatr.c:(.text._fstat_r+0x20): undefined reference to `_fstat'
/usr/lib/gcc/arm-none-eabi/8.2.0/../../../../arm-none-eabi/bin/ld: /usr/lib/gcc/arm-none-eabi/8.2.0/../../../../arm-none-eabi/lib/libc.a(lib_a-isattyr.o): in function `_isatty_r':
isattyr.c:(.text._isatty_r+0x18): undefined reference to `_isatty'
/usr/lib/gcc/arm-none-eabi/8.2.0/../../../../arm-none-eabi/bin/ld: /usr/lib/gcc/arm-none-eabi/8.2.0/../../../../arm-none-eabi/lib/libc.a(lib_a-lseekr.o): in function `_lseek_r':
lseekr.c:(.text._lseek_r+0x24): undefined reference to `_lseek'
/usr/lib/gcc/arm-none-eabi/8.2.0/../../../../arm-none-eabi/bin/ld: /usr/lib/gcc/arm-none-eabi/8.2.0/../../../../arm-none-eabi/lib/libc.a(lib_a-readr.o): in function `_read_r':
readr.c:(.text._read_r+0x24): undefined reference to `_read'
collect2: error: ld returned 1 exit status
```

Unfortunately, that was the only arm cross-compiling package in the official repositories--I tend to be irrationally averse to using AUR packages unless absolutely necessary--but I decided to begrudgingly try one anyways. The first I tried was [aur/arm-linux-gnueabi-gcc](https://aur.archlinux.org/packages/arm-linux-gnueabi-gcc/). The `linux` part means it is expecting to be run on a Linux operating system, of course, and the `gnueabi` part means that it's expecting the GNU application binary interface, which I don't fully understand but I think distinguishes the protocols the program can use to talk to the operating system.

However, when I tried using this, I got an error about `stdio.h` not being found:

```
$ arm-linux-gnueabi-gcc helloarm.c
helloarm.c:1:10: fatal error: stdio.h: No such file or directory
 #include <stdio.h>
          ^~~~~~~~~
compilation terminated.
```

Fair enough, I didn't install the standard library. Rather than try to build that myself, I decided to instead try [aur/arm-linux-gnueabihf-gcc](https://aur.archlinux.org/packages/arm-linux-gnueabihf-gcc/). [It seems](https://stackoverflow.com/questions/26692065/difference-between-arm-eabi-arm-gnueabi-and-gnueabi-hf-compilers) that `gnueabihf` is a version of `gnueabi` for systems that support hard floating points, but the most important part is that this package comes with everything, from binutils to glibc. It took <span title="Like two hours" class="hover">18 billion years</span> to compile all the components but seemed to do the trick, at least for compiling!

```
$ arm-linux-gnueabihf-gcc helloarm.c
```

However, when I tried copying it over to my Kindle, I got the following error:
```
[root@kindle root]# ./a.out
-sh: ./a.out: not found
```

Apparently, that means that there's a missing dependency (according to [this](https://unix.stackexchange.com/a/18079/41507)). To fix this, I looked at the `readelf` output (on the dev machine; the Kindle doesn't have that executable):

```
$ arm-linux-gnueabihf-readelf -l a.out | head -n12

Elf file type is DYN (Shared object file)
Entry point 0x3fc
There are 9 program headers, starting at offset 52

Program Headers:
  Type           Offset   VirtAddr   PhysAddr   FileSiz MemSiz  Flg Align
  EXIDX          0x000620 0x00000620 0x00000620 0x00008 0x00008 R   0x4
  PHDR           0x000034 0x00000034 0x00000034 0x00120 0x00120 R   0x4
  INTERP         0x000154 0x00000154 0x00000154 0x00019 0x00019 R   0x1
      [Requesting program interpreter: /lib/ld-linux-armhf.so.3]
  LOAD           0x000000 0x00000000 0x00000000 0x0062c 0x0062c R E 0x10000
```

On the Kindle, I found that library at a slightly different location:

```
[root@kindle root]# ls /lib/ld-linux*
/lib/ld-linux.so.3
```

So I recompiled using this library location:

```
$ arm-linux-gnueabihf-gcc -Wl,--dynamic-linker -Wl,/lib/ld-linux.so.3 helloarm.c
```

And with that, I copied it again and it worked!
```
$ scp a.out root@192.168.1.12:/var/tmp/root/
a.out                                             100%   16KB 588.3KB/s   00:00
$ ssh root@192.168.1.12


Welcome to Kindle!

root@192.168.1.12's password:
#################################################
#  N O T I C E  *  N O T I C E  *  N O T I C E  #
#################################################
Rootfs is mounted read-only. Invoke mntroot rw to
switch back to a writable rootfs.
#################################################
[root@kindle root]# ./a.out
Hello World!
```

Now, the next steps from here are cross-compiling Rust and getting the Gtk headers properly installed I suppose.
