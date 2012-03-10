---
layout: default
title: Project
---
_Referring_ is such an essential part of scholarly activity across disciplines that it has been regarded by [John Unsworth](http://people.lis.illinois.edu/~unsworth/Kings.5-00/primitives.html) as one of the scholarly primitives. Browsing and navigating through cited publications are also becoming ubiquitous features of electronic journals and digital tools for managing bibliographic information. 

There is, however, a kind of citation whose potential has not been fully exploited to date. These are called **canonical citations** and are the references used in Classics to refer to passages of ancient texts. Such citations are of essential importance particularly to scholars working on classical primary sources, as they refer to their very research object: texts. Being able to capture and analyse them on a large scale can give us some interesting insights into the dynamics of the reception of texts from both a synchronic and a diachronic perspective.

In my research I deal with the different steps of making these citations computable--namely _[extraction](#extracting)_ and _[modelling](#modelling)_--that are necessary to start [exploiting](#exploiting) them for instance to improve the retrieval of information in Classics.

### Extracting ### {#extracting}

The very first problem to tackle is to extract citations from plain (e.g. unstructured) text, that becomes necessary for the sake of scalability. Manually identifying and annotating citations in texts is--as every other manual annotation task--extremely time-intensive.

At this stage, I deal only with the _surface appearance_ of citations, without considering _what_ are they actually referring to. I have decided to model this problem as [Named Entity Recognition](http://en.wikipedia.org/wiki/Named-entity_recognition) one, meaning that _citations_ are the Named Entities I am trying automatically to extract from texts. See the [code section](code.html) for more information on the pieces of software I am developing to accomplish this.

### Modelling ### {#modelling}

After having extracted citations from texts, it becomes necessary to model and capture their semantics in order to exploit them fully.
For this purpose I am working on a relatively small ontology (in term of classes) which formalises the conceptual model underlying such citations.

The main facts to be modelled are, for instance, that two distinct strings can actually express the very same text reference or that a citation can point to different levels of a text hierarchy (e.g. to an entire book or to a single verse).

### Exploiting ### {#exploiting}

Finally, once citations have been extracted and their meaning have been captured and formalised, it becomes possible to exploit them in various ways.

_Semantic indexing_ and _semantic information_ retrieval are the first obvious consequences. The analysis of the citation network which then emerges is another very interesting research perspective that I am currently exploring--although I am still quite at the beginning.

<!--
## Glossary ##

<dl>
  <dt id="canonical-citation">Canonical Citation</dt>
  <dd>[add definition...]</dd>
</dl>
-->