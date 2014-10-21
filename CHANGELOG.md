<a name="0.21.1"></a>
### 0.21.1 (2014-10-21)


#### Bug Fixes

* **analytics:**
  * add categories to events ((2f2fe9b5))
  * remove first page view ((4b5dbeb0))
* **auth:** add loading the current user whenever the page loads ((4abb4ca8))
* **build:** change github url to non-https ((8a64c733))
* **diary:** change the styles to match medium more. bigger fonts. ((cfcff7a0))
* **download:** update url ((bb8b6cc5))
* **download-url:** bump to next version ((caf4f041))
* **feed:**
  * fix posting text status ((b4271109), closes (#30))
  * clear status box after submitting ((f3a31f3b), closes (#27))
  * fix offline ((232b8a82))
  * offline users works when offline ((25f6c269))
  * limit removed on offline users ((d3733d81))
  * change feedback link to have mac app as well as website ((1eff2568))
  * fix user dropdown needing to be double clicked ((defadf93))
  * access your projects from the user dropdown menu ((494e1df1))
  * limit ((72e8d3c2))
  * increase feed post limit visible ((0ae2935c))
* **homepage:**
  * fix icons too large in nabber ((df3ad43f))
  * fix homepage redirecting ((9a392ac9))
* **landing:**
  * add mac app download link to homepage ((ab3ec568))
  * changed the copy again to emphasise journals ((06e20ae1))
* **landing-page:**
  * change journal to visual diary ((cd702122))
  * more copy change ((b5ee730c))
  * change copy on landing page ((36dd99b0))
  * brand logo now links to landing page ((ef339b83))
* **leaderboard:**
  * tweak message ((90ea5ed5))
  * add ranking ((41295543))
* **nabber:**
  * add logo ((0eb2a14e))
  * change how the notifications look ((b155a0a8))
  * fix brand appearing twice on initial page render ((30c18c99))
* **navbar:**
  * change username to my projects ((0dcc5ee2))
  * brand logo and login register appear when they should ((13c52723))
* **notifications:**
  * allow html characters ((814aa2ee))
  * fix notifications loading ((f652d45d))
  * add read status ((4647f475))
* **online:** change projects to link to diary page ((e53e5853))
* **post:**
  * new post appears with most info ((f9753b97))
  * deleting post removes it from the field ((12797a26), closes (#28))
  * fix like formatting ((b50cd9b6), closes (#26))
  * add max height to images ((fc38e330))
  * change image background color ((0adb217c))
  * add user picture ((171f7b5e))
  * fix error caused by missing user on some comments ((c357f443))
* **posts:** disable comment ((9d0cc434))
* **project:** increase post limit visible ((746f71c6))
* **project-page:** only show entries that have photos ((aec9f836))
* **projects:**
  * add times and fix fonts ((46f284e1))
  * restyle the users projects page ((62da6b67))
* **registration:** disable register button after 1 click ((09ad13ae))
* **status:** fix offline list displays when current user is offline ((79d1c900))
* **text-box:** styled it a bit ((011167b8))
* **time-lapse:**
  * remove time lapse and make optional ((6c299863))
  * fix spacing kinda ((d7fe5e18))
  * fix time-lapse not including last post ((dbdf6a16))
* **youtube-embed:** add aspect ratio videos ((be51168b))


#### Features

* **analytics:**
  * add more events for tracking ((36cecf88))
  * add event tracking to posts ((dc4c9c31))
  * add google analytics ((2120abb6))
* **build:**
  * add grunt bump and changelog ((f7a72ff1))
  * change build control options ((ecba3f6f))
  * add build control tool ((8f8a36d4))
* **diary:**
  * add youtube embedding in the diary ((c55657a6))
  * add text posts ((d0f65539))
  * add new project info box ((351b6b6a))
* **diary-page:** add first look at diary page ((8a2e6369))
* **feed:**
  * add manual picture uploading ((d2eac843))
  * add leaderboard ((e802f153))
  * add post ui for new post ((dca2e9b4))
  * add offline users ((db42433b))
* **feedback:** add github issues link to feedback ((a5316720))
* **landing-page:** add basic landing page ((d32fb74d))
* **loading-bar:** add global loading bar ((c94de92f))
* **nabber:**
  * add mark as read for notifications ((c2e8cf2a))
  * add ringing bell for notification alert ((87e9121e))
* **navbar:** add my projects link under config ((c43bcc03))
* **notifications:** add mark all as read ((cdd370e5))
* **notifictions:** add notifications ((a970e0eb))
* **onboard:** add setup guide page ((7c8710cb))
* **post:**
  * add embedding youtube videos ((91ce12ad), closes (#35))
  * add background color to images ((8dfc1716))
* **posts:**
  * enable links in text ((bab7d8c0))
  * update project links to diary page ((7fa4ae79))
* **project-page:** add project timelapse ((fb75da76))
* **text-post:** add posting ((32288832))


<a name="0.21.0"></a>
## 0.21.0 (2014-10-21)


#### Bug Fixes

* **analytics:**
  * add categories to events ((2f2fe9b5))
  * remove first page view ((4b5dbeb0))
* **auth:** add loading the current user whenever the page loads ((4abb4ca8))
* **build:** change github url to non-https ((8a64c733))
* **diary:** change the styles to match medium more. bigger fonts. ((cfcff7a0))
* **download:** update url ((bb8b6cc5))
* **download-url:** bump to next version ((caf4f041))
* **feed:**
  * fix posting text status ((b4271109), closes (#30))
  * clear status box after submitting ((f3a31f3b), closes (#27))
  * fix offline ((232b8a82))
  * offline users works when offline ((25f6c269))
  * limit removed on offline users ((d3733d81))
  * change feedback link to have mac app as well as website ((1eff2568))
  * fix user dropdown needing to be double clicked ((defadf93))
  * access your projects from the user dropdown menu ((494e1df1))
  * limit ((72e8d3c2))
  * increase feed post limit visible ((0ae2935c))
* **homepage:**
  * fix icons too large in nabber ((df3ad43f))
  * fix homepage redirecting ((9a392ac9))
* **landing:**
  * add mac app download link to homepage ((ab3ec568))
  * changed the copy again to emphasise journals ((06e20ae1))
* **landing-page:**
  * change journal to visual diary ((cd702122))
  * more copy change ((b5ee730c))
  * change copy on landing page ((36dd99b0))
  * brand logo now links to landing page ((ef339b83))
* **leaderboard:**
  * tweak message ((90ea5ed5))
  * add ranking ((41295543))
* **nabber:**
  * add logo ((0eb2a14e))
  * change how the notifications look ((b155a0a8))
  * fix brand appearing twice on initial page render ((30c18c99))
* **navbar:**
  * change username to my projects ((0dcc5ee2))
  * brand logo and login register appear when they should ((13c52723))
* **notifications:**
  * allow html characters ((814aa2ee))
  * fix notifications loading ((f652d45d))
  * add read status ((4647f475))
* **online:** change projects to link to diary page ((e53e5853))
* **post:**
  * new post appears with most info ((f9753b97))
  * deleting post removes it from the field ((12797a26), closes (#28))
  * fix like formatting ((b50cd9b6), closes (#26))
  * add max height to images ((fc38e330))
  * change image background color ((0adb217c))
  * add user picture ((171f7b5e))
  * fix error caused by missing user on some comments ((c357f443))
* **posts:** disable comment ((9d0cc434))
* **project:** increase post limit visible ((746f71c6))
* **project-page:** only show entries that have photos ((aec9f836))
* **projects:**
  * add times and fix fonts ((46f284e1))
  * restyle the users projects page ((62da6b67))
* **registration:** disable register button after 1 click ((09ad13ae))
* **status:** fix offline list displays when current user is offline ((79d1c900))
* **text-box:** styled it a bit ((011167b8))
* **time-lapse:**
  * remove time lapse and make optional ((6c299863))
  * fix spacing kinda ((d7fe5e18))
  * fix time-lapse not including last post ((dbdf6a16))


#### Features

* **analytics:**
  * add more events for tracking ((36cecf88))
  * add event tracking to posts ((dc4c9c31))
  * add google analytics ((2120abb6))
* **build:**
  * add grunt bump and changelog ((f7a72ff1))
  * change build control options ((ecba3f6f))
  * add build control tool ((8f8a36d4))
* **diary:**
  * add text posts ((d0f65539))
  * add new project info box ((351b6b6a))
* **diary-page:** add first look at diary page ((8a2e6369))
* **feed:**
  * add manual picture uploading ((d2eac843))
  * add leaderboard ((e802f153))
  * add post ui for new post ((dca2e9b4))
  * add offline users ((db42433b))
* **feedback:** add github issues link to feedback ((a5316720))
* **landing-page:** add basic landing page ((d32fb74d))
* **loading-bar:** add global loading bar ((c94de92f))
* **nabber:**
  * add mark as read for notifications ((c2e8cf2a))
  * add ringing bell for notification alert ((87e9121e))
* **navbar:** add my projects link under config ((c43bcc03))
* **notifications:** add mark all as read ((cdd370e5))
* **notifictions:** add notifications ((a970e0eb))
* **onboard:** add setup guide page ((7c8710cb))
* **post:**
  * add embedding youtube videos ((91ce12ad), closes (#35))
  * add background color to images ((8dfc1716))
* **posts:**
  * enable links in text ((bab7d8c0))
  * update project links to diary page ((7fa4ae79))
* **project-page:** add project timelapse ((fb75da76))
* **text-post:** add posting ((32288832))


<a name="0.20.2"></a>
### 0.20.2 (2014-10-09)


#### Bug Fixes

* **analytics:**
  * add categories to events ((2f2fe9b5))
  * remove first page view ((4b5dbeb0))
* **auth:** add loading the current user whenever the page loads ((4abb4ca8))
* **build:** change github url to non-https ((8a64c733))
* **diary:** change the styles to match medium more. bigger fonts. ((cfcff7a0))
* **download:** update url ((bb8b6cc5))
* **download-url:** bump to next version ((caf4f041))
* **feed:**
  * fix posting text status ((b4271109), closes (#30))
  * clear status box after submitting ((f3a31f3b), closes (#27))
  * fix offline ((232b8a82))
  * offline users works when offline ((25f6c269))
  * limit removed on offline users ((d3733d81))
  * change feedback link to have mac app as well as website ((1eff2568))
  * fix user dropdown needing to be double clicked ((defadf93))
  * access your projects from the user dropdown menu ((494e1df1))
  * limit ((72e8d3c2))
  * increase feed post limit visible ((0ae2935c))
* **homepage:**
  * fix icons too large in nabber ((df3ad43f))
  * fix homepage redirecting ((9a392ac9))
* **landing:**
  * add mac app download link to homepage ((ab3ec568))
  * changed the copy again to emphasise journals ((06e20ae1))
* **landing-page:**
  * change journal to visual diary ((cd702122))
  * more copy change ((b5ee730c))
  * change copy on landing page ((36dd99b0))
  * brand logo now links to landing page ((ef339b83))
* **leaderboard:**
  * tweak message ((90ea5ed5))
  * add ranking ((41295543))
* **nabber:**
  * add logo ((0eb2a14e))
  * change how the notifications look ((b155a0a8))
  * fix brand appearing twice on initial page render ((30c18c99))
* **navbar:**
  * change username to my projects ((0dcc5ee2))
  * brand logo and login register appear when they should ((13c52723))
* **notifications:**
  * allow html characters ((814aa2ee))
  * fix notifications loading ((f652d45d))
  * add read status ((4647f475))
* **online:** change projects to link to diary page ((e53e5853))
* **post:**
  * new post appears with most info ((f9753b97))
  * deleting post removes it from the field ((12797a26), closes (#28))
  * fix like formatting ((b50cd9b6), closes (#26))
  * add max height to images ((fc38e330))
  * change image background color ((0adb217c))
  * add user picture ((171f7b5e))
  * fix error caused by missing user on some comments ((c357f443))
* **posts:** disable comment ((9d0cc434))
* **project:** increase post limit visible ((746f71c6))
* **project-page:** only show entries that have photos ((aec9f836))
* **projects:**
  * add times and fix fonts ((46f284e1))
  * restyle the users projects page ((62da6b67))
* **registration:** disable register button after 1 click ((09ad13ae))
* **status:** fix offline list displays when current user is offline ((79d1c900))
* **text-box:** styled it a bit ((011167b8))
* **time-lapse:**
  * remove time lapse and make optional ((6c299863))
  * fix spacing kinda ((d7fe5e18))
  * fix time-lapse not including last post ((dbdf6a16))


#### Features

* **analytics:**
  * add more events for tracking ((36cecf88))
  * add event tracking to posts ((dc4c9c31))
  * add google analytics ((2120abb6))
* **build:**
  * add grunt bump and changelog ((f7a72ff1))
  * change build control options ((ecba3f6f))
  * add build control tool ((8f8a36d4))
* **diary:**
  * add text posts ((d0f65539))
  * add new project info box ((351b6b6a))
* **diary-page:** add first look at diary page ((8a2e6369))
* **feed:**
  * add manual picture uploading ((d2eac843))
  * add leaderboard ((e802f153))
  * add post ui for new post ((dca2e9b4))
  * add offline users ((db42433b))
* **feedback:** add github issues link to feedback ((a5316720))
* **landing-page:** add basic landing page ((d32fb74d))
* **loading-bar:** add global loading bar ((c94de92f))
* **nabber:**
  * add mark as read for notifications ((c2e8cf2a))
  * add ringing bell for notification alert ((87e9121e))
* **navbar:** add my projects link under config ((c43bcc03))
* **notifications:** add mark all as read ((cdd370e5))
* **notifictions:** add notifications ((a970e0eb))
* **onboard:** add setup guide page ((7c8710cb))
* **post:** add background color to images ((8dfc1716))
* **posts:**
  * enable links in text ((bab7d8c0))
  * update project links to diary page ((7fa4ae79))
* **project-page:** add project timelapse ((fb75da76))
* **text-post:** add posting ((32288832))


<a name="0.20.1"></a>
### 0.20.1 (2014-10-08)


#### Bug Fixes

* **analytics:** remove first page view ((4b5dbeb0))
* **auth:** add loading the current user whenever the page loads ((4abb4ca8))
* **build:** change github url to non-https ((8a64c733))
* **diary:** change the styles to match medium more. bigger fonts. ((cfcff7a0))
* **download:** update url ((bb8b6cc5))
* **download-url:** bump to next version ((caf4f041))
* **feed:**
  * fix posting text status ((b4271109), closes (#30))
  * clear status box after submitting ((f3a31f3b), closes (#27))
  * fix offline ((232b8a82))
  * offline users works when offline ((25f6c269))
  * limit removed on offline users ((d3733d81))
  * change feedback link to have mac app as well as website ((1eff2568))
  * fix user dropdown needing to be double clicked ((defadf93))
  * access your projects from the user dropdown menu ((494e1df1))
  * limit ((72e8d3c2))
  * increase feed post limit visible ((0ae2935c))
* **homepage:**
  * fix icons too large in nabber ((df3ad43f))
  * fix homepage redirecting ((9a392ac9))
* **landing:**
  * add mac app download link to homepage ((ab3ec568))
  * changed the copy again to emphasise journals ((06e20ae1))
* **landing-page:**
  * change journal to visual diary ((cd702122))
  * more copy change ((b5ee730c))
  * change copy on landing page ((36dd99b0))
  * brand logo now links to landing page ((ef339b83))
* **leaderboard:**
  * tweak message ((90ea5ed5))
  * add ranking ((41295543))
* **nabber:**
  * add logo ((0eb2a14e))
  * change how the notifications look ((b155a0a8))
  * fix brand appearing twice on initial page render ((30c18c99))
* **navbar:**
  * change username to my projects ((0dcc5ee2))
  * brand logo and login register appear when they should ((13c52723))
* **notifications:**
  * allow html characters ((814aa2ee))
  * fix notifications loading ((f652d45d))
  * add read status ((4647f475))
* **online:** change projects to link to diary page ((e53e5853))
* **post:**
  * new post appears with most info ((f9753b97))
  * deleting post removes it from the field ((12797a26), closes (#28))
  * fix like formatting ((b50cd9b6), closes (#26))
  * add max height to images ((fc38e330))
  * change image background color ((0adb217c))
  * add user picture ((171f7b5e))
  * fix error caused by missing user on some comments ((c357f443))
* **posts:** disable comment ((9d0cc434))
* **project:** increase post limit visible ((746f71c6))
* **project-page:** only show entries that have photos ((aec9f836))
* **projects:**
  * add times and fix fonts ((46f284e1))
  * restyle the users projects page ((62da6b67))
* **registration:** disable register button after 1 click ((09ad13ae))
* **status:** fix offline list displays when current user is offline ((79d1c900))
* **text-box:** styled it a bit ((011167b8))
* **time-lapse:**
  * remove time lapse and make optional ((6c299863))
  * fix spacing kinda ((d7fe5e18))
  * fix time-lapse not including last post ((dbdf6a16))


#### Features

* **analytics:**
  * add more events for tracking ((36cecf88))
  * add event tracking to posts ((dc4c9c31))
  * add google analytics ((2120abb6))
* **build:**
  * add grunt bump and changelog ((f7a72ff1))
  * change build control options ((ecba3f6f))
  * add build control tool ((8f8a36d4))
* **diary:**
  * add text posts ((d0f65539))
  * add new project info box ((351b6b6a))
* **diary-page:** add first look at diary page ((8a2e6369))
* **feed:**
  * add manual picture uploading ((d2eac843))
  * add leaderboard ((e802f153))
  * add post ui for new post ((dca2e9b4))
  * add offline users ((db42433b))
* **feedback:** add github issues link to feedback ((a5316720))
* **landing-page:** add basic landing page ((d32fb74d))
* **loading-bar:** add global loading bar ((c94de92f))
* **nabber:**
  * add mark as read for notifications ((c2e8cf2a))
  * add ringing bell for notification alert ((87e9121e))
* **navbar:** add my projects link under config ((c43bcc03))
* **notifications:** add mark all as read ((cdd370e5))
* **notifictions:** add notifications ((a970e0eb))
* **onboard:** add setup guide page ((7c8710cb))
* **post:** add background color to images ((8dfc1716))
* **posts:**
  * enable links in text ((bab7d8c0))
  * update project links to diary page ((7fa4ae79))
* **project-page:** add project timelapse ((fb75da76))
* **text-post:** add posting ((32288832))


<a name="0.20.0"></a>
## 0.20.0 (2014-10-08)


#### Features

* **analytics:** add event tracking to posts ((dc4c9c31))


<a name="0.19.3"></a>
### 0.19.3 (2014-10-08)


#### Bug Fixes

* **analytics:** remove first page view ((4b5dbeb0))
* **auth:** add loading the current user whenever the page loads ((4abb4ca8))
* **build:** change github url to non-https ((8a64c733))
* **diary:** change the styles to match medium more. bigger fonts. ((cfcff7a0))
* **download:** update url ((bb8b6cc5))
* **download-url:** bump to next version ((caf4f041))
* **feed:**
  * fix posting text status ((b4271109), closes (#30))
  * clear status box after submitting ((f3a31f3b), closes (#27))
  * fix offline ((232b8a82))
  * offline users works when offline ((25f6c269))
  * limit removed on offline users ((d3733d81))
  * change feedback link to have mac app as well as website ((1eff2568))
  * fix user dropdown needing to be double clicked ((defadf93))
  * access your projects from the user dropdown menu ((494e1df1))
  * limit ((72e8d3c2))
  * increase feed post limit visible ((0ae2935c))
* **homepage:**
  * fix icons too large in nabber ((df3ad43f))
  * fix homepage redirecting ((9a392ac9))
* **landing:**
  * add mac app download link to homepage ((ab3ec568))
  * changed the copy again to emphasise journals ((06e20ae1))
* **landing-page:**
  * change journal to visual diary ((cd702122))
  * more copy change ((b5ee730c))
  * change copy on landing page ((36dd99b0))
  * brand logo now links to landing page ((ef339b83))
* **leaderboard:**
  * tweak message ((90ea5ed5))
  * add ranking ((41295543))
* **nabber:**
  * add logo ((0eb2a14e))
  * change how the notifications look ((b155a0a8))
  * fix brand appearing twice on initial page render ((30c18c99))
* **navbar:**
  * change username to my projects ((0dcc5ee2))
  * brand logo and login register appear when they should ((13c52723))
* **notifications:**
  * allow html characters ((814aa2ee))
  * fix notifications loading ((f652d45d))
  * add read status ((4647f475))
* **online:** change projects to link to diary page ((e53e5853))
* **post:**
  * new post appears with most info ((f9753b97))
  * deleting post removes it from the field ((12797a26), closes (#28))
  * fix like formatting ((b50cd9b6), closes (#26))
  * add max height to images ((fc38e330))
  * change image background color ((0adb217c))
  * add user picture ((171f7b5e))
  * fix error caused by missing user on some comments ((c357f443))
* **posts:** disable comment ((9d0cc434))
* **project:** increase post limit visible ((746f71c6))
* **project-page:** only show entries that have photos ((aec9f836))
* **projects:**
  * add times and fix fonts ((46f284e1))
  * restyle the users projects page ((62da6b67))
* **registration:** disable register button after 1 click ((09ad13ae))
* **status:** fix offline list displays when current user is offline ((79d1c900))
* **text-box:** styled it a bit ((011167b8))
* **time-lapse:**
  * remove time lapse and make optional ((6c299863))
  * fix spacing kinda ((d7fe5e18))
  * fix time-lapse not including last post ((dbdf6a16))


#### Features

* **analytics:** add google analytics ((2120abb6))
* **build:**
  * add grunt bump and changelog ((f7a72ff1))
  * change build control options ((ecba3f6f))
  * add build control tool ((8f8a36d4))
* **diary:**
  * add text posts ((d0f65539))
  * add new project info box ((351b6b6a))
* **diary-page:** add first look at diary page ((8a2e6369))
* **feed:**
  * add manual picture uploading ((d2eac843))
  * add leaderboard ((e802f153))
  * add post ui for new post ((dca2e9b4))
  * add offline users ((db42433b))
* **feedback:** add github issues link to feedback ((a5316720))
* **landing-page:** add basic landing page ((d32fb74d))
* **loading-bar:** add global loading bar ((c94de92f))
* **nabber:**
  * add mark as read for notifications ((c2e8cf2a))
  * add ringing bell for notification alert ((87e9121e))
* **navbar:** add my projects link under config ((c43bcc03))
* **notifications:** add mark all as read ((cdd370e5))
* **notifictions:** add notifications ((a970e0eb))
* **onboard:** add setup guide page ((7c8710cb))
* **post:** add background color to images ((8dfc1716))
* **posts:**
  * enable links in text ((bab7d8c0))
  * update project links to diary page ((7fa4ae79))
* **project-page:** add project timelapse ((fb75da76))
* **text-post:** add posting ((32288832))


<a name="0.19.2"></a>
### 0.19.2 (2014-10-08)


#### Bug Fixes

* **auth:** add loading the current user whenever the page loads ((4abb4ca8))
* **build:** change github url to non-https ((8a64c733))
* **diary:** change the styles to match medium more. bigger fonts. ((cfcff7a0))
* **download:** update url ((bb8b6cc5))
* **download-url:** bump to next version ((caf4f041))
* **feed:**
  * fix posting text status ((b4271109), closes (#30))
  * clear status box after submitting ((f3a31f3b), closes (#27))
  * fix offline ((232b8a82))
  * offline users works when offline ((25f6c269))
  * limit removed on offline users ((d3733d81))
  * change feedback link to have mac app as well as website ((1eff2568))
  * fix user dropdown needing to be double clicked ((defadf93))
  * access your projects from the user dropdown menu ((494e1df1))
  * limit ((72e8d3c2))
  * increase feed post limit visible ((0ae2935c))
* **homepage:**
  * fix icons too large in nabber ((df3ad43f))
  * fix homepage redirecting ((9a392ac9))
* **landing:**
  * add mac app download link to homepage ((ab3ec568))
  * changed the copy again to emphasise journals ((06e20ae1))
* **landing-page:**
  * change journal to visual diary ((cd702122))
  * more copy change ((b5ee730c))
  * change copy on landing page ((36dd99b0))
  * brand logo now links to landing page ((ef339b83))
* **leaderboard:**
  * tweak message ((90ea5ed5))
  * add ranking ((41295543))
* **nabber:**
  * add logo ((0eb2a14e))
  * change how the notifications look ((b155a0a8))
  * fix brand appearing twice on initial page render ((30c18c99))
* **navbar:**
  * change username to my projects ((0dcc5ee2))
  * brand logo and login register appear when they should ((13c52723))
* **notifications:**
  * allow html characters ((814aa2ee))
  * fix notifications loading ((f652d45d))
  * add read status ((4647f475))
* **online:** change projects to link to diary page ((e53e5853))
* **post:**
  * new post appears with most info ((f9753b97))
  * deleting post removes it from the field ((12797a26), closes (#28))
  * fix like formatting ((b50cd9b6), closes (#26))
  * add max height to images ((fc38e330))
  * change image background color ((0adb217c))
  * add user picture ((171f7b5e))
  * fix error caused by missing user on some comments ((c357f443))
* **posts:** disable comment ((9d0cc434))
* **project:** increase post limit visible ((746f71c6))
* **project-page:** only show entries that have photos ((aec9f836))
* **projects:**
  * add times and fix fonts ((46f284e1))
  * restyle the users projects page ((62da6b67))
* **registration:** disable register button after 1 click ((09ad13ae))
* **status:** fix offline list displays when current user is offline ((79d1c900))
* **text-box:** styled it a bit ((011167b8))
* **time-lapse:**
  * remove time lapse and make optional ((6c299863))
  * fix spacing kinda ((d7fe5e18))
  * fix time-lapse not including last post ((dbdf6a16))


#### Features

* **analytics:** add google analytics ((2120abb6))
* **build:**
  * add grunt bump and changelog ((f7a72ff1))
  * change build control options ((ecba3f6f))
  * add build control tool ((8f8a36d4))
* **diary:**
  * add text posts ((d0f65539))
  * add new project info box ((351b6b6a))
* **diary-page:** add first look at diary page ((8a2e6369))
* **feed:**
  * add manual picture uploading ((d2eac843))
  * add leaderboard ((e802f153))
  * add post ui for new post ((dca2e9b4))
  * add offline users ((db42433b))
* **feedback:** add github issues link to feedback ((a5316720))
* **landing-page:** add basic landing page ((d32fb74d))
* **loading-bar:** add global loading bar ((c94de92f))
* **nabber:**
  * add mark as read for notifications ((c2e8cf2a))
  * add ringing bell for notification alert ((87e9121e))
* **navbar:** add my projects link under config ((c43bcc03))
* **notifications:** add mark all as read ((cdd370e5))
* **notifictions:** add notifications ((a970e0eb))
* **onboard:** add setup guide page ((7c8710cb))
* **post:** add background color to images ((8dfc1716))
* **posts:**
  * enable links in text ((bab7d8c0))
  * update project links to diary page ((7fa4ae79))
* **project-page:** add project timelapse ((fb75da76))
* **text-post:** add posting ((32288832))


<a name="0.19.1"></a>
### 0.19.1 (2014-10-08)


#### Bug Fixes

* **auth:** add loading the current user whenever the page loads ((4abb4ca8))
* **build:** change github url to non-https ((8a64c733))
* **diary:** change the styles to match medium more. bigger fonts. ((cfcff7a0))
* **download:** update url ((bb8b6cc5))
* **download-url:** bump to next version ((caf4f041))
* **feed:**
  * fix posting text status ((b4271109), closes (#30))
  * clear status box after submitting ((f3a31f3b), closes (#27))
  * fix offline ((232b8a82))
  * offline users works when offline ((25f6c269))
  * limit removed on offline users ((d3733d81))
  * change feedback link to have mac app as well as website ((1eff2568))
  * fix user dropdown needing to be double clicked ((defadf93))
  * access your projects from the user dropdown menu ((494e1df1))
  * limit ((72e8d3c2))
  * increase feed post limit visible ((0ae2935c))
* **homepage:**
  * fix icons too large in nabber ((df3ad43f))
  * fix homepage redirecting ((9a392ac9))
* **landing:**
  * add mac app download link to homepage ((ab3ec568))
  * changed the copy again to emphasise journals ((06e20ae1))
* **landing-page:**
  * change journal to visual diary ((cd702122))
  * more copy change ((b5ee730c))
  * change copy on landing page ((36dd99b0))
  * brand logo now links to landing page ((ef339b83))
* **leaderboard:**
  * tweak message ((90ea5ed5))
  * add ranking ((41295543))
* **nabber:**
  * add logo ((0eb2a14e))
  * change how the notifications look ((b155a0a8))
  * fix brand appearing twice on initial page render ((30c18c99))
* **navbar:**
  * change username to my projects ((0dcc5ee2))
  * brand logo and login register appear when they should ((13c52723))
* **notifications:**
  * allow html characters ((814aa2ee))
  * fix notifications loading ((f652d45d))
  * add read status ((4647f475))
* **online:** change projects to link to diary page ((e53e5853))
* **post:**
  * new post appears with most info ((f9753b97))
  * deleting post removes it from the field ((12797a26), closes (#28))
  * fix like formatting ((b50cd9b6), closes (#26))
  * add max height to images ((fc38e330))
  * change image background color ((0adb217c))
  * add user picture ((171f7b5e))
  * fix error caused by missing user on some comments ((c357f443))
* **posts:** disable comment ((9d0cc434))
* **project:** increase post limit visible ((746f71c6))
* **project-page:** only show entries that have photos ((aec9f836))
* **projects:**
  * add times and fix fonts ((46f284e1))
  * restyle the users projects page ((62da6b67))
* **registration:** disable register button after 1 click ((09ad13ae))
* **status:** fix offline list displays when current user is offline ((79d1c900))
* **text-box:** styled it a bit ((011167b8))
* **time-lapse:**
  * remove time lapse and make optional ((6c299863))
  * fix spacing kinda ((d7fe5e18))
  * fix time-lapse not including last post ((dbdf6a16))


#### Features

* **analytics:** add google analytics ((2120abb6))
* **build:**
  * add grunt bump and changelog ((f7a72ff1))
  * change build control options ((ecba3f6f))
  * add build control tool ((8f8a36d4))
* **diary:**
  * add text posts ((d0f65539))
  * add new project info box ((351b6b6a))
* **diary-page:** add first look at diary page ((8a2e6369))
* **feed:**
  * add manual picture uploading ((d2eac843))
  * add leaderboard ((e802f153))
  * add post ui for new post ((dca2e9b4))
  * add offline users ((db42433b))
* **feedback:** add github issues link to feedback ((a5316720))
* **landing-page:** add basic landing page ((d32fb74d))
* **loading-bar:** add global loading bar ((c94de92f))
* **nabber:**
  * add mark as read for notifications ((c2e8cf2a))
  * add ringing bell for notification alert ((87e9121e))
* **navbar:** add my projects link under config ((c43bcc03))
* **notifications:** add mark all as read ((cdd370e5))
* **notifictions:** add notifications ((a970e0eb))
* **onboard:** add setup guide page ((7c8710cb))
* **post:** add background color to images ((8dfc1716))
* **posts:**
  * enable links in text ((bab7d8c0))
  * update project links to diary page ((7fa4ae79))
* **project-page:** add project timelapse ((fb75da76))
* **text-post:** add posting ((32288832))


<a name="0.19.0"></a>
## 0.19.0 (2014-10-08)


#### Bug Fixes

* **auth:** add loading the current user whenever the page loads ((4abb4ca8))
* **build:** change github url to non-https ((8a64c733))
* **diary:** change the styles to match medium more. bigger fonts. ((cfcff7a0))
* **download:** update url ((bb8b6cc5))
* **download-url:** bump to next version ((caf4f041))
* **feed:**
  * fix posting text status ((b4271109), closes (#30))
  * clear status box after submitting ((f3a31f3b), closes (#27))
  * fix offline ((232b8a82))
  * offline users works when offline ((25f6c269))
  * limit removed on offline users ((d3733d81))
  * change feedback link to have mac app as well as website ((1eff2568))
  * fix user dropdown needing to be double clicked ((defadf93))
  * access your projects from the user dropdown menu ((494e1df1))
  * limit ((72e8d3c2))
  * increase feed post limit visible ((0ae2935c))
* **homepage:**
  * fix icons too large in nabber ((df3ad43f))
  * fix homepage redirecting ((9a392ac9))
* **landing:**
  * add mac app download link to homepage ((ab3ec568))
  * changed the copy again to emphasise journals ((06e20ae1))
* **landing-page:**
  * change journal to visual diary ((cd702122))
  * more copy change ((b5ee730c))
  * change copy on landing page ((36dd99b0))
  * brand logo now links to landing page ((ef339b83))
* **leaderboard:**
  * tweak message ((90ea5ed5))
  * add ranking ((41295543))
* **nabber:**
  * add logo ((0eb2a14e))
  * change how the notifications look ((b155a0a8))
  * fix brand appearing twice on initial page render ((30c18c99))
* **navbar:**
  * change username to my projects ((0dcc5ee2))
  * brand logo and login register appear when they should ((13c52723))
* **notifications:**
  * allow html characters ((814aa2ee))
  * fix notifications loading ((f652d45d))
  * add read status ((4647f475))
* **online:** change projects to link to diary page ((e53e5853))
* **post:**
  * new post appears with most info ((f9753b97))
  * deleting post removes it from the field ((12797a26), closes (#28))
  * fix like formatting ((b50cd9b6), closes (#26))
  * add max height to images ((fc38e330))
  * change image background color ((0adb217c))
  * add user picture ((171f7b5e))
  * fix error caused by missing user on some comments ((c357f443))
* **posts:** disable comment ((9d0cc434))
* **project:** increase post limit visible ((746f71c6))
* **project-page:** only show entries that have photos ((aec9f836))
* **projects:**
  * add times and fix fonts ((46f284e1))
  * restyle the users projects page ((62da6b67))
* **registration:** disable register button after 1 click ((09ad13ae))
* **status:** fix offline list displays when current user is offline ((79d1c900))
* **text-box:** styled it a bit ((011167b8))
* **time-lapse:**
  * remove time lapse and make optional ((6c299863))
  * fix spacing kinda ((d7fe5e18))
  * fix time-lapse not including last post ((dbdf6a16))


#### Features

* **analytics:** add google analytics ((2120abb6))
* **build:**
  * add grunt bump and changelog ((f7a72ff1))
  * change build control options ((ecba3f6f))
  * add build control tool ((8f8a36d4))
* **diary:**
  * add text posts ((d0f65539))
  * add new project info box ((351b6b6a))
* **diary-page:** add first look at diary page ((8a2e6369))
* **feed:**
  * add manual picture uploading ((d2eac843))
  * add leaderboard ((e802f153))
  * add post ui for new post ((dca2e9b4))
  * add offline users ((db42433b))
* **feedback:** add github issues link to feedback ((a5316720))
* **landing-page:** add basic landing page ((d32fb74d))
* **loading-bar:** add global loading bar ((c94de92f))
* **nabber:**
  * add mark as read for notifications ((c2e8cf2a))
  * add ringing bell for notification alert ((87e9121e))
* **navbar:** add my projects link under config ((c43bcc03))
* **notifications:** add mark all as read ((cdd370e5))
* **notifictions:** add notifications ((a970e0eb))
* **onboard:** add setup guide page ((7c8710cb))
* **post:** add background color to images ((8dfc1716))
* **posts:**
  * enable links in text ((bab7d8c0))
  * update project links to diary page ((7fa4ae79))
* **project-page:** add project timelapse ((fb75da76))
* **text-post:** add posting ((32288832))


<a name="0.18.3"></a>
### 0.18.3 (2014-10-07)


#### Bug Fixes

* **auth:** add loading the current user whenever the page loads ((4abb4ca8))
* **build:** change github url to non-https ((8a64c733))
* **diary:** change the styles to match medium more. bigger fonts. ((cfcff7a0))
* **download:** update url ((bb8b6cc5))
* **download-url:** bump to next version ((caf4f041))
* **feed:**
  * fix posting text status ((b4271109), closes (#30))
  * clear status box after submitting ((f3a31f3b), closes (#27))
  * fix offline ((232b8a82))
  * offline users works when offline ((25f6c269))
  * limit removed on offline users ((d3733d81))
  * change feedback link to have mac app as well as website ((1eff2568))
  * fix user dropdown needing to be double clicked ((defadf93))
  * access your projects from the user dropdown menu ((494e1df1))
  * limit ((72e8d3c2))
  * increase feed post limit visible ((0ae2935c))
* **homepage:**
  * fix icons too large in nabber ((df3ad43f))
  * fix homepage redirecting ((9a392ac9))
* **landing:**
  * add mac app download link to homepage ((ab3ec568))
  * changed the copy again to emphasise journals ((06e20ae1))
* **landing-page:**
  * change journal to visual diary ((cd702122))
  * more copy change ((b5ee730c))
  * change copy on landing page ((36dd99b0))
  * brand logo now links to landing page ((ef339b83))
* **leaderboard:**
  * tweak message ((90ea5ed5))
  * add ranking ((41295543))
* **nabber:**
  * add logo ((0eb2a14e))
  * change how the notifications look ((b155a0a8))
  * fix brand appearing twice on initial page render ((30c18c99))
* **navbar:**
  * change username to my projects ((0dcc5ee2))
  * brand logo and login register appear when they should ((13c52723))
* **notifications:**
  * allow html characters ((814aa2ee))
  * fix notifications loading ((f652d45d))
  * add read status ((4647f475))
* **online:** change projects to link to diary page ((e53e5853))
* **post:**
  * new post appears with most info ((f9753b97))
  * deleting post removes it from the field ((12797a26), closes (#28))
  * fix like formatting ((b50cd9b6), closes (#26))
  * add max height to images ((fc38e330))
  * change image background color ((0adb217c))
  * add user picture ((171f7b5e))
  * fix error caused by missing user on some comments ((c357f443))
* **posts:** disable comment ((9d0cc434))
* **project:** increase post limit visible ((746f71c6))
* **project-page:** only show entries that have photos ((aec9f836))
* **projects:**
  * add times and fix fonts ((46f284e1))
  * restyle the users projects page ((62da6b67))
* **registration:** disable register button after 1 click ((09ad13ae))
* **status:** fix offline list displays when current user is offline ((79d1c900))
* **text-box:** styled it a bit ((011167b8))
* **time-lapse:**
  * remove time lapse and make optional ((6c299863))
  * fix spacing kinda ((d7fe5e18))
  * fix time-lapse not including last post ((dbdf6a16))


#### Features

* **build:**
  * add grunt bump and changelog ((f7a72ff1))
  * change build control options ((ecba3f6f))
  * add build control tool ((8f8a36d4))
* **diary:**
  * add text posts ((d0f65539))
  * add new project info box ((351b6b6a))
* **diary-page:** add first look at diary page ((8a2e6369))
* **feed:**
  * add manual picture uploading ((d2eac843))
  * add leaderboard ((e802f153))
  * add post ui for new post ((dca2e9b4))
  * add offline users ((db42433b))
* **feedback:** add github issues link to feedback ((a5316720))
* **landing-page:** add basic landing page ((d32fb74d))
* **loading-bar:** add global loading bar ((c94de92f))
* **nabber:**
  * add mark as read for notifications ((c2e8cf2a))
  * add ringing bell for notification alert ((87e9121e))
* **navbar:** add my projects link under config ((c43bcc03))
* **notifications:** add mark all as read ((cdd370e5))
* **notifictions:** add notifications ((a970e0eb))
* **onboard:** add setup guide page ((7c8710cb))
* **post:** add background color to images ((8dfc1716))
* **posts:**
  * enable links in text ((bab7d8c0))
  * update project links to diary page ((7fa4ae79))
* **project-page:** add project timelapse ((fb75da76))
* **text-post:** add posting ((32288832))


<a name="0.18.2"></a>
### 0.18.2 (2014-10-07)


#### Bug Fixes

* **auth:** add loading the current user whenever the page loads ((4abb4ca8))
* **build:** change github url to non-https ((8a64c733))
* **diary:** change the styles to match medium more. bigger fonts. ((cfcff7a0))
* **download:** update url ((bb8b6cc5))
* **download-url:** bump to next version ((caf4f041))
* **feed:**
  * fix posting text status ((b4271109), closes (#30))
  * clear status box after submitting ((f3a31f3b), closes (#27))
  * fix offline ((232b8a82))
  * offline users works when offline ((25f6c269))
  * limit removed on offline users ((d3733d81))
  * change feedback link to have mac app as well as website ((1eff2568))
  * fix user dropdown needing to be double clicked ((defadf93))
  * access your projects from the user dropdown menu ((494e1df1))
  * limit ((72e8d3c2))
  * increase feed post limit visible ((0ae2935c))
* **homepage:**
  * fix icons too large in nabber ((df3ad43f))
  * fix homepage redirecting ((9a392ac9))
* **landing:**
  * add mac app download link to homepage ((ab3ec568))
  * changed the copy again to emphasise journals ((06e20ae1))
* **landing-page:**
  * change journal to visual diary ((cd702122))
  * more copy change ((b5ee730c))
  * change copy on landing page ((36dd99b0))
  * brand logo now links to landing page ((ef339b83))
* **leaderboard:**
  * tweak message ((90ea5ed5))
  * add ranking ((41295543))
* **nabber:**
  * add logo ((0eb2a14e))
  * change how the notifications look ((b155a0a8))
  * fix brand appearing twice on initial page render ((30c18c99))
* **navbar:**
  * change username to my projects ((0dcc5ee2))
  * brand logo and login register appear when they should ((13c52723))
* **notifications:**
  * allow html characters ((814aa2ee))
  * fix notifications loading ((f652d45d))
  * add read status ((4647f475))
* **online:** change projects to link to diary page ((e53e5853))
* **post:**
  * new post appears with most info ((f9753b97))
  * deleting post removes it from the field ((12797a26), closes (#28))
  * fix like formatting ((b50cd9b6), closes (#26))
  * add max height to images ((fc38e330))
  * change image background color ((0adb217c))
  * add user picture ((171f7b5e))
  * fix error caused by missing user on some comments ((c357f443))
* **posts:** disable comment ((9d0cc434))
* **project:** increase post limit visible ((746f71c6))
* **project-page:** only show entries that have photos ((aec9f836))
* **projects:**
  * add times and fix fonts ((46f284e1))
  * restyle the users projects page ((62da6b67))
* **registration:** disable register button after 1 click ((09ad13ae))
* **status:** fix offline list displays when current user is offline ((79d1c900))
* **text-box:** styled it a bit ((011167b8))
* **time-lapse:**
  * remove time lapse and make optional ((6c299863))
  * fix spacing kinda ((d7fe5e18))
  * fix time-lapse not including last post ((dbdf6a16))


#### Features

* **build:**
  * add grunt bump and changelog ((f7a72ff1))
  * change build control options ((ecba3f6f))
  * add build control tool ((8f8a36d4))
* **diary:**
  * add text posts ((d0f65539))
  * add new project info box ((351b6b6a))
* **diary-page:** add first look at diary page ((8a2e6369))
* **feed:**
  * add manual picture uploading ((d2eac843))
  * add leaderboard ((e802f153))
  * add post ui for new post ((dca2e9b4))
  * add offline users ((db42433b))
* **feedback:** add github issues link to feedback ((a5316720))
* **landing-page:** add basic landing page ((d32fb74d))
* **loading-bar:** add global loading bar ((c94de92f))
* **nabber:**
  * add mark as read for notifications ((c2e8cf2a))
  * add ringing bell for notification alert ((87e9121e))
* **navbar:** add my projects link under config ((c43bcc03))
* **notifications:** add mark all as read ((cdd370e5))
* **notifictions:** add notifications ((a970e0eb))
* **onboard:** add setup guide page ((7c8710cb))
* **post:** add background color to images ((8dfc1716))
* **posts:**
  * enable links in text ((bab7d8c0))
  * update project links to diary page ((7fa4ae79))
* **project-page:** add project timelapse ((fb75da76))
* **text-post:** add posting ((32288832))


<a name="0.18.1"></a>
### 0.18.1 (2014-10-07)


#### Bug Fixes

* **auth:** add loading the current user whenever the page loads ((4abb4ca8))
* **build:** change github url to non-https ((8a64c733))
* **diary:** change the styles to match medium more. bigger fonts. ((cfcff7a0))
* **download:** update url ((bb8b6cc5))
* **download-url:** bump to next version ((caf4f041))
* **feed:**
  * fix posting text status ((b4271109), closes (#30))
  * clear status box after submitting ((f3a31f3b), closes (#27))
  * fix offline ((232b8a82))
  * offline users works when offline ((25f6c269))
  * limit removed on offline users ((d3733d81))
  * change feedback link to have mac app as well as website ((1eff2568))
  * fix user dropdown needing to be double clicked ((defadf93))
  * access your projects from the user dropdown menu ((494e1df1))
  * limit ((72e8d3c2))
  * increase feed post limit visible ((0ae2935c))
* **homepage:**
  * fix icons too large in nabber ((df3ad43f))
  * fix homepage redirecting ((9a392ac9))
* **landing:**
  * add mac app download link to homepage ((ab3ec568))
  * changed the copy again to emphasise journals ((06e20ae1))
* **landing-page:**
  * change journal to visual diary ((cd702122))
  * more copy change ((b5ee730c))
  * change copy on landing page ((36dd99b0))
  * brand logo now links to landing page ((ef339b83))
* **leaderboard:**
  * tweak message ((90ea5ed5))
  * add ranking ((41295543))
* **nabber:**
  * add logo ((0eb2a14e))
  * change how the notifications look ((b155a0a8))
  * fix brand appearing twice on initial page render ((30c18c99))
* **navbar:**
  * change username to my projects ((0dcc5ee2))
  * brand logo and login register appear when they should ((13c52723))
* **notifications:**
  * allow html characters ((814aa2ee))
  * fix notifications loading ((f652d45d))
  * add read status ((4647f475))
* **online:** change projects to link to diary page ((e53e5853))
* **post:**
  * new post appears with most info ((f9753b97))
  * deleting post removes it from the field ((12797a26), closes (#28))
  * fix like formatting ((b50cd9b6), closes (#26))
  * add max height to images ((fc38e330))
  * change image background color ((0adb217c))
  * add user picture ((171f7b5e))
  * fix error caused by missing user on some comments ((c357f443))
* **posts:** disable comment ((9d0cc434))
* **project:** increase post limit visible ((746f71c6))
* **project-page:** only show entries that have photos ((aec9f836))
* **projects:**
  * add times and fix fonts ((46f284e1))
  * restyle the users projects page ((62da6b67))
* **registration:** disable register button after 1 click ((09ad13ae))
* **status:** fix offline list displays when current user is offline ((79d1c900))
* **text-box:** styled it a bit ((011167b8))
* **time-lapse:**
  * remove time lapse and make optional ((6c299863))
  * fix spacing kinda ((d7fe5e18))
  * fix time-lapse not including last post ((dbdf6a16))


#### Features

* **build:**
  * add grunt bump and changelog ((f7a72ff1))
  * change build control options ((ecba3f6f))
  * add build control tool ((8f8a36d4))
* **diary:**
  * add text posts ((d0f65539))
  * add new project info box ((351b6b6a))
* **diary-page:** add first look at diary page ((8a2e6369))
* **feed:**
  * add manual picture uploading ((d2eac843))
  * add leaderboard ((e802f153))
  * add post ui for new post ((dca2e9b4))
  * add offline users ((db42433b))
* **feedback:** add github issues link to feedback ((a5316720))
* **landing-page:** add basic landing page ((d32fb74d))
* **loading-bar:** add global loading bar ((c94de92f))
* **nabber:**
  * add mark as read for notifications ((c2e8cf2a))
  * add ringing bell for notification alert ((87e9121e))
* **navbar:** add my projects link under config ((c43bcc03))
* **notifications:** add mark all as read ((cdd370e5))
* **notifictions:** add notifications ((a970e0eb))
* **onboard:** add setup guide page ((7c8710cb))
* **post:** add background color to images ((8dfc1716))
* **posts:**
  * enable links in text ((bab7d8c0))
  * update project links to diary page ((7fa4ae79))
* **project-page:** add project timelapse ((fb75da76))
* **text-post:** add posting ((32288832))


<a name="0.18.0"></a>
## 0.18.0 (2014-10-07)


#### Bug Fixes

* **auth:** add loading the current user whenever the page loads ((4abb4ca8))
* **build:** change github url to non-https ((8a64c733))
* **diary:** change the styles to match medium more. bigger fonts. ((cfcff7a0))
* **download:** update url ((bb8b6cc5))
* **download-url:** bump to next version ((caf4f041))
* **feed:**
  * clear status box after submitting ((f3a31f3b), closes (#27))
  * fix offline ((232b8a82))
  * offline users works when offline ((25f6c269))
  * limit removed on offline users ((d3733d81))
  * change feedback link to have mac app as well as website ((1eff2568))
  * fix user dropdown needing to be double clicked ((defadf93))
  * access your projects from the user dropdown menu ((494e1df1))
  * limit ((72e8d3c2))
  * increase feed post limit visible ((0ae2935c))
* **homepage:**
  * fix icons too large in nabber ((df3ad43f))
  * fix homepage redirecting ((9a392ac9))
* **landing:**
  * add mac app download link to homepage ((ab3ec568))
  * changed the copy again to emphasise journals ((06e20ae1))
* **landing-page:**
  * change journal to visual diary ((cd702122))
  * more copy change ((b5ee730c))
  * change copy on landing page ((36dd99b0))
  * brand logo now links to landing page ((ef339b83))
* **leaderboard:**
  * tweak message ((90ea5ed5))
  * add ranking ((41295543))
* **nabber:**
  * add logo ((0eb2a14e))
  * change how the notifications look ((b155a0a8))
  * fix brand appearing twice on initial page render ((30c18c99))
* **navbar:**
  * change username to my projects ((0dcc5ee2))
  * brand logo and login register appear when they should ((13c52723))
* **notifications:**
  * allow html characters ((814aa2ee))
  * fix notifications loading ((f652d45d))
  * add read status ((4647f475))
* **online:** change projects to link to diary page ((e53e5853))
* **post:**
  * new post appears with most info ((f9753b97))
  * deleting post removes it from the field ((12797a26), closes (#28))
  * fix like formatting ((b50cd9b6), closes (#26))
  * add max height to images ((fc38e330))
  * change image background color ((0adb217c))
  * add user picture ((171f7b5e))
  * fix error caused by missing user on some comments ((c357f443))
* **posts:** disable comment ((9d0cc434))
* **project:** increase post limit visible ((746f71c6))
* **project-page:** only show entries that have photos ((aec9f836))
* **projects:**
  * add times and fix fonts ((46f284e1))
  * restyle the users projects page ((62da6b67))
* **registration:** disable register button after 1 click ((09ad13ae))
* **status:** fix offline list displays when current user is offline ((79d1c900))
* **text-box:** styled it a bit ((011167b8))
* **time-lapse:**
  * remove time lapse and make optional ((6c299863))
  * fix spacing kinda ((d7fe5e18))
  * fix time-lapse not including last post ((dbdf6a16))


#### Features

* **build:**
  * add grunt bump and changelog ((f7a72ff1))
  * change build control options ((ecba3f6f))
  * add build control tool ((8f8a36d4))
* **diary:**
  * add text posts ((d0f65539))
  * add new project info box ((351b6b6a))
* **diary-page:** add first look at diary page ((8a2e6369))
* **feed:**
  * add manual picture uploading ((d2eac843))
  * add leaderboard ((e802f153))
  * add post ui for new post ((dca2e9b4))
  * add offline users ((db42433b))
* **feedback:** add github issues link to feedback ((a5316720))
* **landing-page:** add basic landing page ((d32fb74d))
* **loading-bar:** add global loading bar ((c94de92f))
* **nabber:**
  * add mark as read for notifications ((c2e8cf2a))
  * add ringing bell for notification alert ((87e9121e))
* **navbar:** add my projects link under config ((c43bcc03))
* **notifications:** add mark all as read ((cdd370e5))
* **notifictions:** add notifications ((a970e0eb))
* **onboard:** add setup guide page ((7c8710cb))
* **post:** add background color to images ((8dfc1716))
* **posts:**
  * enable links in text ((bab7d8c0))
  * update project links to diary page ((7fa4ae79))
* **project-page:** add project timelapse ((fb75da76))
* **text-post:** add posting ((32288832))


<a name="0.17.8"></a>
### 0.17.8 (2014-10-07)


#### Bug Fixes

* **feed:** clear status box after submitting ((f3a31f3b), closes (#27))
* **post:**
  * new post appears with most info ((f9753b97))
  * deleting post removes it from the field ((12797a26), closes (#28))
  * fix like formatting ((b50cd9b6), closes (#26))


<a name="0.17.7"></a>
### 0.17.7 (2014-10-07)


#### Bug Fixes

* **auth:** add loading the current user whenever the page loads ((4abb4ca8))
* **build:** change github url to non-https ((8a64c733))
* **diary:** change the styles to match medium more. bigger fonts. ((cfcff7a0))
* **download:** update url ((bb8b6cc5))
* **download-url:** bump to next version ((caf4f041))
* **feed:**
  * fix offline ((232b8a82))
  * offline users works when offline ((25f6c269))
  * limit removed on offline users ((d3733d81))
  * change feedback link to have mac app as well as website ((1eff2568))
  * fix user dropdown needing to be double clicked ((defadf93))
  * access your projects from the user dropdown menu ((494e1df1))
  * limit ((72e8d3c2))
  * increase feed post limit visible ((0ae2935c))
* **homepage:**
  * fix icons too large in nabber ((df3ad43f))
  * fix homepage redirecting ((9a392ac9))
* **landing:**
  * add mac app download link to homepage ((ab3ec568))
  * changed the copy again to emphasise journals ((06e20ae1))
* **landing-page:**
  * change journal to visual diary ((cd702122))
  * more copy change ((b5ee730c))
  * change copy on landing page ((36dd99b0))
  * brand logo now links to landing page ((ef339b83))
* **leaderboard:**
  * tweak message ((90ea5ed5))
  * add ranking ((41295543))
* **nabber:**
  * add logo ((0eb2a14e))
  * change how the notifications look ((b155a0a8))
  * fix brand appearing twice on initial page render ((30c18c99))
* **navbar:**
  * change username to my projects ((0dcc5ee2))
  * brand logo and login register appear when they should ((13c52723))
* **notifications:**
  * allow html characters ((814aa2ee))
  * fix notifications loading ((f652d45d))
  * add read status ((4647f475))
* **online:** change projects to link to diary page ((e53e5853))
* **post:**
  * add max height to images ((fc38e330))
  * change image background color ((0adb217c))
  * add user picture ((171f7b5e))
  * fix error caused by missing user on some comments ((c357f443))
* **posts:** disable comment ((9d0cc434))
* **project:** increase post limit visible ((746f71c6))
* **project-page:** only show entries that have photos ((aec9f836))
* **projects:**
  * add times and fix fonts ((46f284e1))
  * restyle the users projects page ((62da6b67))
* **registration:** disable register button after 1 click ((09ad13ae))
* **status:** fix offline list displays when current user is offline ((79d1c900))
* **text-box:** styled it a bit ((011167b8))
* **time-lapse:**
  * remove time lapse and make optional ((6c299863))
  * fix spacing kinda ((d7fe5e18))
  * fix time-lapse not including last post ((dbdf6a16))


#### Features

* **build:**
  * add grunt bump and changelog ((f7a72ff1))
  * change build control options ((ecba3f6f))
  * add build control tool ((8f8a36d4))
* **diary:**
  * add text posts ((d0f65539))
  * add new project info box ((351b6b6a))
* **diary-page:** add first look at diary page ((8a2e6369))
* **feed:**
  * add leaderboard ((e802f153))
  * add post ui for new post ((dca2e9b4))
  * add offline users ((db42433b))
* **feedback:** add github issues link to feedback ((a5316720))
* **landing-page:** add basic landing page ((d32fb74d))
* **loading-bar:** add global loading bar ((c94de92f))
* **nabber:**
  * add mark as read for notifications ((c2e8cf2a))
  * add ringing bell for notification alert ((87e9121e))
* **navbar:** add my projects link under config ((c43bcc03))
* **notifications:** add mark all as read ((cdd370e5))
* **notifictions:** add notifications ((a970e0eb))
* **onboard:** add setup guide page ((7c8710cb))
* **post:** add background color to images ((8dfc1716))
* **posts:**
  * enable links in text ((bab7d8c0))
  * update project links to diary page ((7fa4ae79))
* **project-page:** add project timelapse ((fb75da76))
* **text-post:** add posting ((32288832))


<a name="0.17.6"></a>
### 0.17.6 (2014-10-06)


#### Bug Fixes

* **auth:** add loading the current user whenever the page loads ((4abb4ca8))
* **build:** change github url to non-https ((8a64c733))
* **diary:** change the styles to match medium more. bigger fonts. ((cfcff7a0))
* **download:** update url ((bb8b6cc5))
* **download-url:** bump to next version ((caf4f041))
* **feed:**
  * fix offline ((232b8a82))
  * offline users works when offline ((25f6c269))
  * limit removed on offline users ((d3733d81))
  * change feedback link to have mac app as well as website ((1eff2568))
  * fix user dropdown needing to be double clicked ((defadf93))
  * access your projects from the user dropdown menu ((494e1df1))
  * limit ((72e8d3c2))
  * increase feed post limit visible ((0ae2935c))
* **homepage:**
  * fix icons too large in nabber ((df3ad43f))
  * fix homepage redirecting ((9a392ac9))
* **landing:**
  * add mac app download link to homepage ((ab3ec568))
  * changed the copy again to emphasise journals ((06e20ae1))
* **landing-page:**
  * change journal to visual diary ((cd702122))
  * more copy change ((b5ee730c))
  * change copy on landing page ((36dd99b0))
  * brand logo now links to landing page ((ef339b83))
* **leaderboard:**
  * tweak message ((90ea5ed5))
  * add ranking ((41295543))
* **nabber:**
  * add logo ((0eb2a14e))
  * change how the notifications look ((b155a0a8))
  * fix brand appearing twice on initial page render ((30c18c99))
* **navbar:**
  * change username to my projects ((0dcc5ee2))
  * brand logo and login register appear when they should ((13c52723))
* **notifications:**
  * allow html characters ((814aa2ee))
  * fix notifications loading ((f652d45d))
  * add read status ((4647f475))
* **online:** change projects to link to diary page ((e53e5853))
* **post:**
  * change image background color ((0adb217c))
  * add user picture ((171f7b5e))
  * fix error caused by missing user on some comments ((c357f443))
* **posts:** disable comment ((9d0cc434))
* **project:** increase post limit visible ((746f71c6))
* **project-page:** only show entries that have photos ((aec9f836))
* **projects:**
  * add times and fix fonts ((46f284e1))
  * restyle the users projects page ((62da6b67))
* **registration:** disable register button after 1 click ((09ad13ae))
* **status:** fix offline list displays when current user is offline ((79d1c900))
* **text-box:** styled it a bit ((011167b8))
* **time-lapse:**
  * remove time lapse and make optional ((6c299863))
  * fix spacing kinda ((d7fe5e18))
  * fix time-lapse not including last post ((dbdf6a16))


#### Features

* **build:**
  * add grunt bump and changelog ((f7a72ff1))
  * change build control options ((ecba3f6f))
  * add build control tool ((8f8a36d4))
* **diary:**
  * add text posts ((d0f65539))
  * add new project info box ((351b6b6a))
* **diary-page:** add first look at diary page ((8a2e6369))
* **feed:**
  * add leaderboard ((e802f153))
  * add post ui for new post ((dca2e9b4))
  * add offline users ((db42433b))
* **feedback:** add github issues link to feedback ((a5316720))
* **landing-page:** add basic landing page ((d32fb74d))
* **loading-bar:** add global loading bar ((c94de92f))
* **nabber:**
  * add mark as read for notifications ((c2e8cf2a))
  * add ringing bell for notification alert ((87e9121e))
* **navbar:** add my projects link under config ((c43bcc03))
* **notifications:** add mark all as read ((cdd370e5))
* **notifictions:** add notifications ((a970e0eb))
* **onboard:** add setup guide page ((7c8710cb))
* **post:** add background color to images ((8dfc1716))
* **posts:**
  * enable links in text ((bab7d8c0))
  * update project links to diary page ((7fa4ae79))
* **project-page:** add project timelapse ((fb75da76))
* **text-post:** add posting ((32288832))


<a name="0.17.5"></a>
### 0.17.5 (2014-09-29)


#### Bug Fixes

* **auth:** add loading the current user whenever the page loads ((4abb4ca8))
* **build:** change github url to non-https ((8a64c733))
* **diary:** change the styles to match medium more. bigger fonts. ((cfcff7a0))
* **download:** update url ((bb8b6cc5))
* **download-url:** bump to next version ((caf4f041))
* **feed:**
  * fix offline ((232b8a82))
  * offline users works when offline ((25f6c269))
  * limit removed on offline users ((d3733d81))
  * change feedback link to have mac app as well as website ((1eff2568))
  * fix user dropdown needing to be double clicked ((defadf93))
  * access your projects from the user dropdown menu ((494e1df1))
  * limit ((72e8d3c2))
  * increase feed post limit visible ((0ae2935c))
* **homepage:**
  * fix icons too large in nabber ((df3ad43f))
  * fix homepage redirecting ((9a392ac9))
* **landing:**
  * add mac app download link to homepage ((ab3ec568))
  * changed the copy again to emphasise journals ((06e20ae1))
* **landing-page:**
  * change journal to visual diary ((cd702122))
  * more copy change ((b5ee730c))
  * change copy on landing page ((36dd99b0))
  * brand logo now links to landing page ((ef339b83))
* **leaderboard:**
  * tweak message ((90ea5ed5))
  * add ranking ((41295543))
* **nabber:**
  * add logo ((0eb2a14e))
  * change how the notifications look ((b155a0a8))
  * fix brand appearing twice on initial page render ((30c18c99))
* **navbar:**
  * change username to my projects ((0dcc5ee2))
  * brand logo and login register appear when they should ((13c52723))
* **notifications:**
  * allow html characters ((814aa2ee))
  * fix notifications loading ((f652d45d))
  * add read status ((4647f475))
* **online:** change projects to link to diary page ((e53e5853))
* **post:**
  * change image background color ((0adb217c))
  * add user picture ((171f7b5e))
  * fix error caused by missing user on some comments ((c357f443))
* **posts:** disable comment ((9d0cc434))
* **project:** increase post limit visible ((746f71c6))
* **project-page:** only show entries that have photos ((aec9f836))
* **projects:**
  * add times and fix fonts ((46f284e1))
  * restyle the users projects page ((62da6b67))
* **registration:** disable register button after 1 click ((09ad13ae))
* **status:** fix offline list displays when current user is offline ((79d1c900))
* **text-box:** styled it a bit ((011167b8))
* **time-lapse:**
  * remove time lapse and make optional ((6c299863))
  * fix spacing kinda ((d7fe5e18))
  * fix time-lapse not including last post ((dbdf6a16))


#### Features

* **build:**
  * add grunt bump and changelog ((f7a72ff1))
  * change build control options ((ecba3f6f))
  * add build control tool ((8f8a36d4))
* **diary:**
  * add text posts ((d0f65539))
  * add new project info box ((351b6b6a))
* **diary-page:** add first look at diary page ((8a2e6369))
* **feed:**
  * add leaderboard ((e802f153))
  * add post ui for new post ((dca2e9b4))
  * add offline users ((db42433b))
* **feedback:** add github issues link to feedback ((a5316720))
* **landing-page:** add basic landing page ((d32fb74d))
* **loading-bar:** add global loading bar ((c94de92f))
* **nabber:**
  * add mark as read for notifications ((c2e8cf2a))
  * add ringing bell for notification alert ((87e9121e))
* **navbar:** add my projects link under config ((c43bcc03))
* **notifications:** add mark all as read ((cdd370e5))
* **notifictions:** add notifications ((a970e0eb))
* **onboard:** add setup guide page ((7c8710cb))
* **post:** add background color to images ((8dfc1716))
* **posts:**
  * enable links in text ((bab7d8c0))
  * update project links to diary page ((7fa4ae79))
* **project-page:** add project timelapse ((fb75da76))
* **text-post:** add posting ((32288832))


<a name="0.17.4"></a>
### 0.17.4 (2014-09-29)


#### Bug Fixes

* **auth:** add loading the current user whenever the page loads ((4abb4ca8))
* **build:** change github url to non-https ((8a64c733))
* **diary:** change the styles to match medium more. bigger fonts. ((cfcff7a0))
* **download:** update url ((bb8b6cc5))
* **download-url:** bump to next version ((caf4f041))
* **feed:**
  * fix offline ((232b8a82))
  * offline users works when offline ((25f6c269))
  * limit removed on offline users ((d3733d81))
  * change feedback link to have mac app as well as website ((1eff2568))
  * fix user dropdown needing to be double clicked ((defadf93))
  * access your projects from the user dropdown menu ((494e1df1))
  * limit ((72e8d3c2))
  * increase feed post limit visible ((0ae2935c))
* **homepage:**
  * fix icons too large in nabber ((df3ad43f))
  * fix homepage redirecting ((9a392ac9))
* **landing:**
  * add mac app download link to homepage ((ab3ec568))
  * changed the copy again to emphasise journals ((06e20ae1))
* **landing-page:**
  * change journal to visual diary ((cd702122))
  * more copy change ((b5ee730c))
  * change copy on landing page ((36dd99b0))
  * brand logo now links to landing page ((ef339b83))
* **leaderboard:**
  * tweak message ((90ea5ed5))
  * add ranking ((41295543))
* **nabber:**
  * add logo ((0eb2a14e))
  * change how the notifications look ((b155a0a8))
  * fix brand appearing twice on initial page render ((30c18c99))
* **navbar:**
  * change username to my projects ((0dcc5ee2))
  * brand logo and login register appear when they should ((13c52723))
* **notifications:**
  * allow html characters ((814aa2ee))
  * fix notifications loading ((f652d45d))
  * add read status ((4647f475))
* **online:** change projects to link to diary page ((e53e5853))
* **post:**
  * change image background color ((0adb217c))
  * add user picture ((171f7b5e))
  * fix error caused by missing user on some comments ((c357f443))
* **posts:** disable comment ((9d0cc434))
* **project:** increase post limit visible ((746f71c6))
* **project-page:** only show entries that have photos ((aec9f836))
* **projects:**
  * add times and fix fonts ((46f284e1))
  * restyle the users projects page ((62da6b67))
* **registration:** disable register button after 1 click ((09ad13ae))
* **status:** fix offline list displays when current user is offline ((79d1c900))
* **text-box:** styled it a bit ((011167b8))
* **time-lapse:**
  * remove time lapse and make optional ((6c299863))
  * fix spacing kinda ((d7fe5e18))
  * fix time-lapse not including last post ((dbdf6a16))


#### Features

* **build:**
  * add grunt bump and changelog ((f7a72ff1))
  * change build control options ((ecba3f6f))
  * add build control tool ((8f8a36d4))
* **diary:**
  * add text posts ((d0f65539))
  * add new project info box ((351b6b6a))
* **diary-page:** add first look at diary page ((8a2e6369))
* **feed:**
  * add leaderboard ((e802f153))
  * add post ui for new post ((dca2e9b4))
  * add offline users ((db42433b))
* **feedback:** add github issues link to feedback ((a5316720))
* **landing-page:** add basic landing page ((d32fb74d))
* **loading-bar:** add global loading bar ((c94de92f))
* **nabber:**
  * add mark as read for notifications ((c2e8cf2a))
  * add ringing bell for notification alert ((87e9121e))
* **navbar:** add my projects link under config ((c43bcc03))
* **notifictions:** add notifications ((a970e0eb))
* **onboard:** add setup guide page ((7c8710cb))
* **post:** add background color to images ((8dfc1716))
* **posts:**
  * enable links in text ((bab7d8c0))
  * update project links to diary page ((7fa4ae79))
* **project-page:** add project timelapse ((fb75da76))
* **text-post:** add posting ((32288832))


<a name="0.17.3"></a>
### 0.17.3 (2014-09-29)


#### Bug Fixes

* **auth:** add loading the current user whenever the page loads ((4abb4ca8))
* **build:** change github url to non-https ((8a64c733))
* **diary:** change the styles to match medium more. bigger fonts. ((cfcff7a0))
* **download:** update url ((bb8b6cc5))
* **download-url:** bump to next version ((caf4f041))
* **feed:**
  * fix offline ((232b8a82))
  * offline users works when offline ((25f6c269))
  * limit removed on offline users ((d3733d81))
  * change feedback link to have mac app as well as website ((1eff2568))
  * fix user dropdown needing to be double clicked ((defadf93))
  * access your projects from the user dropdown menu ((494e1df1))
  * limit ((72e8d3c2))
  * increase feed post limit visible ((0ae2935c))
* **homepage:**
  * fix icons too large in nabber ((df3ad43f))
  * fix homepage redirecting ((9a392ac9))
* **landing:**
  * add mac app download link to homepage ((ab3ec568))
  * changed the copy again to emphasise journals ((06e20ae1))
* **landing-page:**
  * change journal to visual diary ((cd702122))
  * more copy change ((b5ee730c))
  * change copy on landing page ((36dd99b0))
  * brand logo now links to landing page ((ef339b83))
* **leaderboard:**
  * tweak message ((90ea5ed5))
  * add ranking ((41295543))
* **nabber:**
  * add logo ((0eb2a14e))
  * change how the notifications look ((b155a0a8))
  * fix brand appearing twice on initial page render ((30c18c99))
* **navbar:**
  * change username to my projects ((0dcc5ee2))
  * brand logo and login register appear when they should ((13c52723))
* **notifications:**
  * allow html characters ((814aa2ee))
  * fix notifications loading ((f652d45d))
  * add read status ((4647f475))
* **online:** change projects to link to diary page ((e53e5853))
* **post:**
  * change image background color ((0adb217c))
  * add user picture ((171f7b5e))
  * fix error caused by missing user on some comments ((c357f443))
* **posts:** disable comment ((9d0cc434))
* **project:** increase post limit visible ((746f71c6))
* **project-page:** only show entries that have photos ((aec9f836))
* **projects:**
  * add times and fix fonts ((46f284e1))
  * restyle the users projects page ((62da6b67))
* **registration:** disable register button after 1 click ((09ad13ae))
* **status:** fix offline list displays when current user is offline ((79d1c900))
* **text-box:** styled it a bit ((011167b8))
* **time-lapse:**
  * remove time lapse and make optional ((6c299863))
  * fix spacing kinda ((d7fe5e18))
  * fix time-lapse not including last post ((dbdf6a16))


#### Features

* **build:**
  * add grunt bump and changelog ((f7a72ff1))
  * change build control options ((ecba3f6f))
  * add build control tool ((8f8a36d4))
* **diary:**
  * add text posts ((d0f65539))
  * add new project info box ((351b6b6a))
* **diary-page:** add first look at diary page ((8a2e6369))
* **feed:**
  * add leaderboard ((e802f153))
  * add post ui for new post ((dca2e9b4))
  * add offline users ((db42433b))
* **feedback:** add github issues link to feedback ((a5316720))
* **landing-page:** add basic landing page ((d32fb74d))
* **loading-bar:** add global loading bar ((c94de92f))
* **nabber:**
  * add mark as read for notifications ((c2e8cf2a))
  * add ringing bell for notification alert ((87e9121e))
* **navbar:** add my projects link under config ((c43bcc03))
* **notifictions:** add notifications ((a970e0eb))
* **onboard:** add setup guide page ((7c8710cb))
* **post:** add background color to images ((8dfc1716))
* **posts:** update project links to diary page ((7fa4ae79))
* **project-page:** add project timelapse ((fb75da76))
* **text-post:** add posting ((32288832))


<a name="0.17.2"></a>
### 0.17.2 (2014-09-29)


#### Features

* **nabber:** add mark as read for notifications ((c2e8cf2a))


<a name="0.17.1"></a>
### 0.17.1 (2014-09-29)


#### Bug Fixes

* **auth:** add loading the current user whenever the page loads ((4abb4ca8))
* **build:** change github url to non-https ((8a64c733))
* **diary:** change the styles to match medium more. bigger fonts. ((cfcff7a0))
* **download:** update url ((bb8b6cc5))
* **download-url:** bump to next version ((caf4f041))
* **feed:**
  * fix offline ((232b8a82))
  * offline users works when offline ((25f6c269))
  * limit removed on offline users ((d3733d81))
  * change feedback link to have mac app as well as website ((1eff2568))
  * fix user dropdown needing to be double clicked ((defadf93))
  * access your projects from the user dropdown menu ((494e1df1))
  * limit ((72e8d3c2))
  * increase feed post limit visible ((0ae2935c))
* **homepage:**
  * fix icons too large in nabber ((df3ad43f))
  * fix homepage redirecting ((9a392ac9))
* **landing:**
  * add mac app download link to homepage ((ab3ec568))
  * changed the copy again to emphasise journals ((06e20ae1))
* **landing-page:**
  * change journal to visual diary ((cd702122))
  * more copy change ((b5ee730c))
  * change copy on landing page ((36dd99b0))
  * brand logo now links to landing page ((ef339b83))
* **leaderboard:**
  * tweak message ((90ea5ed5))
  * add ranking ((41295543))
* **nabber:**
  * add logo ((0eb2a14e))
  * change how the notifications look ((b155a0a8))
  * fix brand appearing twice on initial page render ((30c18c99))
* **navbar:**
  * change username to my projects ((0dcc5ee2))
  * brand logo and login register appear when they should ((13c52723))
* **notifications:**
  * allow html characters ((814aa2ee))
  * fix notifications loading ((f652d45d))
  * add read status ((4647f475))
* **online:** change projects to link to diary page ((e53e5853))
* **post:**
  * change image background color ((0adb217c))
  * add user picture ((171f7b5e))
  * fix error caused by missing user on some comments ((c357f443))
* **posts:** disable comment ((9d0cc434))
* **project:** increase post limit visible ((746f71c6))
* **project-page:** only show entries that have photos ((aec9f836))
* **projects:**
  * add times and fix fonts ((46f284e1))
  * restyle the users projects page ((62da6b67))
* **registration:** disable register button after 1 click ((09ad13ae))
* **status:** fix offline list displays when current user is offline ((79d1c900))
* **text-box:** styled it a bit ((011167b8))
* **time-lapse:**
  * remove time lapse and make optional ((6c299863))
  * fix spacing kinda ((d7fe5e18))
  * fix time-lapse not including last post ((dbdf6a16))


#### Features

* **build:**
  * add grunt bump and changelog ((f7a72ff1))
  * change build control options ((ecba3f6f))
  * add build control tool ((8f8a36d4))
* **diary:**
  * add text posts ((d0f65539))
  * add new project info box ((351b6b6a))
* **diary-page:** add first look at diary page ((8a2e6369))
* **feed:**
  * add leaderboard ((e802f153))
  * add post ui for new post ((dca2e9b4))
  * add offline users ((db42433b))
* **feedback:** add github issues link to feedback ((a5316720))
* **landing-page:** add basic landing page ((d32fb74d))
* **loading-bar:** add global loading bar ((c94de92f))
* **nabber:** add ringing bell for notification alert ((87e9121e))
* **navbar:** add my projects link under config ((c43bcc03))
* **notifictions:** add notifications ((a970e0eb))
* **onboard:** add setup guide page ((7c8710cb))
* **post:** add background color to images ((8dfc1716))
* **posts:** update project links to diary page ((7fa4ae79))
* **project-page:** add project timelapse ((fb75da76))
* **text-post:** add posting ((32288832))


<a name="0.17.0"></a>
## 0.17.0 (2014-09-28)


#### Features

* **onboard:** add setup guide page ((7c8710cb))


<a name="0.16.13"></a>
### 0.16.13 (2014-09-28)


#### Bug Fixes

* **auth:** add loading the current user whenever the page loads ((4abb4ca8))
* **build:** change github url to non-https ((8a64c733))
* **diary:** change the styles to match medium more. bigger fonts. ((cfcff7a0))
* **download:** update url ((bb8b6cc5))
* **download-url:** bump to next version ((caf4f041))
* **feed:**
  * fix offline ((232b8a82))
  * offline users works when offline ((25f6c269))
  * limit removed on offline users ((d3733d81))
  * change feedback link to have mac app as well as website ((1eff2568))
  * fix user dropdown needing to be double clicked ((defadf93))
  * access your projects from the user dropdown menu ((494e1df1))
  * limit ((72e8d3c2))
  * increase feed post limit visible ((0ae2935c))
* **homepage:**
  * fix icons too large in nabber ((df3ad43f))
  * fix homepage redirecting ((9a392ac9))
* **landing:**
  * add mac app download link to homepage ((ab3ec568))
  * changed the copy again to emphasise journals ((06e20ae1))
* **landing-page:**
  * change journal to visual diary ((cd702122))
  * more copy change ((b5ee730c))
  * change copy on landing page ((36dd99b0))
  * brand logo now links to landing page ((ef339b83))
* **leaderboard:**
  * tweak message ((90ea5ed5))
  * add ranking ((41295543))
* **nabber:**
  * add logo ((0eb2a14e))
  * change how the notifications look ((b155a0a8))
  * fix brand appearing twice on initial page render ((30c18c99))
* **navbar:**
  * change username to my projects ((0dcc5ee2))
  * brand logo and login register appear when they should ((13c52723))
* **notifications:**
  * allow html characters ((814aa2ee))
  * fix notifications loading ((f652d45d))
  * add read status ((4647f475))
* **online:** change projects to link to diary page ((e53e5853))
* **post:**
  * change image background color ((0adb217c))
  * add user picture ((171f7b5e))
  * fix error caused by missing user on some comments ((c357f443))
* **project:** increase post limit visible ((746f71c6))
* **project-page:** only show entries that have photos ((aec9f836))
* **projects:**
  * add times and fix fonts ((46f284e1))
  * restyle the users projects page ((62da6b67))
* **registration:** disable register button after 1 click ((09ad13ae))
* **status:** fix offline list displays when current user is offline ((79d1c900))
* **text-box:** styled it a bit ((011167b8))
* **time-lapse:**
  * remove time lapse and make optional ((6c299863))
  * fix spacing kinda ((d7fe5e18))
  * fix time-lapse not including last post ((dbdf6a16))


#### Features

* **build:**
  * add grunt bump and changelog ((f7a72ff1))
  * change build control options ((ecba3f6f))
  * add build control tool ((8f8a36d4))
* **diary:**
  * add text posts ((d0f65539))
  * add new project info box ((351b6b6a))
* **diary-page:** add first look at diary page ((8a2e6369))
* **feed:**
  * add leaderboard ((e802f153))
  * add post ui for new post ((dca2e9b4))
  * add offline users ((db42433b))
* **feedback:** add github issues link to feedback ((a5316720))
* **landing-page:** add basic landing page ((d32fb74d))
* **loading-bar:** add global loading bar ((c94de92f))
* **nabber:** add ringing bell for notification alert ((87e9121e))
* **navbar:** add my projects link under config ((c43bcc03))
* **notifictions:** add notifications ((a970e0eb))
* **post:** add background color to images ((8dfc1716))
* **posts:** update project links to diary page ((7fa4ae79))
* **project-page:** add project timelapse ((fb75da76))
* **text-post:** add posting ((32288832))


<a name="0.16.12"></a>
### 0.16.12 (2014-09-28)


<a name="0.16.11"></a>
### 0.16.11 (2014-09-28)


<a name="0.16.10"></a>
### 0.16.10 (2014-09-27)


#### Bug Fixes

* **auth:** add loading the current user whenever the page loads ((4abb4ca8))
* **build:** change github url to non-https ((8a64c733))
* **diary:** change the styles to match medium more. bigger fonts. ((cfcff7a0))
* **download:** update url ((bb8b6cc5))
* **download-url:** bump to next version ((caf4f041))
* **feed:**
  * fix offline ((232b8a82))
  * offline users works when offline ((25f6c269))
  * limit removed on offline users ((d3733d81))
  * change feedback link to have mac app as well as website ((1eff2568))
  * fix user dropdown needing to be double clicked ((defadf93))
  * access your projects from the user dropdown menu ((494e1df1))
  * limit ((72e8d3c2))
  * increase feed post limit visible ((0ae2935c))
* **homepage:**
  * fix icons too large in nabber ((df3ad43f))
  * fix homepage redirecting ((9a392ac9))
* **landing:**
  * add mac app download link to homepage ((ab3ec568))
  * changed the copy again to emphasise journals ((06e20ae1))
* **landing-page:**
  * change journal to visual diary ((cd702122))
  * more copy change ((b5ee730c))
  * change copy on landing page ((36dd99b0))
  * brand logo now links to landing page ((ef339b83))
* **leaderboard:**
  * tweak message ((90ea5ed5))
  * add ranking ((41295543))
* **nabber:**
  * add logo ((0eb2a14e))
  * change how the notifications look ((b155a0a8))
  * fix brand appearing twice on initial page render ((30c18c99))
* **navbar:**
  * change username to my projects ((0dcc5ee2))
  * brand logo and login register appear when they should ((13c52723))
* **notifications:**
  * allow html characters ((814aa2ee))
  * fix notifications loading ((f652d45d))
  * add read status ((4647f475))
* **online:** change projects to link to diary page ((e53e5853))
* **post:**
  * change image background color ((0adb217c))
  * add user picture ((171f7b5e))
  * fix error caused by missing user on some comments ((c357f443))
* **project:** increase post limit visible ((746f71c6))
* **project-page:** only show entries that have photos ((aec9f836))
* **projects:**
  * add times and fix fonts ((46f284e1))
  * restyle the users projects page ((62da6b67))
* **status:** fix offline list displays when current user is offline ((79d1c900))
* **text-box:** styled it a bit ((011167b8))
* **time-lapse:**
  * remove time lapse and make optional ((6c299863))
  * fix spacing kinda ((d7fe5e18))
  * fix time-lapse not including last post ((dbdf6a16))


#### Features

* **build:**
  * add grunt bump and changelog ((f7a72ff1))
  * change build control options ((ecba3f6f))
  * add build control tool ((8f8a36d4))
* **diary:**
  * add text posts ((d0f65539))
  * add new project info box ((351b6b6a))
* **diary-page:** add first look at diary page ((8a2e6369))
* **feed:**
  * add leaderboard ((e802f153))
  * add post ui for new post ((dca2e9b4))
  * add offline users ((db42433b))
* **feedback:** add github issues link to feedback ((a5316720))
* **landing-page:** add basic landing page ((d32fb74d))
* **loading-bar:** add global loading bar ((c94de92f))
* **nabber:** add ringing bell for notification alert ((87e9121e))
* **notifictions:** add notifications ((a970e0eb))
* **post:** add background color to images ((8dfc1716))
* **posts:** update project links to diary page ((7fa4ae79))
* **project-page:** add project timelapse ((fb75da76))
* **text-post:** add posting ((32288832))


<a name="0.16.9"></a>
### 0.16.9 (2014-09-24)


#### Bug Fixes

* **auth:** add loading the current user whenever the page loads ((4abb4ca8))
* **build:** change github url to non-https ((8a64c733))
* **diary:** change the styles to match medium more. bigger fonts. ((cfcff7a0))
* **download:** update url ((bb8b6cc5))
* **download-url:** bump to next version ((caf4f041))
* **feed:**
  * fix offline ((232b8a82))
  * offline users works when offline ((25f6c269))
  * limit removed on offline users ((d3733d81))
  * change feedback link to have mac app as well as website ((1eff2568))
  * fix user dropdown needing to be double clicked ((defadf93))
  * access your projects from the user dropdown menu ((494e1df1))
  * limit ((72e8d3c2))
  * increase feed post limit visible ((0ae2935c))
* **homepage:**
  * fix icons too large in nabber ((df3ad43f))
  * fix homepage redirecting ((9a392ac9))
* **landing:**
  * add mac app download link to homepage ((ab3ec568))
  * changed the copy again to emphasise journals ((06e20ae1))
* **landing-page:**
  * change journal to visual diary ((cd702122))
  * more copy change ((b5ee730c))
  * change copy on landing page ((36dd99b0))
  * brand logo now links to landing page ((ef339b83))
* **leaderboard:**
  * tweak message ((90ea5ed5))
  * add ranking ((41295543))
* **nabber:**
  * add logo ((0eb2a14e))
  * change how the notifications look ((b155a0a8))
  * fix brand appearing twice on initial page render ((30c18c99))
* **navbar:** brand logo and login register appear when they should ((13c52723))
* **notifications:**
  * allow html characters ((814aa2ee))
  * fix notifications loading ((f652d45d))
  * add read status ((4647f475))
* **online:** change projects to link to diary page ((e53e5853))
* **post:**
  * change image background color ((0adb217c))
  * add user picture ((171f7b5e))
  * fix error caused by missing user on some comments ((c357f443))
* **project:** increase post limit visible ((746f71c6))
* **project-page:** only show entries that have photos ((aec9f836))
* **projects:**
  * add times and fix fonts ((46f284e1))
  * restyle the users projects page ((62da6b67))
* **status:** fix offline list displays when current user is offline ((79d1c900))
* **text-box:** styled it a bit ((011167b8))
* **time-lapse:**
  * remove time lapse and make optional ((6c299863))
  * fix spacing kinda ((d7fe5e18))
  * fix time-lapse not including last post ((dbdf6a16))


#### Features

* **build:**
  * add grunt bump and changelog ((f7a72ff1))
  * change build control options ((ecba3f6f))
  * add build control tool ((8f8a36d4))
* **diary:**
  * add text posts ((d0f65539))
  * add new project info box ((351b6b6a))
* **diary-page:** add first look at diary page ((8a2e6369))
* **feed:**
  * add leaderboard ((e802f153))
  * add post ui for new post ((dca2e9b4))
  * add offline users ((db42433b))
* **feedback:** add github issues link to feedback ((a5316720))
* **landing-page:** add basic landing page ((d32fb74d))
* **loading-bar:** add global loading bar ((c94de92f))
* **nabber:** add ringing bell for notification alert ((87e9121e))
* **notifictions:** add notifications ((a970e0eb))
* **post:** add background color to images ((8dfc1716))
* **posts:** update project links to diary page ((7fa4ae79))
* **project-page:** add project timelapse ((fb75da76))
* **text-post:** add posting ((32288832))


<a name="0.16.8"></a>
### 0.16.8 (2014-09-24)


#### Bug Fixes

* **build:** change github url to non-https ((8a64c733))


<a name="0.16.7"></a>
### 0.16.7 (2014-09-24)


#### Bug Fixes

* **auth:** add loading the current user whenever the page loads ((4abb4ca8))
* **diary:** change the styles to match medium more. bigger fonts. ((cfcff7a0))
* **download:** update url ((bb8b6cc5))
* **download-url:** bump to next version ((caf4f041))
* **feed:**
  * offline users works when offline ((25f6c269))
  * limit removed on offline users ((d3733d81))
  * change feedback link to have mac app as well as website ((1eff2568))
  * fix user dropdown needing to be double clicked ((defadf93))
  * access your projects from the user dropdown menu ((494e1df1))
  * limit ((72e8d3c2))
  * increase feed post limit visible ((0ae2935c))
* **homepage:**
  * fix icons too large in nabber ((df3ad43f))
  * fix homepage redirecting ((9a392ac9))
* **landing:**
  * add mac app download link to homepage ((ab3ec568))
  * changed the copy again to emphasise journals ((06e20ae1))
* **landing-page:**
  * change journal to visual diary ((cd702122))
  * more copy change ((b5ee730c))
  * change copy on landing page ((36dd99b0))
  * brand logo now links to landing page ((ef339b83))
* **leaderboard:**
  * tweak message ((90ea5ed5))
  * add ranking ((41295543))
* **nabber:**
  * add logo ((0eb2a14e))
  * change how the notifications look ((b155a0a8))
  * fix brand appearing twice on initial page render ((30c18c99))
* **navbar:** brand logo and login register appear when they should ((13c52723))
* **notifications:**
  * allow html characters ((814aa2ee))
  * fix notifications loading ((f652d45d))
  * add read status ((4647f475))
* **online:** change projects to link to diary page ((e53e5853))
* **post:**
  * change image background color ((0adb217c))
  * add user picture ((171f7b5e))
  * fix error caused by missing user on some comments ((c357f443))
* **project:** increase post limit visible ((746f71c6))
* **project-page:** only show entries that have photos ((aec9f836))
* **projects:**
  * add times and fix fonts ((46f284e1))
  * restyle the users projects page ((62da6b67))
* **status:** fix offline list displays when current user is offline ((79d1c900))
* **text-box:** styled it a bit ((011167b8))
* **time-lapse:**
  * remove time lapse and make optional ((6c299863))
  * fix spacing kinda ((d7fe5e18))
  * fix time-lapse not including last post ((dbdf6a16))


#### Features

* **build:**
  * add grunt bump and changelog ((f7a72ff1))
  * change build control options ((ecba3f6f))
  * add build control tool ((8f8a36d4))
* **diary:**
  * add text posts ((d0f65539))
  * add new project info box ((351b6b6a))
* **diary-page:** add first look at diary page ((8a2e6369))
* **feed:**
  * add leaderboard ((e802f153))
  * add post ui for new post ((dca2e9b4))
  * add offline users ((db42433b))
* **feedback:** add github issues link to feedback ((a5316720))
* **landing-page:** add basic landing page ((d32fb74d))
* **loading-bar:** add global loading bar ((c94de92f))
* **nabber:** add ringing bell for notification alert ((87e9121e))
* **notifictions:** add notifications ((a970e0eb))
* **post:** add background color to images ((8dfc1716))
* **posts:** update project links to diary page ((7fa4ae79))
* **project-page:** add project timelapse ((fb75da76))
* **text-post:** add posting ((32288832))


<a name="0.16.5"></a>
### 0.16.5 (2014-09-23)


#### Bug Fixes

* **auth:** add loading the current user whenever the page loads ((4abb4ca8))
* **diary:** change the styles to match medium more. bigger fonts. ((cfcff7a0))
* **download-url:** bump to next version ((caf4f041))
* **feed:**
  * offline users works when offline ((25f6c269))
  * limit removed on offline users ((d3733d81))
  * change feedback link to have mac app as well as website ((1eff2568))
  * fix user dropdown needing to be double clicked ((defadf93))
  * access your projects from the user dropdown menu ((494e1df1))
  * limit ((72e8d3c2))
  * increase feed post limit visible ((0ae2935c))
* **homepage:**
  * fix icons too large in nabber ((df3ad43f))
  * fix homepage redirecting ((9a392ac9))
* **landing:**
  * add mac app download link to homepage ((ab3ec568))
  * changed the copy again to emphasise journals ((06e20ae1))
* **landing-page:**
  * change journal to visual diary ((cd702122))
  * more copy change ((b5ee730c))
  * change copy on landing page ((36dd99b0))
  * brand logo now links to landing page ((ef339b83))
* **leaderboard:**
  * tweak message ((90ea5ed5))
  * add ranking ((41295543))
* **nabber:**
  * add logo ((0eb2a14e))
  * change how the notifications look ((b155a0a8))
  * fix brand appearing twice on initial page render ((30c18c99))
* **navbar:** brand logo and login register appear when they should ((13c52723))
* **notifications:**
  * allow html characters ((814aa2ee))
  * fix notifications loading ((f652d45d))
  * add read status ((4647f475))
* **online:** change projects to link to diary page ((e53e5853))
* **post:**
  * change image background color ((0adb217c))
  * add user picture ((171f7b5e))
  * fix error caused by missing user on some comments ((c357f443))
* **project:** increase post limit visible ((746f71c6))
* **project-page:** only show entries that have photos ((aec9f836))
* **projects:**
  * add times and fix fonts ((46f284e1))
  * restyle the users projects page ((62da6b67))
* **text-box:** styled it a bit ((011167b8))
* **time-lapse:**
  * remove time lapse and make optional ((6c299863))
  * fix spacing kinda ((d7fe5e18))
  * fix time-lapse not including last post ((dbdf6a16))


#### Features

* **build:**
  * add grunt bump and changelog ((f7a72ff1))
  * change build control options ((ecba3f6f))
  * add build control tool ((8f8a36d4))
* **diary:**
  * add text posts ((d0f65539))
  * add new project info box ((351b6b6a))
* **diary-page:** add first look at diary page ((8a2e6369))
* **feed:**
  * add leaderboard ((e802f153))
  * add post ui for new post ((dca2e9b4))
  * add offline users ((db42433b))
* **feedback:** add github issues link to feedback ((a5316720))
* **landing-page:** add basic landing page ((d32fb74d))
* **loading-bar:** add global loading bar ((c94de92f))
* **nabber:** add ringing bell for notification alert ((87e9121e))
* **notifictions:** add notifications ((a970e0eb))
* **post:** add background color to images ((8dfc1716))
* **posts:** update project links to diary page ((7fa4ae79))
* **project-page:** add project timelapse ((fb75da76))
* **text-post:** add posting ((32288832))


<a name="0.16.4"></a>
### 0.16.4 (2014-09-22)


#### Bug Fixes

* **auth:** add loading the current user whenever the page loads ((4abb4ca8))
* **diary:** change the styles to match medium more. bigger fonts. ((cfcff7a0))
* **download-url:** bump to next version ((caf4f041))
* **feed:**
  * offline users works when offline ((25f6c269))
  * limit removed on offline users ((d3733d81))
  * change feedback link to have mac app as well as website ((1eff2568))
  * fix user dropdown needing to be double clicked ((defadf93))
  * access your projects from the user dropdown menu ((494e1df1))
  * limit ((72e8d3c2))
  * increase feed post limit visible ((0ae2935c))
* **homepage:**
  * fix icons too large in nabber ((df3ad43f))
  * fix homepage redirecting ((9a392ac9))
* **landing:**
  * add mac app download link to homepage ((ab3ec568))
  * changed the copy again to emphasise journals ((06e20ae1))
* **landing-page:**
  * change journal to visual diary ((cd702122))
  * more copy change ((b5ee730c))
  * change copy on landing page ((36dd99b0))
  * brand logo now links to landing page ((ef339b83))
* **leaderboard:**
  * tweak message ((90ea5ed5))
  * add ranking ((41295543))
* **nabber:**
  * add logo ((0eb2a14e))
  * change how the notifications look ((b155a0a8))
  * fix brand appearing twice on initial page render ((30c18c99))
* **navbar:** brand logo and login register appear when they should ((13c52723))
* **notifications:**
  * allow html characters ((814aa2ee))
  * fix notifications loading ((f652d45d))
  * add read status ((4647f475))
* **online:** change projects to link to diary page ((e53e5853))
* **post:**
  * change image background color ((0adb217c))
  * add user picture ((171f7b5e))
  * fix error caused by missing user on some comments ((c357f443))
* **project:** increase post limit visible ((746f71c6))
* **project-page:** only show entries that have photos ((aec9f836))
* **projects:**
  * add times and fix fonts ((46f284e1))
  * restyle the users projects page ((62da6b67))
* **text-box:** styled it a bit ((011167b8))
* **time-lapse:**
  * remove time lapse and make optional ((6c299863))
  * fix spacing kinda ((d7fe5e18))
  * fix time-lapse not including last post ((dbdf6a16))


#### Features

* **build:**
  * add grunt bump and changelog ((f7a72ff1))
  * change build control options ((ecba3f6f))
  * add build control tool ((8f8a36d4))
* **diary:**
  * add text posts ((d0f65539))
  * add new project info box ((351b6b6a))
* **diary-page:** add first look at diary page ((8a2e6369))
* **feed:**
  * add leaderboard ((e802f153))
  * add post ui for new post ((dca2e9b4))
  * add offline users ((db42433b))
* **feedback:** add github issues link to feedback ((a5316720))
* **landing-page:** add basic landing page ((d32fb74d))
* **loading-bar:** add global loading bar ((c94de92f))
* **notifictions:** add notifications ((a970e0eb))
* **post:** add background color to images ((8dfc1716))
* **posts:** update project links to diary page ((7fa4ae79))
* **project-page:** add project timelapse ((fb75da76))
* **text-post:** add posting ((32288832))


<a name="0.16.3"></a>
### 0.16.3 (2014-09-21)


#### Bug Fixes

* **notifications:** allow html characters ((814aa2ee))


<a name="0.16.2"></a>
### 0.16.2 (2014-09-21)


<a name="0.16.1"></a>
### 0.16.1 (2014-09-21)


#### Bug Fixes

* **leaderboard:** add ranking ((41295543))


<a name="0.16.0"></a>
## 0.16.0 (2014-09-21)


#### Features

* **feed:** add leaderboard ((e802f153))


<a name="0.15.9"></a>
### 0.15.9 (2014-09-21)


<a name="0.15.8"></a>
### 0.15.8 (2014-09-21)


#### Bug Fixes

* **auth:** add loading the current user whenever the page loads ((4abb4ca8))
* **diary:** change the styles to match medium more. bigger fonts. ((cfcff7a0))
* **download-url:** bump to next version ((caf4f041))
* **feed:**
  * offline users works when offline ((25f6c269))
  * limit removed on offline users ((d3733d81))
  * change feedback link to have mac app as well as website ((1eff2568))
  * fix user dropdown needing to be double clicked ((defadf93))
  * access your projects from the user dropdown menu ((494e1df1))
  * limit ((72e8d3c2))
  * increase feed post limit visible ((0ae2935c))
* **homepage:**
  * fix icons too large in nabber ((df3ad43f))
  * fix homepage redirecting ((9a392ac9))
* **landing:**
  * add mac app download link to homepage ((ab3ec568))
  * changed the copy again to emphasise journals ((06e20ae1))
* **landing-page:**
  * change journal to visual diary ((cd702122))
  * more copy change ((b5ee730c))
  * change copy on landing page ((36dd99b0))
  * brand logo now links to landing page ((ef339b83))
* **nabber:**
  * add logo ((0eb2a14e))
  * change how the notifications look ((b155a0a8))
  * fix brand appearing twice on initial page render ((30c18c99))
* **navbar:** brand logo and login register appear when they should ((13c52723))
* **notifications:**
  * fix notifications loading ((f652d45d))
  * add read status ((4647f475))
* **online:** change projects to link to diary page ((e53e5853))
* **post:**
  * change image background color ((0adb217c))
  * add user picture ((171f7b5e))
  * fix error caused by missing user on some comments ((c357f443))
* **project:** increase post limit visible ((746f71c6))
* **project-page:** only show entries that have photos ((aec9f836))
* **projects:**
  * add times and fix fonts ((46f284e1))
  * restyle the users projects page ((62da6b67))
* **text-box:** styled it a bit ((011167b8))
* **time-lapse:**
  * remove time lapse and make optional ((6c299863))
  * fix spacing kinda ((d7fe5e18))
  * fix time-lapse not including last post ((dbdf6a16))


#### Features

* **build:**
  * add grunt bump and changelog ((f7a72ff1))
  * change build control options ((ecba3f6f))
  * add build control tool ((8f8a36d4))
* **diary:**
  * add text posts ((d0f65539))
  * add new project info box ((351b6b6a))
* **diary-page:** add first look at diary page ((8a2e6369))
* **feed:**
  * add post ui for new post ((dca2e9b4))
  * add offline users ((db42433b))
* **feedback:** add github issues link to feedback ((a5316720))
* **landing-page:** add basic landing page ((d32fb74d))
* **loading-bar:** add global loading bar ((c94de92f))
* **notifictions:** add notifications ((a970e0eb))
* **post:** add background color to images ((8dfc1716))
* **posts:** update project links to diary page ((7fa4ae79))
* **project-page:** add project timelapse ((fb75da76))
* **text-post:** add posting ((32288832))


<a name="0.15.7"></a>
### 0.15.7 (2014-09-21)


#### Bug Fixes

* **auth:** add loading the current user whenever the page loads ((4abb4ca8))
* **diary:** change the styles to match medium more. bigger fonts. ((cfcff7a0))
* **download-url:** bump to next version ((caf4f041))
* **feed:**
  * offline users works when offline ((25f6c269))
  * limit removed on offline users ((d3733d81))
  * change feedback link to have mac app as well as website ((1eff2568))
  * fix user dropdown needing to be double clicked ((defadf93))
  * access your projects from the user dropdown menu ((494e1df1))
  * limit ((72e8d3c2))
  * increase feed post limit visible ((0ae2935c))
* **homepage:**
  * fix icons too large in nabber ((df3ad43f))
  * fix homepage redirecting ((9a392ac9))
* **landing:**
  * add mac app download link to homepage ((ab3ec568))
  * changed the copy again to emphasise journals ((06e20ae1))
* **landing-page:**
  * change journal to visual diary ((cd702122))
  * more copy change ((b5ee730c))
  * change copy on landing page ((36dd99b0))
  * brand logo now links to landing page ((ef339b83))
* **nabber:**
  * add logo ((0eb2a14e))
  * change how the notifications look ((b155a0a8))
  * fix brand appearing twice on initial page render ((30c18c99))
* **navbar:** brand logo and login register appear when they should ((13c52723))
* **notifications:**
  * fix notifications loading ((f652d45d))
  * add read status ((4647f475))
* **online:** change projects to link to diary page ((e53e5853))
* **post:**
  * change image background color ((0adb217c))
  * add user picture ((171f7b5e))
  * fix error caused by missing user on some comments ((c357f443))
* **project:** increase post limit visible ((746f71c6))
* **project-page:** only show entries that have photos ((aec9f836))
* **projects:**
  * add times and fix fonts ((46f284e1))
  * restyle the users projects page ((62da6b67))
* **text-box:** styled it a bit ((011167b8))
* **time-lapse:**
  * remove time lapse and make optional ((6c299863))
  * fix spacing kinda ((d7fe5e18))
  * fix time-lapse not including last post ((dbdf6a16))


#### Features

* **build:**
  * add grunt bump and changelog ((f7a72ff1))
  * change build control options ((ecba3f6f))
  * add build control tool ((8f8a36d4))
* **diary:**
  * add text posts ((d0f65539))
  * add new project info box ((351b6b6a))
* **diary-page:** add first look at diary page ((8a2e6369))
* **feed:**
  * add post ui for new post ((dca2e9b4))
  * add offline users ((db42433b))
* **feedback:** add github issues link to feedback ((a5316720))
* **landing-page:** add basic landing page ((d32fb74d))
* **loading-bar:** add global loading bar ((c94de92f))
* **notifictions:** add notifications ((a970e0eb))
* **post:** add background color to images ((8dfc1716))
* **posts:** update project links to diary page ((7fa4ae79))
* **project-page:** add project timelapse ((fb75da76))
* **text-post:** add posting ((32288832))


<a name="0.15.6"></a>
### 0.15.6 (2014-09-21)


#### Bug Fixes

* **auth:** add loading the current user whenever the page loads ((4abb4ca8))
* **diary:** change the styles to match medium more. bigger fonts. ((cfcff7a0))
* **download-url:** bump to next version ((caf4f041))
* **feed:**
  * offline users works when offline ((25f6c269))
  * limit removed on offline users ((d3733d81))
  * change feedback link to have mac app as well as website ((1eff2568))
  * fix user dropdown needing to be double clicked ((defadf93))
  * access your projects from the user dropdown menu ((494e1df1))
  * limit ((72e8d3c2))
  * increase feed post limit visible ((0ae2935c))
* **homepage:**
  * fix icons too large in nabber ((df3ad43f))
  * fix homepage redirecting ((9a392ac9))
* **landing:**
  * add mac app download link to homepage ((ab3ec568))
  * changed the copy again to emphasise journals ((06e20ae1))
* **landing-page:**
  * change journal to visual diary ((cd702122))
  * more copy change ((b5ee730c))
  * change copy on landing page ((36dd99b0))
  * brand logo now links to landing page ((ef339b83))
* **nabber:**
  * add logo ((0eb2a14e))
  * change how the notifications look ((b155a0a8))
  * fix brand appearing twice on initial page render ((30c18c99))
* **navbar:** brand logo and login register appear when they should ((13c52723))
* **notifications:**
  * fix notifications loading ((f652d45d))
  * add read status ((4647f475))
* **online:** change projects to link to diary page ((e53e5853))
* **post:**
  * change image background color ((0adb217c))
  * add user picture ((171f7b5e))
  * fix error caused by missing user on some comments ((c357f443))
* **project:** increase post limit visible ((746f71c6))
* **project-page:** only show entries that have photos ((aec9f836))
* **projects:** restyle the users projects page ((62da6b67))
* **text-box:** styled it a bit ((011167b8))
* **time-lapse:**
  * remove time lapse and make optional ((6c299863))
  * fix spacing kinda ((d7fe5e18))
  * fix time-lapse not including last post ((dbdf6a16))


#### Features

* **build:**
  * add grunt bump and changelog ((f7a72ff1))
  * change build control options ((ecba3f6f))
  * add build control tool ((8f8a36d4))
* **diary:**
  * add text posts ((d0f65539))
  * add new project info box ((351b6b6a))
* **diary-page:** add first look at diary page ((8a2e6369))
* **feed:**
  * add post ui for new post ((dca2e9b4))
  * add offline users ((db42433b))
* **feedback:** add github issues link to feedback ((a5316720))
* **landing-page:** add basic landing page ((d32fb74d))
* **loading-bar:** add global loading bar ((c94de92f))
* **notifictions:** add notifications ((a970e0eb))
* **post:** add background color to images ((8dfc1716))
* **posts:** update project links to diary page ((7fa4ae79))
* **project-page:** add project timelapse ((fb75da76))
* **text-post:** add posting ((32288832))


<a name="0.15.5"></a>
### 0.15.5 (2014-09-20)


#### Bug Fixes

* **feed:** offline users works when offline ((25f6c269))


<a name="0.15.4"></a>
### 0.15.4 (2014-09-20)


#### Bug Fixes

* **notifications:** fix notifications loading ((f652d45d))


<a name="0.15.3"></a>
### 0.15.3 (2014-09-20)


#### Bug Fixes

* **homepage:** fix icons too large in nabber ((df3ad43f))


<a name="0.15.2"></a>
### 0.15.2 (2014-09-20)


<a name="0.15.1"></a>
### 0.15.1 (2014-09-20)


#### Bug Fixes

* **auth:** add loading the current user whenever the page loads ((4abb4ca8))
* **diary:** change the styles to match medium more. bigger fonts. ((cfcff7a0))
* **download-url:** bump to next version ((caf4f041))
* **feed:**
  * limit removed on offline users ((d3733d81))
  * change feedback link to have mac app as well as website ((1eff2568))
  * fix user dropdown needing to be double clicked ((defadf93))
  * access your projects from the user dropdown menu ((494e1df1))
  * limit ((72e8d3c2))
  * increase feed post limit visible ((0ae2935c))
* **homepage:** fix homepage redirecting ((9a392ac9))
* **landing:**
  * add mac app download link to homepage ((ab3ec568))
  * changed the copy again to emphasise journals ((06e20ae1))
* **landing-page:**
  * change journal to visual diary ((cd702122))
  * more copy change ((b5ee730c))
  * change copy on landing page ((36dd99b0))
  * brand logo now links to landing page ((ef339b83))
* **nabber:**
  * change how the notifications look ((b155a0a8))
  * fix brand appearing twice on initial page render ((30c18c99))
* **navbar:** brand logo and login register appear when they should ((13c52723))
* **notifications:** add read status ((4647f475))
* **online:** change projects to link to diary page ((e53e5853))
* **post:**
  * change image background color ((0adb217c))
  * add user picture ((171f7b5e))
  * fix error caused by missing user on some comments ((c357f443))
* **project:** increase post limit visible ((746f71c6))
* **project-page:** only show entries that have photos ((aec9f836))
* **projects:** restyle the users projects page ((62da6b67))
* **text-box:** styled it a bit ((011167b8))
* **time-lapse:**
  * remove time lapse and make optional ((6c299863))
  * fix spacing kinda ((d7fe5e18))
  * fix time-lapse not including last post ((dbdf6a16))


#### Features

* **build:**
  * add grunt bump and changelog ((f7a72ff1))
  * change build control options ((ecba3f6f))
  * add build control tool ((8f8a36d4))
* **diary:**
  * add text posts ((d0f65539))
  * add new project info box ((351b6b6a))
* **diary-page:** add first look at diary page ((8a2e6369))
* **feed:**
  * add post ui for new post ((dca2e9b4))
  * add offline users ((db42433b))
* **feedback:** add github issues link to feedback ((a5316720))
* **landing-page:** add basic landing page ((d32fb74d))
* **loading-bar:** add global loading bar ((c94de92f))
* **notifictions:** add notifications ((a970e0eb))
* **post:** add background color to images ((8dfc1716))
* **posts:** update project links to diary page ((7fa4ae79))
* **project-page:** add project timelapse ((fb75da76))
* **text-post:** add posting ((32288832))


<a name="0.15.0"></a>
## 0.15.0 (2014-09-20)


#### Bug Fixes

* **auth:** add loading the current user whenever the page loads ((4abb4ca8))
* **diary:** change the styles to match medium more. bigger fonts. ((cfcff7a0))
* **download-url:** bump to next version ((caf4f041))
* **feed:**
  * limit removed on offline users ((d3733d81))
  * change feedback link to have mac app as well as website ((1eff2568))
  * fix user dropdown needing to be double clicked ((defadf93))
  * access your projects from the user dropdown menu ((494e1df1))
  * limit ((72e8d3c2))
  * increase feed post limit visible ((0ae2935c))
* **homepage:** fix homepage redirecting ((9a392ac9))
* **landing:**
  * add mac app download link to homepage ((ab3ec568))
  * changed the copy again to emphasise journals ((06e20ae1))
* **landing-page:**
  * change journal to visual diary ((cd702122))
  * more copy change ((b5ee730c))
  * change copy on landing page ((36dd99b0))
  * brand logo now links to landing page ((ef339b83))
* **nabber:** fix brand appearing twice on initial page render ((30c18c99))
* **navbar:** brand logo and login register appear when they should ((13c52723))
* **notifications:** add read status ((4647f475))
* **online:** change projects to link to diary page ((e53e5853))
* **post:**
  * change image background color ((0adb217c))
  * add user picture ((171f7b5e))
  * fix error caused by missing user on some comments ((c357f443))
* **project:** increase post limit visible ((746f71c6))
* **project-page:** only show entries that have photos ((aec9f836))
* **projects:** restyle the users projects page ((62da6b67))
* **text-box:** styled it a bit ((011167b8))
* **time-lapse:**
  * remove time lapse and make optional ((6c299863))
  * fix spacing kinda ((d7fe5e18))
  * fix time-lapse not including last post ((dbdf6a16))


#### Features

* **build:**
  * add grunt bump and changelog ((f7a72ff1))
  * change build control options ((ecba3f6f))
  * add build control tool ((8f8a36d4))
* **diary:**
  * add text posts ((d0f65539))
  * add new project info box ((351b6b6a))
* **diary-page:** add first look at diary page ((8a2e6369))
* **feed:**
  * add post ui for new post ((dca2e9b4))
  * add offline users ((db42433b))
* **feedback:** add github issues link to feedback ((a5316720))
* **landing-page:** add basic landing page ((d32fb74d))
* **loading-bar:** add global loading bar ((c94de92f))
* **notifictions:** add notifications ((a970e0eb))
* **post:** add background color to images ((8dfc1716))
* **posts:** update project links to diary page ((7fa4ae79))
* **project-page:** add project timelapse ((fb75da76))
* **text-post:** add posting ((32288832))


<a name="0.14.3"></a>
### 0.14.3 (2014-09-20)


#### Features

* **notifictions:** add notifications ((a970e0eb))


<a name="0.14.2"></a>
### 0.14.2 (2014-09-20)


#### Bug Fixes

* **auth:** add loading the current user whenever the page loads ((4abb4ca8))
* **diary:** change the styles to match medium more. bigger fonts. ((cfcff7a0))
* **download-url:** bump to next version ((caf4f041))
* **feed:**
  * limit removed on offline users ((d3733d81))
  * change feedback link to have mac app as well as website ((1eff2568))
  * fix user dropdown needing to be double clicked ((defadf93))
  * access your projects from the user dropdown menu ((494e1df1))
  * limit ((72e8d3c2))
  * increase feed post limit visible ((0ae2935c))
* **homepage:** fix homepage redirecting ((9a392ac9))
* **landing:**
  * add mac app download link to homepage ((ab3ec568))
  * changed the copy again to emphasise journals ((06e20ae1))
* **landing-page:**
  * change journal to visual diary ((cd702122))
  * more copy change ((b5ee730c))
  * change copy on landing page ((36dd99b0))
  * brand logo now links to landing page ((ef339b83))
* **nabber:** fix brand appearing twice on initial page render ((30c18c99))
* **navbar:** brand logo and login register appear when they should ((13c52723))
* **online:** change projects to link to diary page ((e53e5853))
* **post:**
  * change image background color ((0adb217c))
  * add user picture ((171f7b5e))
  * fix error caused by missing user on some comments ((c357f443))
* **project:** increase post limit visible ((746f71c6))
* **project-page:** only show entries that have photos ((aec9f836))
* **projects:** restyle the users projects page ((62da6b67))
* **text-box:** styled it a bit ((011167b8))
* **time-lapse:**
  * remove time lapse and make optional ((6c299863))
  * fix spacing kinda ((d7fe5e18))
  * fix time-lapse not including last post ((dbdf6a16))


#### Features

* **build:**
  * add grunt bump and changelog ((f7a72ff1))
  * change build control options ((ecba3f6f))
  * add build control tool ((8f8a36d4))
* **diary:**
  * add text posts ((d0f65539))
  * add new project info box ((351b6b6a))
* **diary-page:** add first look at diary page ((8a2e6369))
* **feed:**
  * add post ui for new post ((dca2e9b4))
  * add offline users ((db42433b))
* **feedback:** add github issues link to feedback ((a5316720))
* **landing-page:** add basic landing page ((d32fb74d))
* **loading-bar:** add global loading bar ((c94de92f))
* **post:** add background color to images ((8dfc1716))
* **posts:** update project links to diary page ((7fa4ae79))
* **project-page:** add project timelapse ((fb75da76))
* **text-post:** add posting ((32288832))


<a name="0.14.1"></a>
### 0.14.1 (2014-09-18)


#### Bug Fixes

* **auth:** add loading the current user whenever the page loads ((4abb4ca8))
* **diary:** change the styles to match medium more. bigger fonts. ((cfcff7a0))
* **download-url:** bump to next version ((caf4f041))
* **feed:**
  * limit removed on offline users ((d3733d81))
  * change feedback link to have mac app as well as website ((1eff2568))
  * fix user dropdown needing to be double clicked ((defadf93))
  * access your projects from the user dropdown menu ((494e1df1))
  * limit ((72e8d3c2))
  * increase feed post limit visible ((0ae2935c))
* **homepage:** fix homepage redirecting ((9a392ac9))
* **landing:**
  * add mac app download link to homepage ((ab3ec568))
  * changed the copy again to emphasise journals ((06e20ae1))
* **landing-page:**
  * change journal to visual diary ((cd702122))
  * more copy change ((b5ee730c))
  * change copy on landing page ((36dd99b0))
  * brand logo now links to landing page ((ef339b83))
* **nabber:** fix brand appearing twice on initial page render ((30c18c99))
* **navbar:** brand logo and login register appear when they should ((13c52723))
* **online:** change projects to link to diary page ((e53e5853))
* **post:**
  * change image background color ((0adb217c))
  * add user picture ((171f7b5e))
  * fix error caused by missing user on some comments ((c357f443))
* **project:** increase post limit visible ((746f71c6))
* **project-page:** only show entries that have photos ((aec9f836))
* **projects:** restyle the users projects page ((62da6b67))
* **text-box:** styled it a bit ((011167b8))
* **time-lapse:**
  * remove time lapse and make optional ((6c299863))
  * fix spacing kinda ((d7fe5e18))
  * fix time-lapse not including last post ((dbdf6a16))


#### Features

* **build:**
  * add grunt bump and changelog ((f7a72ff1))
  * change build control options ((ecba3f6f))
  * add build control tool ((8f8a36d4))
* **diary:**
  * add text posts ((d0f65539))
  * add new project info box ((351b6b6a))
* **diary-page:** add first look at diary page ((8a2e6369))
* **feed:**
  * add post ui for new post ((dca2e9b4))
  * add offline users ((db42433b))
* **feedback:** add github issues link to feedback ((a5316720))
* **landing-page:** add basic landing page ((d32fb74d))
* **loading-bar:** add global loading bar ((c94de92f))
* **post:** add background color to images ((8dfc1716))
* **posts:** update project links to diary page ((7fa4ae79))
* **project-page:** add project timelapse ((fb75da76))
* **text-post:** add posting ((32288832))


<a name="0.14.0"></a>
## 0.14.0 (2014-09-18)


#### Bug Fixes

* **auth:** add loading the current user whenever the page loads ((4abb4ca8))
* **diary:** change the styles to match medium more. bigger fonts. ((cfcff7a0))
* **download-url:** bump to next version ((caf4f041))
* **feed:**
  * limit removed on offline users ((d3733d81))
  * change feedback link to have mac app as well as website ((1eff2568))
  * fix user dropdown needing to be double clicked ((defadf93))
  * access your projects from the user dropdown menu ((494e1df1))
  * limit ((72e8d3c2))
  * increase feed post limit visible ((0ae2935c))
* **homepage:** fix homepage redirecting ((9a392ac9))
* **landing:**
  * add mac app download link to homepage ((ab3ec568))
  * changed the copy again to emphasise journals ((06e20ae1))
* **landing-page:**
  * change journal to visual diary ((cd702122))
  * more copy change ((b5ee730c))
  * change copy on landing page ((36dd99b0))
  * brand logo now links to landing page ((ef339b83))
* **nabber:** fix brand appearing twice on initial page render ((30c18c99))
* **navbar:** brand logo and login register appear when they should ((13c52723))
* **online:** change projects to link to diary page ((e53e5853))
* **post:**
  * change image background color ((0adb217c))
  * add user picture ((171f7b5e))
  * fix error caused by missing user on some comments ((c357f443))
* **project:** increase post limit visible ((746f71c6))
* **project-page:** only show entries that have photos ((aec9f836))
* **projects:** restyle the users projects page ((62da6b67))
* **text-box:** styled it a bit ((011167b8))
* **time-lapse:**
  * remove time lapse and make optional ((6c299863))
  * fix spacing kinda ((d7fe5e18))
  * fix time-lapse not including last post ((dbdf6a16))


#### Features

* **build:**
  * add grunt bump and changelog ((f7a72ff1))
  * change build control options ((ecba3f6f))
  * add build control tool ((8f8a36d4))
* **diary:** add new project info box ((351b6b6a))
* **diary-page:** add first look at diary page ((8a2e6369))
* **feed:**
  * add post ui for new post ((dca2e9b4))
  * add offline users ((db42433b))
* **feedback:** add github issues link to feedback ((a5316720))
* **landing-page:** add basic landing page ((d32fb74d))
* **loading-bar:** add global loading bar ((c94de92f))
* **post:** add background color to images ((8dfc1716))
* **posts:** update project links to diary page ((7fa4ae79))
* **project-page:** add project timelapse ((fb75da76))
* **text-post:** add posting ((32288832))


<a name="0.13.1"></a>
### 0.13.1 (2014-09-18)


#### Bug Fixes

* **auth:** add loading the current user whenever the page loads ((4abb4ca8))
* **diary:** change the styles to match medium more. bigger fonts. ((cfcff7a0))
* **download-url:** bump to next version ((caf4f041))
* **feed:**
  * limit removed on offline users ((d3733d81))
  * change feedback link to have mac app as well as website ((1eff2568))
  * fix user dropdown needing to be double clicked ((defadf93))
  * access your projects from the user dropdown menu ((494e1df1))
  * limit ((72e8d3c2))
  * increase feed post limit visible ((0ae2935c))
* **homepage:** fix homepage redirecting ((9a392ac9))
* **landing:**
  * add mac app download link to homepage ((ab3ec568))
  * changed the copy again to emphasise journals ((06e20ae1))
* **landing-page:**
  * change journal to visual diary ((cd702122))
  * more copy change ((b5ee730c))
  * change copy on landing page ((36dd99b0))
  * brand logo now links to landing page ((ef339b83))
* **nabber:** fix brand appearing twice on initial page render ((30c18c99))
* **navbar:** brand logo and login register appear when they should ((13c52723))
* **online:** change projects to link to diary page ((e53e5853))
* **post:**
  * change image background color ((0adb217c))
  * add user picture ((171f7b5e))
  * fix error caused by missing user on some comments ((c357f443))
* **project:** increase post limit visible ((746f71c6))
* **project-page:** only show entries that have photos ((aec9f836))
* **projects:** restyle the users projects page ((62da6b67))
* **time-lapse:**
  * remove time lapse and make optional ((6c299863))
  * fix spacing kinda ((d7fe5e18))
  * fix time-lapse not including last post ((dbdf6a16))


#### Features

* **build:**
  * add grunt bump and changelog ((f7a72ff1))
  * change build control options ((ecba3f6f))
  * add build control tool ((8f8a36d4))
* **diary:** add new project info box ((351b6b6a))
* **diary-page:** add first look at diary page ((8a2e6369))
* **feed:**
  * add post ui for new post ((dca2e9b4))
  * add offline users ((db42433b))
* **feedback:** add github issues link to feedback ((a5316720))
* **landing-page:** add basic landing page ((d32fb74d))
* **loading-bar:** add global loading bar ((c94de92f))
* **post:** add background color to images ((8dfc1716))
* **posts:** update project links to diary page ((7fa4ae79))
* **project-page:** add project timelapse ((fb75da76))
* **text-post:** add posting ((32288832))


<a name="0.13.0"></a>
## 0.13.0 (2014-09-16)


#### Bug Fixes

* **auth:** add loading the current user whenever the page loads ((4abb4ca8))
* **diary:** change the styles to match medium more. bigger fonts. ((cfcff7a0))
* **download-url:** bump to next version ((caf4f041))
* **feed:**
  * limit removed on offline users ((d3733d81))
  * change feedback link to have mac app as well as website ((1eff2568))
  * fix user dropdown needing to be double clicked ((defadf93))
  * access your projects from the user dropdown menu ((494e1df1))
  * limit ((72e8d3c2))
  * increase feed post limit visible ((0ae2935c))
* **homepage:** fix homepage redirecting ((9a392ac9))
* **landing:**
  * add mac app download link to homepage ((ab3ec568))
  * changed the copy again to emphasise journals ((06e20ae1))
* **landing-page:**
  * change journal to visual diary ((cd702122))
  * more copy change ((b5ee730c))
  * change copy on landing page ((36dd99b0))
  * brand logo now links to landing page ((ef339b83))
* **nabber:** fix brand appearing twice on initial page render ((30c18c99))
* **navbar:** brand logo and login register appear when they should ((13c52723))
* **online:** change projects to link to diary page ((e53e5853))
* **post:**
  * change image background color ((0adb217c))
  * add user picture ((171f7b5e))
  * fix error caused by missing user on some comments ((c357f443))
* **project:** increase post limit visible ((746f71c6))
* **project-page:** only show entries that have photos ((aec9f836))
* **projects:** restyle the users projects page ((62da6b67))
* **time-lapse:**
  * remove time lapse and make optional ((6c299863))
  * fix spacing kinda ((d7fe5e18))
  * fix time-lapse not including last post ((dbdf6a16))


#### Features

* **build:**
  * add grunt bump and changelog ((f7a72ff1))
  * change build control options ((ecba3f6f))
  * add build control tool ((8f8a36d4))
* **diary:** add new project info box ((351b6b6a))
* **diary-page:** add first look at diary page ((8a2e6369))
* **feed:** add offline users ((db42433b))
* **feedback:** add github issues link to feedback ((a5316720))
* **landing-page:** add basic landing page ((d32fb74d))
* **loading-bar:** add global loading bar ((c94de92f))
* **post:** add background color to images ((8dfc1716))
* **posts:** update project links to diary page ((7fa4ae79))
* **project-page:** add project timelapse ((fb75da76))


<a name="0.12.3"></a>
### 0.12.3 (2014-09-15)


#### Bug Fixes

* **homepage:** fix homepage redirecting ((9a392ac9))


<a name="0.12.2"></a>
### 0.12.2 (2014-09-15)


#### Bug Fixes

* **auth:** add loading the current user whenever the page loads ((4abb4ca8))
* **diary:** change the styles to match medium more. bigger fonts. ((cfcff7a0))
* **feed:**
  * limit removed on offline users ((d3733d81))
  * change feedback link to have mac app as well as website ((1eff2568))
  * fix user dropdown needing to be double clicked ((defadf93))
  * access your projects from the user dropdown menu ((494e1df1))
  * limit ((72e8d3c2))
  * increase feed post limit visible ((0ae2935c))
* **landing:**
  * add mac app download link to homepage ((ab3ec568))
  * changed the copy again to emphasise journals ((06e20ae1))
* **landing-page:**
  * change journal to visual diary ((cd702122))
  * more copy change ((b5ee730c))
  * change copy on landing page ((36dd99b0))
  * brand logo now links to landing page ((ef339b83))
* **nabber:** fix brand appearing twice on initial page render ((30c18c99))
* **navbar:** brand logo and login register appear when they should ((13c52723))
* **online:** change projects to link to diary page ((e53e5853))
* **post:**
  * change image background color ((0adb217c))
  * add user picture ((171f7b5e))
  * fix error caused by missing user on some comments ((c357f443))
* **project:** increase post limit visible ((746f71c6))
* **project-page:** only show entries that have photos ((aec9f836))
* **projects:** restyle the users projects page ((62da6b67))
* **time-lapse:**
  * remove time lapse and make optional ((6c299863))
  * fix spacing kinda ((d7fe5e18))
  * fix time-lapse not including last post ((dbdf6a16))


#### Features

* **build:**
  * add grunt bump and changelog ((f7a72ff1))
  * change build control options ((ecba3f6f))
  * add build control tool ((8f8a36d4))
* **diary:** add new project info box ((351b6b6a))
* **diary-page:** add first look at diary page ((8a2e6369))
* **feed:** add offline users ((db42433b))
* **feedback:** add github issues link to feedback ((a5316720))
* **landing-page:** add basic landing page ((d32fb74d))
* **loading-bar:** add global loading bar ((c94de92f))
* **post:** add background color to images ((8dfc1716))
* **posts:** update project links to diary page ((7fa4ae79))
* **project-page:** add project timelapse ((fb75da76))


<a name="0.12.1"></a>
### 0.12.1 (2014-09-07)


#### Bug Fixes

* **auth:** add loading the current user whenever the page loads ((4abb4ca8))
* **diary:** change the styles to match medium more. bigger fonts. ((cfcff7a0))
* **feed:**
  * limit removed on offline users ((d3733d81))
  * change feedback link to have mac app as well as website ((1eff2568))
  * fix user dropdown needing to be double clicked ((defadf93))
  * access your projects from the user dropdown menu ((494e1df1))
  * limit ((72e8d3c2))
  * increase feed post limit visible ((0ae2935c))
* **landing:**
  * add mac app download link to homepage ((ab3ec568))
  * changed the copy again to emphasise journals ((06e20ae1))
* **landing-page:**
  * change journal to visual diary ((cd702122))
  * more copy change ((b5ee730c))
  * change copy on landing page ((36dd99b0))
  * brand logo now links to landing page ((ef339b83))
* **nabber:** fix brand appearing twice on initial page render ((30c18c99))
* **navbar:** brand logo and login register appear when they should ((13c52723))
* **online:** change projects to link to diary page ((e53e5853))
* **post:**
  * change image background color ((0adb217c))
  * add user picture ((171f7b5e))
  * fix error caused by missing user on some comments ((c357f443))
* **project:** increase post limit visible ((746f71c6))
* **project-page:** only show entries that have photos ((aec9f836))
* **projects:** restyle the users projects page ((62da6b67))
* **time-lapse:**
  * remove time lapse and make optional ((6c299863))
  * fix spacing kinda ((d7fe5e18))
  * fix time-lapse not including last post ((dbdf6a16))


#### Features

* **build:**
  * add grunt bump and changelog ((f7a72ff1))
  * change build control options ((ecba3f6f))
  * add build control tool ((8f8a36d4))
* **diary:** add new project info box ((351b6b6a))
* **diary-page:** add first look at diary page ((8a2e6369))
* **feed:** add offline users ((db42433b))
* **feedback:** add github issues link to feedback ((a5316720))
* **landing-page:** add basic landing page ((d32fb74d))
* **loading-bar:** add global loading bar ((c94de92f))
* **post:** add background color to images ((8dfc1716))
* **posts:** update project links to diary page ((7fa4ae79))
* **project-page:** add project timelapse ((fb75da76))


<a name="0.12.0"></a>
## 0.12.0 (2014-09-07)


#### Bug Fixes

* **auth:** add loading the current user whenever the page loads ((4abb4ca8))
* **diary:** change the styles to match medium more. bigger fonts. ((cfcff7a0))
* **feed:**
  * change feedback link to have mac app as well as website ((1eff2568))
  * fix user dropdown needing to be double clicked ((defadf93))
  * access your projects from the user dropdown menu ((494e1df1))
  * limit ((72e8d3c2))
  * increase feed post limit visible ((0ae2935c))
* **landing:**
  * add mac app download link to homepage ((ab3ec568))
  * changed the copy again to emphasise journals ((06e20ae1))
* **landing-page:**
  * change journal to visual diary ((cd702122))
  * more copy change ((b5ee730c))
  * change copy on landing page ((36dd99b0))
  * brand logo now links to landing page ((ef339b83))
* **nabber:** fix brand appearing twice on initial page render ((30c18c99))
* **navbar:** brand logo and login register appear when they should ((13c52723))
* **online:** change projects to link to diary page ((e53e5853))
* **post:**
  * change image background color ((0adb217c))
  * add user picture ((171f7b5e))
  * fix error caused by missing user on some comments ((c357f443))
* **project:** increase post limit visible ((746f71c6))
* **project-page:** only show entries that have photos ((aec9f836))
* **projects:** restyle the users projects page ((62da6b67))
* **time-lapse:**
  * remove time lapse and make optional ((6c299863))
  * fix spacing kinda ((d7fe5e18))
  * fix time-lapse not including last post ((dbdf6a16))


#### Features

* **build:**
  * add grunt bump and changelog ((f7a72ff1))
  * change build control options ((ecba3f6f))
  * add build control tool ((8f8a36d4))
* **diary:** add new project info box ((351b6b6a))
* **diary-page:** add first look at diary page ((8a2e6369))
* **feed:** add offline users ((db42433b))
* **feedback:** add github issues link to feedback ((a5316720))
* **landing-page:** add basic landing page ((d32fb74d))
* **loading-bar:** add global loading bar ((c94de92f))
* **post:** add background color to images ((8dfc1716))
* **posts:** update project links to diary page ((7fa4ae79))
* **project-page:** add project timelapse ((fb75da76))


<a name="0.11.5"></a>
### 0.11.5 (2014-09-07)


#### Bug Fixes

* **auth:** add loading the current user whenever the page loads ((4abb4ca8))
* **diary:** change the styles to match medium more. bigger fonts. ((cfcff7a0))
* **feed:**
  * change feedback link to have mac app as well as website ((1eff2568))
  * fix user dropdown needing to be double clicked ((defadf93))
  * access your projects from the user dropdown menu ((494e1df1))
  * limit ((72e8d3c2))
  * increase feed post limit visible ((0ae2935c))
* **landing:**
  * add mac app download link to homepage ((ab3ec568))
  * changed the copy again to emphasise journals ((06e20ae1))
* **landing-page:**
  * change journal to visual diary ((cd702122))
  * more copy change ((b5ee730c))
  * change copy on landing page ((36dd99b0))
  * brand logo now links to landing page ((ef339b83))
* **nabber:** fix brand appearing twice on initial page render ((30c18c99))
* **navbar:** brand logo and login register appear when they should ((13c52723))
* **online:** change projects to link to diary page ((e53e5853))
* **post:**
  * change image background color ((0adb217c))
  * add user picture ((171f7b5e))
  * fix error caused by missing user on some comments ((c357f443))
* **project:** increase post limit visible ((746f71c6))
* **project-page:** only show entries that have photos ((aec9f836))
* **projects:** restyle the users projects page ((62da6b67))
* **time-lapse:**
  * remove time lapse and make optional ((6c299863))
  * fix spacing kinda ((d7fe5e18))
  * fix time-lapse not including last post ((dbdf6a16))


#### Features

* **build:**
  * add grunt bump and changelog ((f7a72ff1))
  * change build control options ((ecba3f6f))
  * add build control tool ((8f8a36d4))
* **diary:** add new project info box ((351b6b6a))
* **diary-page:** add first look at diary page ((8a2e6369))
* **feedback:** add github issues link to feedback ((a5316720))
* **landing-page:** add basic landing page ((d32fb74d))
* **loading-bar:** add global loading bar ((c94de92f))
* **post:** add background color to images ((8dfc1716))
* **posts:** update project links to diary page ((7fa4ae79))
* **project-page:** add project timelapse ((fb75da76))


<a name="0.11.4"></a>
### 0.11.4 (2014-09-07)


#### Bug Fixes

* **auth:** add loading the current user whenever the page loads ((4abb4ca8))
* **feed:**
  * change feedback link to have mac app as well as website ((1eff2568))
  * fix user dropdown needing to be double clicked ((defadf93))
  * access your projects from the user dropdown menu ((494e1df1))
  * limit ((72e8d3c2))
  * increase feed post limit visible ((0ae2935c))
* **landing:**
  * add mac app download link to homepage ((ab3ec568))
  * changed the copy again to emphasise journals ((06e20ae1))
* **landing-page:**
  * change journal to visual diary ((cd702122))
  * more copy change ((b5ee730c))
  * change copy on landing page ((36dd99b0))
  * brand logo now links to landing page ((ef339b83))
* **navbar:** brand logo and login register appear when they should ((13c52723))
* **online:** change projects to link to diary page ((e53e5853))
* **post:**
  * change image background color ((0adb217c))
  * add user picture ((171f7b5e))
  * fix error caused by missing user on some comments ((c357f443))
* **project:** increase post limit visible ((746f71c6))
* **project-page:** only show entries that have photos ((aec9f836))
* **projects:** restyle the users projects page ((62da6b67))
* **time-lapse:**
  * remove time lapse and make optional ((6c299863))
  * fix spacing kinda ((d7fe5e18))
  * fix time-lapse not including last post ((dbdf6a16))


#### Features

* **build:**
  * add grunt bump and changelog ((f7a72ff1))
  * change build control options ((ecba3f6f))
  * add build control tool ((8f8a36d4))
* **diary:** add new project info box ((351b6b6a))
* **diary-page:** add first look at diary page ((8a2e6369))
* **feedback:** add github issues link to feedback ((a5316720))
* **landing-page:** add basic landing page ((d32fb74d))
* **post:** add background color to images ((8dfc1716))
* **posts:** update project links to diary page ((7fa4ae79))
* **project-page:** add project timelapse ((fb75da76))


<a name="0.11.3"></a>
### 0.11.3 (2014-09-07)


#### Bug Fixes

* **feed:**
  * change feedback link to have mac app as well as website ((1eff2568))
  * fix user dropdown needing to be double clicked ((defadf93))
  * access your projects from the user dropdown menu ((494e1df1))
  * limit ((72e8d3c2))
  * increase feed post limit visible ((0ae2935c))
* **landing:**
  * add mac app download link to homepage ((ab3ec568))
  * changed the copy again to emphasise journals ((06e20ae1))
* **landing-page:**
  * change journal to visual diary ((cd702122))
  * more copy change ((b5ee730c))
  * change copy on landing page ((36dd99b0))
  * brand logo now links to landing page ((ef339b83))
* **navbar:** brand logo and login register appear when they should ((13c52723))
* **online:** change projects to link to diary page ((e53e5853))
* **post:**
  * change image background color ((0adb217c))
  * add user picture ((171f7b5e))
  * fix error caused by missing user on some comments ((c357f443))
* **project:** increase post limit visible ((746f71c6))
* **project-page:** only show entries that have photos ((aec9f836))
* **projects:** restyle the users projects page ((62da6b67))
* **time-lapse:**
  * remove time lapse and make optional ((6c299863))
  * fix spacing kinda ((d7fe5e18))
  * fix time-lapse not including last post ((dbdf6a16))


#### Features

* **build:**
  * add grunt bump and changelog ((f7a72ff1))
  * change build control options ((ecba3f6f))
  * add build control tool ((8f8a36d4))
* **diary:** add new project info box ((351b6b6a))
* **diary-page:** add first look at diary page ((8a2e6369))
* **feedback:** add github issues link to feedback ((a5316720))
* **landing-page:** add basic landing page ((d32fb74d))
* **post:** add background color to images ((8dfc1716))
* **posts:** update project links to diary page ((7fa4ae79))
* **project-page:** add project timelapse ((fb75da76))


<a name="0.11.2"></a>
### 0.11.2 (2014-09-06)


#### Bug Fixes

* **feed:**
  * fix user dropdown needing to be double clicked ((defadf93))
  * access your projects from the user dropdown menu ((494e1df1))
  * limit ((72e8d3c2))
  * increase feed post limit visible ((0ae2935c))
* **landing:** changed the copy again to emphasise journals ((06e20ae1))
* **landing-page:**
  * change journal to visual diary ((cd702122))
  * more copy change ((b5ee730c))
  * change copy on landing page ((36dd99b0))
  * brand logo now links to landing page ((ef339b83))
* **navbar:** brand logo and login register appear when they should ((13c52723))
* **online:** change projects to link to diary page ((e53e5853))
* **post:**
  * add user picture ((171f7b5e))
  * fix error caused by missing user on some comments ((c357f443))
* **project:** increase post limit visible ((746f71c6))
* **project-page:** only show entries that have photos ((aec9f836))
* **time-lapse:**
  * remove time lapse and make optional ((6c299863))
  * fix spacing kinda ((d7fe5e18))
  * fix time-lapse not including last post ((dbdf6a16))


#### Features

* **build:**
  * add grunt bump and changelog ((f7a72ff1))
  * change build control options ((ecba3f6f))
  * add build control tool ((8f8a36d4))
* **diary:** add new project info box ((351b6b6a))
* **diary-page:** add first look at diary page ((8a2e6369))
* **feedback:** add github issues link to feedback ((a5316720))
* **landing-page:** add basic landing page ((d32fb74d))
* **post:** add background color to images ((8dfc1716))
* **posts:** update project links to diary page ((7fa4ae79))
* **project-page:** add project timelapse ((fb75da76))


<a name="0.11.1"></a>
### 0.11.1 (2014-09-06)


#### Bug Fixes

* **feed:**
  * access your projects from the user dropdown menu ((494e1df1))
  * limit ((72e8d3c2))
  * increase feed post limit visible ((0ae2935c))
* **landing:** changed the copy again to emphasise journals ((06e20ae1))
* **landing-page:**
  * change journal to visual diary ((cd702122))
  * more copy change ((b5ee730c))
  * change copy on landing page ((36dd99b0))
  * brand logo now links to landing page ((ef339b83))
* **navbar:** brand logo and login register appear when they should ((13c52723))
* **online:** change projects to link to diary page ((e53e5853))
* **post:**
  * add user picture ((171f7b5e))
  * fix error caused by missing user on some comments ((c357f443))
* **project:** increase post limit visible ((746f71c6))
* **project-page:** only show entries that have photos ((aec9f836))
* **time-lapse:**
  * remove time lapse and make optional ((6c299863))
  * fix spacing kinda ((d7fe5e18))
  * fix time-lapse not including last post ((dbdf6a16))


#### Features

* **build:**
  * add grunt bump and changelog ((f7a72ff1))
  * change build control options ((ecba3f6f))
  * add build control tool ((8f8a36d4))
* **diary:** add new project info box ((351b6b6a))
* **diary-page:** add first look at diary page ((8a2e6369))
* **feedback:** add github issues link to feedback ((a5316720))
* **landing-page:** add basic landing page ((d32fb74d))
* **post:** add background color to images ((8dfc1716))
* **posts:** update project links to diary page ((7fa4ae79))
* **project-page:** add project timelapse ((fb75da76))


<a name="0.11.0"></a>
## 0.11.0 (2014-09-06)


#### Bug Fixes

* **feed:**
  * limit ((72e8d3c2))
  * increase feed post limit visible ((0ae2935c))
* **landing:** changed the copy again to emphasise journals ((06e20ae1))
* **landing-page:**
  * change journal to visual diary ((cd702122))
  * more copy change ((b5ee730c))
  * change copy on landing page ((36dd99b0))
  * brand logo now links to landing page ((ef339b83))
* **navbar:** brand logo and login register appear when they should ((13c52723))
* **online:** change projects to link to diary page ((e53e5853))
* **post:**
  * add user picture ((171f7b5e))
  * fix error caused by missing user on some comments ((c357f443))
* **project:** increase post limit visible ((746f71c6))
* **project-page:** only show entries that have photos ((aec9f836))
* **time-lapse:**
  * remove time lapse and make optional ((6c299863))
  * fix spacing kinda ((d7fe5e18))
  * fix time-lapse not including last post ((dbdf6a16))


#### Features

* **build:**
  * add grunt bump and changelog ((f7a72ff1))
  * change build control options ((ecba3f6f))
  * add build control tool ((8f8a36d4))
* **diary:** add new project info box ((351b6b6a))
* **diary-page:** add first look at diary page ((8a2e6369))
* **feedback:** add github issues link to feedback ((a5316720))
* **landing-page:** add basic landing page ((d32fb74d))
* **post:** add background color to images ((8dfc1716))
* **posts:** update project links to diary page ((7fa4ae79))
* **project-page:** add project timelapse ((fb75da76))


<a name="0.10.0"></a>
## 0.10.0 (2014-09-06)


#### Bug Fixes

* **feed:**
  * limit ((72e8d3c2))
  * increase feed post limit visible ((0ae2935c))
* **landing:** changed the copy again to emphasise journals ((06e20ae1))
* **landing-page:**
  * change journal to visual diary ((cd702122))
  * more copy change ((b5ee730c))
  * change copy on landing page ((36dd99b0))
  * brand logo now links to landing page ((ef339b83))
* **navbar:** brand logo and login register appear when they should ((13c52723))
* **post:** fix error caused by missing user on some comments ((c357f443))
* **project:** increase post limit visible ((746f71c6))
* **project-page:** only show entries that have photos ((aec9f836))
* **time-lapse:**
  * remove time lapse and make optional ((6c299863))
  * fix spacing kinda ((d7fe5e18))
  * fix time-lapse not including last post ((dbdf6a16))


#### Features

* **build:**
  * add grunt bump and changelog ((f7a72ff1))
  * change build control options ((ecba3f6f))
  * add build control tool ((8f8a36d4))
* **diary-page:** add first look at diary page ((8a2e6369))
* **landing-page:** add basic landing page ((d32fb74d))
* **post:** add background color to images ((8dfc1716))
* **posts:** update project links to diary page ((7fa4ae79))
* **project-page:** add project timelapse ((fb75da76))


<a name="0.9.1"></a>
### 0.9.1 (2014-08-26)


#### Bug Fixes

* **time-lapse:** remove time lapse and make optional ((6c299863))


#### Features

* **post:** add background color to images ((8dfc1716))


<a name="0.9.0"></a>
## 0.9.0 (2014-08-26)


#### Bug Fixes

* **feed:**
  * limit ((72e8d3c2))
  * increase feed post limit visible ((0ae2935c))
* **landing:** changed the copy again to emphasise journals ((06e20ae1))
* **landing-page:**
  * change journal to visual diary ((cd702122))
  * more copy change ((b5ee730c))
  * change copy on landing page ((36dd99b0))
  * brand logo now links to landing page ((ef339b83))
* **navbar:** brand logo and login register appear when they should ((13c52723))
* **post:** fix error caused by missing user on some comments ((c357f443))
* **project:** increase post limit visible ((746f71c6))
* **project-page:** only show entries that have photos ((aec9f836))
* **time-lapse:**
  * fix spacing kinda ((d7fe5e18))
  * fix time-lapse not including last post ((dbdf6a16))


#### Features

* **build:**
  * add grunt bump and changelog ((f7a72ff1))
  * change build control options ((ecba3f6f))
  * add build control tool ((8f8a36d4))
* **landing-page:** add basic landing page ((d32fb74d))
* **project-page:** add project timelapse ((fb75da76))


<a name="0.8.0"></a>
## 0.8.0 (2014-08-26)


#### Bug Fixes

* **feed:**
  * limit ((72e8d3c2))
  * increase feed post limit visible ((0ae2935c))
* **landing:** changed the copy again to emphasise journals ((06e20ae1))
* **landing-page:**
  * change journal to visual diary ((cd702122))
  * more copy change ((b5ee730c))
  * change copy on landing page ((36dd99b0))
  * brand logo now links to landing page ((ef339b83))
* **navbar:** brand logo and login register appear when they should ((13c52723))
* **post:** fix error caused by missing user on some comments ((c357f443))
* **project:** increase post limit visible ((746f71c6))
* **project-page:** only show entries that have photos ((aec9f836))
* **time-lapse:** fix time-lapse not including last post ((dbdf6a16))


#### Features

* **build:**
  * add grunt bump and changelog ((f7a72ff1))
  * change build control options ((ecba3f6f))
  * add build control tool ((8f8a36d4))
* **landing-page:** add basic landing page ((d32fb74d))
* **project-page:** add project timelapse ((fb75da76))


<a name="0.6.0"></a>
## 0.6.0 (2014-08-24)


#### Bug Fixes

* **feed:**
  * limit ((72e8d3c2))
  * increase feed post limit visible ((0ae2935c))
* **landing:** changed the copy again to emphasise journals ((06e20ae1))
* **landing-page:**
  * change journal to visual diary ((cd702122))
  * more copy change ((b5ee730c))
  * change copy on landing page ((36dd99b0))
  * brand logo now links to landing page ((ef339b83))
* **navbar:** brand logo and login register appear when they should ((13c52723))
* **post:** fix error caused by missing user on some comments ((c357f443))
* **project:** increase post limit visible ((746f71c6))
* **project-page:** only show entries that have photos ((aec9f836))


#### Features

* **build:**
  * add grunt bump and changelog ((f7a72ff1))
  * change build control options ((ecba3f6f))
  * add build control tool ((8f8a36d4))
* **landing-page:** add basic landing page ((d32fb74d))


<a name="0.5.4"></a>
### 0.5.4 (2014-08-24)


#### Bug Fixes

* **feed:** limit ((72e8d3c2))


<a name="0.5.3"></a>
### 0.5.3 (2014-08-24)


#### Bug Fixes

* **feed:** increase feed post limit visible ((0ae2935c))
* **landing-page:**
  * more copy change ((b5ee730c))
  * change copy on landing page ((36dd99b0))
  * brand logo now links to landing page ((ef339b83))
* **navbar:** brand logo and login register appear when they should ((13c52723))
* **post:** fix error caused by missing user on some comments ((c357f443))
* **project:** increase post limit visible ((746f71c6))


#### Features

* **build:**
  * add grunt bump and changelog ((f7a72ff1))
  * change build control options ((ecba3f6f))
  * add build control tool ((8f8a36d4))
* **landing-page:** add basic landing page ((d32fb74d))


<a name="0.5.2"></a>
### 0.5.2 (2014-08-24)


#### Bug Fixes

* **feed:** increase feed post limit visible ((0ae2935c))
* **landing-page:**
  * more copy change ((b5ee730c))
  * change copy on landing page ((36dd99b0))
  * brand logo now links to landing page ((ef339b83))
* **navbar:** brand logo and login register appear when they should ((13c52723))
* **post:** fix error caused by missing user on some comments ((c357f443))


#### Features

* **build:**
  * add grunt bump and changelog ((f7a72ff1))
  * change build control options ((ecba3f6f))
  * add build control tool ((8f8a36d4))
* **landing-page:** add basic landing page ((d32fb74d))


<a name="0.5.1"></a>
### 0.5.1 (2014-08-24)


#### Bug Fixes

* **landing-page:**
  * more copy change ((b5ee730c))
  * change copy on landing page ((36dd99b0))
  * brand logo now links to landing page ((ef339b83))
* **navbar:** brand logo and login register appear when they should ((13c52723))
* **post:** fix error caused by missing user on some comments ((c357f443))


#### Features

* **build:**
  * add grunt bump and changelog ((f7a72ff1))
  * change build control options ((ecba3f6f))
  * add build control tool ((8f8a36d4))
* **landing-page:** add basic landing page ((d32fb74d))


<a name="0.5.0"></a>
## 0.5.0 (2014-08-24)


#### Bug Fixes

* **landing-page:**
  * more copy change ((b5ee730c))
  * change copy on landing page ((36dd99b0))
  * brand logo now links to landing page ((ef339b83))
* **navbar:** brand logo and login register appear when they should ((13c52723))


#### Features

* **build:**
  * add grunt bump and changelog ((f7a72ff1))
  * change build control options ((ecba3f6f))
  * add build control tool ((8f8a36d4))
* **landing-page:** add basic landing page ((d32fb74d))


<a name="0.4.0"></a>
## 0.4.0 (2014-08-24)


#### Bug Fixes

* **landing-page:** brand logo now links to landing page ((ef339b83))
* **navbar:** brand logo and login register appear when they should ((13c52723))


#### Features

* **landing-page:** add basic landing page ((d32fb74d))


<a name="0.3.0"></a>
## 0.3.0 (2014-08-24)


<a name="0.1.0"></a>
## 0.1.0 (2014-08-24)


#### Features

* **build:**
  * add grunt bump and changelog ((f7a72ff1))
  * change build control options ((ecba3f6f))
  * add build control tool ((8f8a36d4))

