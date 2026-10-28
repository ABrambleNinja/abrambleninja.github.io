+++
title = "new website"

[taxonomies]
author = ["ben"] 

+++

lately, as i've been perusing the interwebz, i've been thinking about the concept of blogging.
to me, the idea is very appealing - being able to have a persistent record of thoughts that i've had that i think are worth sharing, or a record of projects that i've worked on, or a place to share interesting technical concepts that i've come across or developed.
i've tried to have a blog before, but i've never been very good at posting on it regularly.
i think it's easier to self-censor and stop myself from sharing information because doing so is to be vulnerable.
writing can be so many different things (a way to solidify or flesh out one's ideas, or simply share them; a way to persuade, discuss, or debate; a way to explain concepts; a way to tell stories; a way to take a feeling that exists only within the ether of one's consciousness and give it to others), but in all of these cases, it's a way to take something that is inside one's brain and bare it to the world.

<!-- more -->

## on writing

in undergrad, i took a course on fiction writing, and i remember the professor saying something along the lines of:

> simply by sharing the writing you do for this class with the other students here, you are all being incredibly vulnerable.
> it's a deeply intimate thing to share what you've written with other people.

this really resonated with me; i think that, in contrast to many other forms of communication, writing (at least writing without a time bound) has a particular quality because it's premeditated and asynchronous.
one has time to develop their ideas and make the choices of how to communicate them ahead of time.
one can write, then revise, then revise again, then revise again: the only limits to what one can write are the time they have, and the ideas themselves.
as another example, i'd imagine that most people find talking to someone live to be much easier than pre-recording a spoken message.

this also makes writing a difficult medium.

if you say something that doesn't quite make sense in a casual conversation, your conversation partner will probably write it off and not think too much about it, because it happened in the spur of the moment.
(also, in a conversation, if someone doesn't understand or misunderstands you, you can probably detect that and correct.
with writing, you don't have that privilege.)
on the other hand, because with writing you have the ability to think through what you are trying to say before you say it (er, write it), it is implicitly held to a higher standard.

i also find that a lot of my ideas develop and solidify as i write things.
the process of writing something down is similar in my mind to the process of writing software, in that in both cases one has to take an amorphous idea and make it concrete, and also similar to teaching, in that one has to understand the idea well enough to explain it to an audience in a way that makes sense, as well as take care to explain all of the prerequisite ideas upon which the new idea was developed.
i find that often when i try to write down an idea that i thought i had fleshed out already, it was not as well-defined as the electrons bouncing around in my brain had me think.
it's a self-reinforcing process: trying to pin the ideas down in order to write them forces me to develop the ideas further, clarify the boundaries of the ideas, and understand where they came from, which in turn makes them easier to write about, which in turn solidifies the ideas in my head.

### on llm writing

recently, i read an article entitled [the social contract of writing](https://jola.dev/posts/the-social-contract-of-writing).
i think that this article is worth reading in its entirety, but here, i would particularly like to highlight a quote that was included in that article from oxide computers [rfd 0576](https://rfd.shared.oxide.computer/rfd/0576):

> Finally, LLM-generated prose undermines a social contract of sorts: absent LLMs, it is presumed that of the reader and the writer, it is the writer that has undertaken the greater intellectual exertion.
> (That is, it is more work to write than to read!)
> For the reader, this is important: should they struggle with an idea, they can reasonably assume that the writer themselves understands it — and it is the least a reader can do to labor to make sense of it.

not quoted in the aforementioned article but from the complete oxide rfd, it continues:

> If, however, prose is LLM-generated, this social contract becomes ripped up: a reader cannot assume that the writer understands their ideas because they might not so much have read the product of the LLM that they tasked to write it.
> If one is lucky, these are LLM hallucinations: obviously wrong and quickly discarded.
> If one is unlucky, however, it will be a kind of LLM-induced cognitive dissonance: a puzzle in which pieces don’t fit because there is in fact no puzzle at all.
> This can leave a reader frustrated: why should they spend more time reading prose than the writer spent writing it?

the context of this is technical writing, but i'd argue this applies to other forms of prose as well.
one of my pet peeves lately has been reading llm-generated metaphors, which, upon [cursory](https://heatherparry.substack.com/p/what-does-it-mean-though) [inspection](https://sites.psu.edu/astrowright/2026/08/18/orwell-and-llms/), are clearly meaningless to the reader who has spent time reading — really reading — what they actually say.

sometimes, a piece of writing starts out promising.
the premise is interesting, and it doesn't immediately jump out as written by an llm.
but then, three paragraphs in, it's clear: you've just been hoodwinked.
in addition to making it harder to decide whether something is worth reading, it is just plain annoying.

randall munroe of xkcd [once said](https://xkcd.com/1015/):

> if you really hate someone, teach them to recognize bad kerning.

i almost want to say that the modern-day equivalent of that is to teach someone to recognize that text is written by an llm.
but i think that learning the llm tells is an emergent property of consciousness.
i read an essay recently that i'll refer to by its subtitle ([did you think i wouldn’t be able to tell? i can tell.](https://samkriss.substack.com/p/if-you-let-ai-do-your-writing-i-will)), and it had this to say on the subject:

> But AI is not a good writer.
> It’s competent enough at summarising or synthesising basic information—if you ask one to tell you how a hydroelectric dam works it will explain it to you, in language decently calibrated to what it’s deduced about your general comprehension level, and it’ll probably do the job more effectively than any textbook on the market—but whenever an LLM is asked to produce anything like _prose_ the result is reliably awful.
>
> [...]
>
> AI writing is almost comically easy to detect.
> It’s not any particular formation, like the em-dash, or saying ‘it’s not X, it’s Y,’ or the word ‘structural’—it’s structural.

once you start to see a linguistic pattern being used by more than half of the posts on your linkedin feed, it's not terribly difficult to pattern match that and identify it as an llm-ism.
and especially if you supplement your linkedin browsing with slop straight from the slop-monster's mouth, it becomes trivial to detect.

not only is it hard to decide if content is worth reading if it was written by an llm, and also it is annoying to read, but also even if one uses it just for editing, the prose ends up losing the intricacies of what makes it interesting.
you might have heard of the "midjourney effect" before, in which image diffusion models coalesced on a certain easily-identifiable look that suddenly was everywhere.[^midjourney-effect]
of course this effect was produced; it couldn't have been any other way.
these diffusion models have a fundamental regression to the mean baked into their training process, in the same way that llms do.[^coconut-tree]
as of the time of writing, the best image generation models struggle with a prompt to generate a face without a nose.

from [why ai writing is so generic, boring, and dangerous: semantic ablation](https://www.theregister.com/software/2026/02/16/semantic-ablation-why-ai-writing-is-boring-and-dangerous/4414930):[^misleading-tells]

> When an author uses AI for "polishing" a draft, they are not seeing improvement; they are witnessing semantic ablation.
> The AI identifies high-entropy clusters – the precise points where unique insights and "blood" reside – and systematically replaces them with the most probable, generic token sequences.
> What began as a jagged, precise Romanesque structure of stone is eroded into a polished, Baroque plastic shell: it looks "clean" to the casual eye, but its structural integrity – its "ciccia" – has been ablated to favor a hollow, frictionless aesthetic.

it is also very compelling to me that the imagery the author invoked to describe the output of this process ("polished, baroque plastic shell") could be a description of the midjourney effect as well.

[^midjourney-effect]: i was trying to find articles describing this, but unfortunately all of the information i could find on it at the moment seemed to be instructions on how to generate images that don't look like they were made by midjourney, which is not at all what i was looking for.

[^coconut-tree]: of all of the things that [didn't just fall out of a coconut tree, and exist in the context of all in which they live and what came before](https://en.wikipedia.org/wiki/You_think_you_just_fell_out_of_a_coconut_tree%3F), genai didn't just fall out of a coconut tree the most.

[^misleading-tells]:  as an aside, i also think that particular passage is interesting because it uses the word "structural" and is riddled with em-dashes, but it is clearly not written by an llm. see also [llemdashes](https://wil.to/posts/llemdashes/) for more commentary on this.

---

in this blessed year 0 of our lord and savior "agi"[^year-zero-agi], when it seems like ¾ of the posts submitted to [lobste.rs](https://lobste.rs/) are written by said lord and savior, there's something very appealing to me about the idea of reading things written by people.
i assume others feel similarly, so i would like to try to contribute to the effort by writing things and sharing them with the world.
(oh, the optimistic beginnings of a blog that will definitely not be forgotten by the author in three weeks' time...)

ah, well, nevertheless.
maybe i'll be better at sticking to it this time.

[^year-zero-agi]: anthropic is on a [wild](https://futurism.com/artificial-intelligence/anthropic-lobbying-vatican) [ride](https://www.nytimes.com/2026/09/29/us/anthropic-claude-morals-ai.html) trying to get their robot-slaves (if we take their word for it) to be recognized as conscious...
it's okay to work them 24/7/365 for no pay but you better not [call them any rude names!](https://www.theguardian.com/technology/2026/oct/08/anthropic-bans-abusive-behavior-claude)

## blog details

now that brings us to this blog.
i wanted to design a nice-looking[^nice_looking] website that fit the very specific aesthetic that my brain had thunk up.
i was particularly inspired by retro technology vibes, and i knew i wanted a website that fused that with a more modern sense of design.
manifested, this ended up contributing monospace aesthetics (along with a somewhat-character-aligned overall interface), gradients, and clunky box shadows.

in my perusing of the internet, i came across two websites that i wanted to take more concrete inspiration from.
those would be [diffuse.one](https://diffuse.one/) (from which i got the idea of having a floating "page" of content) and [cliffle.com](https://cliffle.com/) (from which i sourced the colors, plus some inspiration for the code blocks).

this website is built using [zola](https://www.getzola.org/) for a static site generator.
in general, i liked using it, but it definitely had some annoyances that make me hesitant to recommend it (discussed later).

[^nice_looking]: by some definition of nice

### formatting

this website has some fun quirks, some of which correspond to quirks (of varying fun-ness) of various web technologies. here are some highlights:

#### code blocks

firstly, the width of code blocks is defined by character-sized widths unless they are constrained by the size of one's browser (i.e. if you resize your browser window, it will allow non-grid-aligned sizes for the box).
i could have made it always snap to the character grid, but as far as i could tell, not without javascript.

as a recovering javascript skeptic, i wanted to use pure css as much as possible, so to add a grid-aligned twist to this, i made it so that the `[language: foo]` tag in the header of the code blocks is centered based off of character-width units!
if you resize this code block, the title snaps to the character grid.

i managed to do this without javascript (at least for browsers that support `calc` properly[^ff]), which i am quite proud of!

```css,linenos
/*
    warning: weird!
*/
pre {
    max-width: 100ch;
    /* this holds how many characters wide the pre is! */
    --width-in-chars: round(calc(100% / 1ch));
}
pre::before {
    /*
        we don't actually want to center or have zero left padding here; these
        rules will get overriden later.
    */
    text-align: center;
    padding-left: 0;

    --language-wrapper-len: 12;  /* the length of "[language: ]" */

    /* this will get overriden if the code block specifies a type */
    --language: "unknown";
    --language-len: 7;

    content: "[language: " var(--language) "]";

    /*
        we want to center the language string, but char-aligned to keep the
        monospace look, so we calculate the width of the container in chars (set
        on the pre element so that it can be overriden with js), minus the
        language string length, and divide by 2 to get the desired padding left.
    */
    --total-language-len: calc(
        var(--language-len) + var(--language-wrapper-len)
    );
    --chars-minus-len: calc(var(--width-in-chars) - var(--total-language-len));
    --desired-padding-left: calc(round(var(--chars-minus-len) / 2) * 1ch);
}
/*
    unfortunately, firefox doesn't support computing the width in chars as
    above, so we target webkit-based browsers to get the pure css implementation
    and use a js-based shim as a fallback for firefox :(
*/
@supports selector(::-webkit-scrollbar) {
    pre::before {
        text-align: left;
        padding-left: var(--desired-padding-left);
    }
}
pre.js-width-shim::before {
    text-align: left;
    padding-left: var(--desired-padding-left);
}
```

this also means that we have to define a little selector for each language we want to support.
nevertheless, i think this is really cool and i'm quite proud of it!

```css,linenos
pre:has(code[data-lang="css"])::before {
    --language: "css";
    --language-len: 3;
}
```

from there, i also decided that i'd try to use `ch`-and-`lh` based spacing (for width and height, respectively) to keep the content aligned to a monospace grid as much as possible.[^character_grid_prior_art]

secondly, i think it's fun that the line numbers for the code blocks are at least 2 digits long.
this matches the css `decimal-leading-zero` counter type (in use for ordered lists on this website), which was a fun surprise to learn about.
why does it exist?
it seems so specific and arbitrary, but i think it fits the retro-tech theme that i'm going for, so of course i had to use it.

```js,linenos
/**
 * unfortunately i had to use javascript to get this to work for code blocks
 * (there is no good way to use the css counters on the output of zola's
 * markdown-rendered code blocks)
 */
function renumber_lines() {
    // this implementation is not at all interesting, so i will not be detailing
    // it here. feel free to grab it from the page source though! this code
    // block is just to show off the feature.
}
```

[^ff]: unfortunately, the implementation relies on a feature that doesn't exist in firefox so i had to add a js shim for it.
shhh, don't tell anyone!

[^character_grid_prior_art]: it was only after i had already finished all of the styling for this site that i discovered [asta](https://anton.io/asta/), which takes this idea even further to align everything to a character grid, using javascript.

### on zola

i picked zola because i have been on a bit of a rust bent lately (it has quickly become my favorite programming language, and like any good convert i have great zeal) and it was the most prominent rust static site generator i came across.
previously, i had only used [jekyll](https://jekyllrb.com/), which was fine, but somehow it never clicked for me.
coming across zola, i was very excited about how much sense it made, as well as it having a strong type system.

unfortunately, there were some annoyances that i encountered with zola.
most of them are relatively petty:

- you can't specify much about the output of the markdown renderer
- it would be nice to be able to define elements that are grouped into a div or similar, especially to group all the `<p>` tags within a certain heading level into a container
- the overall type system wasn't quite as extensive as i would have liked
- the syntax its macro engine, tera, uses for macros is quite clunky
- tera also makes it annoying to define lists of things dynamically
- it insists on being a single binary, which is nice in some ways, but also means that adding any sort of preprocessing to your content is not possible

i also ran into a very annoying thing where i inadvertently upgraded zola to 0.23.0, which randomly broke the entirety of my blog since zola had upgraded its template engine with substantial breaking changes, which was annoying.
the docs also did not update at the same time, so the information contained within was all for the old version, giving advice that did not work anymore.

perhaps i should have picked the even stronger, more extensible type system and used [hakyll](https://jaspervdj.be/hakyll/).
oh well.
that's for the next blog rewrite, i guess.
