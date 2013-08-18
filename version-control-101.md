version control 101

(how to never lose your work again)
objective: provide motivation and knowledge about using a (d)vcs

# what, how and why?

* what: versioned storage of (text-) files
* how: you work on something, you *commit* it, back to step 1
* why: look at past attempts, figure out why you did something, go back,
    store work "in the cloud" (e.g. kind of a backup), try out ideas,
    discard them easily without losing anything

# specifics

* you want *distributed* version control (DVCS)
* i'll show you git, but as always there are alternatives
    - git is popular, has a lot of docs & helpful people, but takes a
        little time to get used to

# how, in detail (workflow & terms)

* you work on something (files in a version-controlled directory)
    - e.g. you edit the file ~me/world-domination/RULES.md
* you consider that work somehow "done"
    - when you stop working on it for the day
    - when you want to try some different idea
    - when you think you are done
    - when you reached a first "ok, might be good" stage
    - when you made a small change across a set of files (rename 

# sharing your work

* benefit of DVCSs
* GitHub and Bitbucket both provide unlimited public hosting
    - GitHub is more popular and I like it better, so maybe start there
    - Bitbucket can be used for private projects w/ less than 5 people for free
    - both provide paid-plans (but you probably only need that when working for money)
* work in public *and* ask people for help, so you can get feedback & mentoring
    - private projects aren't so much fun and you miss out on a chance to learn
        something from others

# tips

* one thing per commit (so you get self-contained, understandable steps)
* commit in very small steps
    - "first draft of new chapter"
    - "fixed all the typos"
* don't be afraid to commit unfinished stuff (incomplete writing, styles
    not finished, program not working correctly)
    - if you're working with others, however, you should add notes as to
        what isn't working and code should still run. but that's the topic
        of another talk

# now really, why would i want that? (benefits)

* try out different ideas
    - e.g. i tried 2 ideas for this task and could try many more while
        still being able to look at all steps and all old versions
