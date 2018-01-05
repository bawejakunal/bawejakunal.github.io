---
title: Sigma Learn
category: hackathon
excerpt: Hacking with speech to text conversion
feature_text: <h2 class="whitetext highlighted">Sigma Learn @ Columbia ADI Hackathon</h2><span class="whitetext highlighted">Hacking with speech to text conversion</span>
image: "https://c1.staticflickr.com/1/627/32342340582_7bbcb5a2f8_z.jpg"
tags: hackathon nlp
---

This February I participated in [DevFest](https://devfe.st){:target="_blank"}, Columbia University's annual week-long learnathon. For the learnathon of the week, that is the first three days, I focused on the [Data Science Track](https://learn.devfe.st/datascience/){:target="_blank"} to get familiar with data visualization and the statistics behind it. This was a fun learning experience divided into 6 programming modules that I completed over the four days.

The last day of *ADI DevFest* kicked off with an 18 hour hackathon, where my team *Sigma* focussed on developing a prototype web application, *Sigma Learn*, to convert classroom lectures into text notes in real time. The motivation behind this idea was to facilitate students with physical disabilities, for whom it might be difficult to take down running notes. Additionally it can be a boon for lazy students as well :no_mouth:

After juggling with the various speech to text conversion APIs and the minimal API limits we decided to go ahead with [IBM's Speech to Text API](https://www.ibm.com/watson/developercloud/speech-to-text.html){:target="_blank"} for the primary task. In this web application we stream the speaker's speech continually to *IBM Watson API* and obtain the text translation. Upon receiving back the text translation it is appended at the client side to a running text notes in browser, which can later be edited by the reader. Additionally, we also used the [Aylien API](http://aylien.com/text-api){:target="_blank"} to generate a short summary for the speech to text generated previously and YouTube and New York Times APIs to suggest videos and news articles relevant to the lecture topic for the reader.

This hackathon happens to be the first one that I successfully finished with a fulfilling idea and implementation along with my friends and teammates. This was a very good learning opportunity for us and a chance to use Natural Language Processing in real world.

To read more about *Sigma Learn* please head over to our [DevFest Hackathon submission](https://devpost.com/software/sigma-learn){:target="_blank"}.

We have made our source code(a bit messy) available on [GitHub repo](https://github.com/bawejakunal/Sigma-Learn){:target="_blank"} for *Sigma Learn*.
