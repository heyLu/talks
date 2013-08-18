version control 101

(how to never lose your work again)
objective: show using a vcs using real-world problems

* 10 minutes
* demonstrate common workflow (add, commit, reset, mv/rm, branch/checkout, push)
* motivate vcs use w/ real problems, ideally on a simple example

possible examples:

* write a presentation (such as this one)
* write a blog
* write a simple program (using an existing one?)
* use [Try Git](http://try.github.io)

# have you ever ...?

* written/programmed something awesome and then lost it?
    - if not, you will soon
    - could be hard drive failure/theft, accidentally deleted
* wanted to try out a new idea without losing existing work?
    - duplicating a file, changing it and then manually comparing them sucks
* wanted to work on some idea with someone else concurrently?
    - dropbox & co are made for sharing, not working together

# well, a VCS is there to help

* VCS = version control system
* `git` is a DVCS (distributed VCS)
* starting out is easy
* you benefit now (never lose work, try out new ideas, collaborate)
* and can learn more as you go (worked for me, plenty of tutorials/people
    to help you)

# how it works

the rest of this talk, with a running example. i would like that
example to do something interesting that could be picked up by the
audience and continue to be developed.

* you make a directory version controlled (`init`)
* you work on some file(s) in that directory
* you add it to the vcs (`add`)
* you store it's current state (`commit`)
* you continue working
* you decide the new state is worth storing (`commit` again)
* you can try out new ideas (`branch`)
* you can share with others (`push`, `pull` and `merge`)

# tips

* works best with text files (blogs/books/papers, programs, configuration files)
    - e.g. images and office documents can be stored, but not as easily compared

# how to continue?

* [try git](https://try.github.io)
* use it for something (for example the app you'll create today; you'll
    need `init`, `add` and `commit`)
* learn as you go (search [StackOverflow](http://stackoverflow.com) and the web)
* or probably read a book about it
