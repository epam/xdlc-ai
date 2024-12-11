---
title: AI-assisted coding, Sleeping on a Volcano
authors: [maxim]
tags: [devs, xdlc-ai]
---

![logo](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/4yi7x4r44r6f48rbh72p.png)

> I started this post with the intention to deliver a simple message... AI tools bring convenience, people get lazier and copy/paste hallucinated code, and flaws get missed and not discovered until later. Yet it happened to be longer and deeper.

If you are working in a large software company and **there's a team requesting an AI Chat Bot** for their enterprise project (e.g. copy-and-paste stack traces while debugging errors)... Or they want to use **AI coding assistant** in their IDEs (and keep the generated code in production Git)... After the question of tools cost is sorted and you are cleared by Finance, you will likely be pulled into some "fear-driven" meeting with legal/compliance/IT-security discussing one of the topics:
- Data security
- Privacy
- Copyright

<!-- truncate -->

Nobody wants to be taken accountable for the (potential) failures brought by GenAI or 3rd parties in the supply chain. Those boring and trivial questions consume most of the time in discussions (is it yet another manifestation of [bikeshedding](https://en.wiktionary.org/wiki/bikeshedding)?). Yet a more nuanced (and IMO important) subject how AI can affect the quality of the end product is ignored.

## Change of the Paradigm

There's a joke: "Before ChatGPT I spent my time writing code. Now I spend it debugging and fixing the generated one". 

Providing the dev team with GH CoPilot subscriptions doesn't guarantee getting more with less. It might happen that neither the quality nor quantity of the output will improve. The effects of GenAI adoption in engineering workflows might be more nuanced and deferred.

One popular view on how Generative AI is transforming software development goes as follows: let the engineers focus on the creative aspects of the job and delegate the tedious task of writing code to a GPT/LLM. **This AI-coding paradigm assumes the shift in the dev's job description: from typing in program code to writing instructions and reviewing the generated result, directing the AI model into producing the desired output.**

Here's Andrej Karpathy's [recent quote](https://twitter.com/karpathy/status/1767598414945292695):
> In any case, software engineering is on track to change substantially. And it will look a lot more like supervising the automation, while pitching in high-level commands, ideas, or progression strategies, in English.

And here's a quote from **AI Challenges and Opportunities for Leadership** LinkedIn course (if you haven't heard, LinkedIn recently released [250 free AI courses](https://www.linkedin.com/business/talent/blog/talent-acquisition/250-free-ai-courses)): 
>"... productivity tools that speed up work while enhancing output quality".
![LinkedIn Learning, AI for Senior Managers](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ulh3m7lej10ly4dqpwpz.png)

An average human can type [40 words per minute](https://media.dev.to/cdn-cgi/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fc9pel0p1ygfetfzn4p8z.png) while OpenAI's GPT-4 Turbo API can fare a solid 1100 WPM ([25 tokens per second](https://artificialanalysis.ai/models/gpt-4-turbo/providers)). LLMs are better typists. Besides, we all see news headlines, watch videos, and see tons of content on how GPT-4 does better than most people in different kinds of tasks and exams. 
>**Software Developer + AI = more code + better code. Right?**

February 2024 [claim](https://www.teamblind.com/post/Nvidia-ceo-Jensen-Huang-says-programmers-are-obsolete-JUp3O1vs) from Nvidia CEO's that software devs are obsolete completes the picture.

We've seen many sensational headlines exaggerating LLM capabilities - in many cases when verified they turned out to be exageredted, e.g. ["No, GPT4 can’t ace MIT"](https://www.linkedin.com/posts/maxim-saplin_no-gpt4-cant-ace-mit-activity-7078013877854031872-qd_1?utm_source=share&utm_medium=member_desktop)

## LLM Limits

The vision of using English as a programming language hasn't come true, yet. Let's discuss GPTs and LLMs.

**Models hallucinate.** My experience, external evidence, and opinions of several AI researchers suggest the problem will stay with us. No surprise Microsoft has an army of **Co**-pilots and not a single **pilot** yet...

Technically speaking [100% of what a model generates is hallucination](https://www.youtube.com/watch?v=zjkBMFhNj_g&t=538s). It just happens that most of the text it hallucinates is grounded in real data and the output happens to be factual and reasonable. Until it doesn't. Sometimes parts of the text appear to be false or nonsensical - that is the "LLM hallucinations" in a traditional sense.

There's another angle to the problem of hallucinations. It is about LLM seeing something in the context window/prompt that IS NOT there OR being [blind to something in it](https://towardsdatascience.com/the-needle-in-a-haystack-test-a94974c1ad38). 

When using GPT-4 for some mundane tasks I see it failing simple instructions or generating garbage quite often. E.g. "check the CSV, do something with the rows" - it could get 40 rows as an input and return 37 IDs (while all rows had those). I've seen many occasions of such failures to follow the instructions, missing prompt data, etc. Hence my skepticism towards [claims that RAG is the solution](https://www.pinecone.io/blog/rag-study/) - no, it's not. Even having all the factual data in the context window state-of-the-art models fail to account for this data, they do it randomly wrapping in confident verbosity.

Until there's a [new kind of model architecture](https://twitter.com/ylecun/status/1667218790625468416) and GenAI solutions rely on current architectures we will likely come across [all kinds of crap](https://www.theguardian.com/world/2023/aug/10/pak-n-save-savey-meal-bot-ai-app-malfunction-recipes) GPTs might come up with.

In [this video](https://youtu.be/PAVeYUgknMw?t=313) the author touches on the research of GPT4 irrationality and demonstrates how sometimes syntax wins over semantics - after all LLMs are next-word generators by design and their nature is rooted in language structure, not meanings.

Until the model can produce hallucination-free and accurate output OR learn its limits of knowledge, and reliably flag parts it is unsure of LLM applications can't be watertight - you should always expect some nasty output. 

By the way in [this video](https://youtu.be/fE-VC4MZmy0?t=266) Google's Bard (now Gemini) feature of highlighting the model's confidence was tested (spoiler, it failed).

_On a separate note, I think the whole capacity of LLM to output reasonable text is the emergent ability. Few people expected that the auto-regressive token generator model might turn into the powerhouse GPT3 turned out to be :)_

**Context windows are small**, very small for practical use in AI coding. E.g. GPT-4 with 128k context can only fit [24 average files from Linux kernel](https://dev.to/maximsaplin/gpt-4-128k-context-it-is-not-big-enough-1h02). There are models, such as Claude 3 or Gemini 1.5, that offer 1 million+ context windows in closed beta. But:
- That's still not even close to a typical project into the prompt entirely. In the meantime, the models will rely on text snippets from various files of the solution injected into the prompt with devs hoping RAG can find all relevant and related pieces
- Large context comes at a price of (a) more expensive API calls and (b) slower performance - even if you increase tenfold the size of the context window the performance requirements [will grow 100-fold](https://www.cerebras.net/chip/context-is-everything-why-maximum-sequence-length-matters/)
- Even if the above 2 points are solved (super fast super large context windows), remember the hallucinations. The model might still come across an ["unstable token"](https://youtu.be/zduSFxRajkE?t=7221) or stumble upon a "SolidGoldMagikarp"(https://www.lesswrong.com/posts/aPeJE8bSo6rAFoLqg/solidgoldmagikarp-plus-prompt-generation) snowballing into a nonsensical mess.

## Training Data Considerations

LLMs are trained on large bodies of code, God knows which ones. What are your expectations of an average code? Would it be great or just "average" (or mediocre)? Likely training data will have a bias towards open source projects. What are your expectations of open-source projects? Will LLM see tons of tutorial-like small or abandoned repos? 

When a LLM produces code it generates it "within the distribution" of data seen. On a large scale, it is not possible to evaluate the quality of code and cherry-pick only best-of-the-best repos and use those as training data.

An assumption about training data and its implication that is easy to verify is old code dominating the datasets. If you used an AI coding assistant it's likely you saw some cases when it spit out older versions of libraries. E.g. in my review of [Cody](https://dev.to/maximsaplin/exploring-cody-an-ai-coding-assistant-that-knows-your-codebase-17bh) from August 2023 one of the tests was about importing missing dependencies in a Flutter project. The assistant suggested [http](https://pub.dev/packages/http/versions) package version 0.13.14 from Oct 4, 2021, while the most recent version available at the time of the test was version 1.1.0 from Jun 26, 2023.

## Planting Time-bombs in the Code Base

OK. Who cares if LLMs hallucinate? Is that such a big deal? In some cases, e.g. code generation, they might do better since code is more structured than natural language. Reviewing the code and fixing a problem shouldn't be that hard - reading is faster than writing.

I would argue that **reading code is harder than writing it** - it requires more mental effort. I have seen a lot of reluctance from devs [doing code reviews](https://www.youtube.com/watch?v=rR4n-0KYeKQ). I experienced it personally and can recall the stress of going through unfamiliar code vs. working in flow and enjoying adding new lines to the code I have written before. The same holds for AI-generated code, there's a reluctance to review it. "Generate code -> Run it -> See it working -> Ask the model for a fix" a less mentally effortful loop engaging only [System 1](https://fs.blog/daniel-kahneman-the-two-systems/) thinking.

Pair this AI-assisted "build - run - fix" loop with over-reliance on technology and you get the complacency. Just like there are accounts of GPS nav leading drivers into all sorts of [water bodies](https://www.reddit.com/r/doordash/comments/16smyxw/dd_driver_followed_gps_into_a_body_of_water_saved/) (are blind people allowed to drive?) AI coding can have similar effects on developers.

By the way "LLM09: Overreliance" is part of the Top 10 LLM vulnerabilities by [OWASP](https://owasp.org/www-project-top-10-for-large-language-model-applications/assets/PDF/OWASP-Top-10-for-LLMs-2023-v1_1.pdf).

It is the **convenience** of AI coding, the behaviors it provokes, and human nature -  all of that lead to the risk of nuanced bugs that are missed and discovered further down the line.

Have a look at this [example](https://madappgang.com/blog/chat-gpt-code-errors/) of generating a basic JWT authentication in Go. The code builds and runs just fine, yet there are 5 issues spotted by an experienced eye, including using a deprecated library with critical security vulnerability OR "repeating people's mistake" by choosing the least secure token type. 

[Copilot amplifies insecure codebases by replicating vulnerabilities in your projects](https://snyk.io/de/blog/copilot-amplifies-insecure-codebases-by-replicating-vulnerabilities/) is a blog post by a security firm that demonstrates how Copilot happily duplicates and multiplies the already existing issues (as seen by AI in the context) in the newly generated code.

There's weak evidence of people's reluctance to change (and likely to review) the AI-generated code in [industry data](https://visualstudiomagazine.com/articles/2024/01/25/copilot-research.aspx): after 2021 (the start of Copilot era) there's more new code being added and more code being copied and pasted compared to code being updated, removed, or rearranged.

Another piece of evidence calling out human laziness and use of GenAI is this [recent study](https://dev.to/maximsaplin/llms-commendable-innovative-meticulous-notable-versatile-intricate-impact-f75) which draws a grim picture on what might come next - people behaving as poor students and doing late submissions of something they hastily compiled from the internet.

## AI-coding is great!

With that much skepticism (as it might seem) towards foundational models and their application to coding I can't imagine going back. GenAI tools have become an integral part of my workflows, I enjoy AI assistant in my IDE! 

It's just the sensationalism of media and roaring headlines that made things worse, they widened the gap between what AI can do well and what many people expect.

To me (and at this point) AI assistants are closer to ergonomic tools (like IntelliSense or ReSharper). The are not some autonomous agents that can be delegated with complex tasks, not even the easy ones - we are not there yet. Assistants haven't brought many new use cases that are truly groundbreaking in could change the lives of engineers.

With deflated expectations, intuition around capabilities and limitations behind LLMs powering all kinds of copilots you can reach the harmony and see not huge, yet noticeable personal productivity gains.

See my [review of Cursor.sh](https://dev.to/maximsaplin/-cursorsh-a-competitor-to-github-copilot-58k4) - a VSCode fork integrating AI coding. I tried to lay out my view on the state of copilots and list what works and what does not.

## Outro

AI-assisted coding represents a significant leap forward for software development, but it is not without its challenges. As we integrate these tools into our workflows, we must do so with a critical eye, understanding their limitations and potential risks.

Developers must become the gatekeepers of AI-generated code, ensuring its quality before it becomes part of the products that shape our world. By nurturing a culture of responsibility and discernment, we can leverage AI to enhance our capabilities without compromising our standards or the trust of those who rely on our software. 

Being lazy and ignorant of LLM constraints we will amplify the deficiencies GenAI can bring along, pushing the flaws within the generated output that may not manifest until much later.