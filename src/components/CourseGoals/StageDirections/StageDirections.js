import React from 'react'
import './StageDirections.css';
import FadeIn from '../CourseGoalItem/FadeIn';

const StageDirections = (props) => {

  let action;
  if(props.courseGoals.length === 0){
    action = (
        <FadeIn><div className='directions'><h3>Panlaughlin and Vrocum settle down in their sparsely-furnished living room to watch a banned telenovela on the TV. To keep the electricity running, they must talk incessantly.</h3><h3>Our collective dreams are of great worth to the corporations.</h3></div></FadeIn>
    );} else if (props.courseGoals.length === 1) {
      action = (
        <FadeIn><h1>FIRESALE: A Telenovela</h1></FadeIn>
      )
    } else if (props.courseGoals.length === 2) {
      action = (
        <FadeIn><p>“Well, sir. Since we installed our more accurate meter reader,
        we have discovered that you use far more electricity than assumed under the previous tariff. We would be willing to discuss a different payment plan that will save you money in the long run. Is this something you would be interested in?”</p><p>Black rubber around Henry&#39;s throat palpated his vocal cords while electric needles jounced his tongue. He tried to avoid his reflected gaze in the office window&#39;s mirrored surface. Cold water ran down his wrist to the elbow as he sponged more soapy water onto its surface, his reflection momentarily wavering.</p><p>Mrs Stephens appeared below and waved frantically for him to come down. He pressed a button that lowered the cradle to the ground.</p><p>“The rates we have quoted will remain in place until April 2078, then will review the situation so there is nothing for you to worry about. You should receive an e-mail within the next week with your revised plan. Thank you and enjoy the rest of your day.”</p><p>Henry pulled the tubing out of his mouth and spat the taste of rubber into the rhododendrons.</p><p>“There&#39;s somebody waiting to speak to you in reception. It looks official.”</p><p>She appeared displeased, her hair a nest of white curls that shuffled in the wind like a restless mammal.</p><p>This interruption, she stated, would come out of his wage.</p><p>A middle-aged broad-shouldered man in a black suit and tie waited by the desk. His neck was stretched to its utmost atop which sat a small bald head furiously chewing gum.</p><p>“Mr Kikker, I presume?” He said. His hands remained firmly clasped behind his back as Henry reached for a handshake. “I am Detective Jansen,” he drew out a tattered blue lanyard. Details on the card had faded to a meaningless grey smudge. “I work for the Library Investigations department. You better take a seat!”</p><p>He declared the last loudly to Henry and, by an inclination of his head, to the rest of the room. Toby on the reception desk started filming them with his smartphone.</p></FadeIn>
      )
    } else if (props.courseGoals.length === 3) {
      action = (
        <FadeIn><p>“Oh, dear, Henry!” Mrs Stephens stood by the door, hands on her hips. “What has he done?”</p><p>“This young man borrowed a copy of Wide Sargasso Sea by Jean Rhys fifteen years ago and never returned it,” Jansen thrust his hands into his pockets and shrugged as if all the evils he had seen had made him lose faith in humanity. “People think that we will never catch up with them and they can change their address or move away. Our arm is long, however. Long and unrelenting.”</p><p>To illustrate this point, he rolled up one shirtsleeve and thrust out a long pale arm at Mrs Stephens upon which was tattooed a large watchful eye. She and Toby nodded appreciatively</p><p>Henry dimly recalled having used the library several times in his youth. </p><p>His colleagues emerged from the entrance to the office drawn by the activity in reception, the headsets that made them look like anthropomorphic crocodiles on pause as they nodded and pointed at the intricate tattoo.</p><p>“What can he do?” Mrs Stephens said, now laying her hand on Henry&#39;s shoulder. He flinched. She was keen to take on the appearance of a good boss, always on the workers side, but only when she had an audience. “You see, Mr Kikker here only came out of a stasis pod two months ago. He was in there for four years unemployed, only taking one meal a day to conserve energy and sleeping the rest of the time. He must have borrowed the book before the library was sold off?”</p><p>“We inherited all the library debts,” said Jansen, his shoulders dropped. “We had to sell off most of the stock. We only have four books left in the city&#39;s whole library system.”</p><p>Jansen&#39;s shoulders sagged and he sat down on the bench.</p><p>“My sister was in a stasis pod for a few months. It&#39;s no way to live.” He sighed exaggeratedly. “I shouldn&#39;t do this, but I&#39;m going to delay your arrest. Normally I would simply process you here and now. Instant conviction and sentencing! Off to our gulag! I have that authority!” He boasted.</p><p>Jansen declared to the small crowd standing behind the reception desk that he would give Henry two weeks to find the book or a replacement and bring it to the library in lendable condition. Failure would see him carted off to the book mines for five years and a day, such was the mandated punishment.</p></FadeIn>
      )
    } else if (props.courseGoals.length === 4) {
      action = (
        <FadeIn><p>He pointed at Henry for an uncomfortably length of time, his thick eyebrows downturned in warning, before he handed over a citation and marched off through the glass doors.</p><p>Mrs Stephens shooed the gawkers back to work.</p><p>Henry, hands outstretched, looked to say something to her.</p><p>“Don&#39;t say sorry! Get back outside and wash those windows, Henry,” she said severely. “Those calls won&#39;t answer themselves.”</p><p>* * *</p><p>Henry barrelled into the kitchen to get his bottle of Guzzle Guzzle from the fridge. Hives had broken out in itchy and unsightly blotches down his nose and cheeks. His flatmate, Simon, sat on the couch and stared blankly forward, his gaze lost to his MMORPG where he was an elf or some such creature. The lenses stained his eyes creamy white.</p><p>The Guzzle Guzzle saturated Henry&#39;s mouth in its bittersweet wash and he momentarily forgot about his anxiety.</p><p>He couldn&#39;t remember anything about Wide Sargasso Sea. He remembered next to nothing about any book he had read.</p><p>A feeling of expansiveness arose in his chest, as the chemical flow made him feel heroic, like a giant clambering effortlessly over rocks and shoals through a drunken sea.</p><p>“Guzzle Guzzle is not supposed to be drunk every day, Henry.” Simon rubbed at his red streaming eyes, lenses now extracted. “It&#39;ll give you early Alzheimer&#39;s.”</p><p>Henry tried to respond but could only drool at this moment.</p><p>Simon picked up Henry&#39;s citation and read it quickly, his eyes widening as he reached the end.</p><p>“Well, then,” Simon muttered, “it looks like I&#39;m going to have to find a new flatmate.” He brought the letter closer to his face as if trying to find some watermark that would guarantee its authenticity. “I&#39;m guessing that the book is irretrievably lost. Those library people don&#39;t fuck around, Henry. You&#39;re going to have to steal a replacement. There&#39;s no way you can afford to buy one.</p></FadeIn>
      )
    } else if (props.courseGoals.length === 5) {
      action = (
        <FadeIn><p>“I think you&#39;ve gone about living your life all wrong and this is just another result of the terrible decision you made in studying Drama at university,” he leant back as he prepared to digress on this most delectable topic. He had brought it up several times in the past month after he had found Henry&#39;s degree under the utensils in the kitchen drawer.</p><p>“Practical systems of thought are what is in demand. You should&#39;ve done computer programming or economics or business studies, not wishy-washy arts. You must be utterly exceptional to succeed in that field. I&#39;ve known you for a long time and you are not exceptional.</p><p>“Even fifteen years ago, books were passé. What were you thinking?! Neuroblasting direct entertainments is all that there is or should be.</p><p>“My brother is a lawyer, you know, but I don&#39;t think even he can help you appeal. It&#39;s an open and shut case. I can&#39;t help that your memory is also screwed by the Guzzle Guzzle and all that time in a stasis pod. You should try and get your social media license reactivated so you can find out what you were doing at the time.”</p><p>Henry sat down heavily on the couch. The combination of having his mouth talked all day and the Guzzle Guzzle made his tongue feel like a large cold slug. He clasped it between his thumb and forefinger.</p><p>“Fifteen years ago!” Simon raised his eyebrows in astonishment. “You may as well try to remember the Stone Age. Getting a social media license going back that far will cost a bomb. Even mine only goes back two years and I can&#39;t remember anything past maybe seven years. You&#39;re going to have to get another job or something. Maybe use that to leverage a loan. And before you ask, I can&#39;t lend you any money,” he frowned. “I&#39;d never get it back.”</p><p>* * *</p><p>Henry activated the bathroom break protocol and took off the prosthetic. The computer screen in front of him displayed a countdown from five minutes. He tried not to look around, seeing a depressing reflection in the dark-ringed lifeless eyes of his colleagues, though the room echoed with their bright cheery voices.</p><p>Inside the staff toilets a bald man in a baby blue tracksuit stood was hunched over the sink washing a white shirt. He turned as Henry entered and broadcast a tight grey smile. That too small head and overly long neck made him jump.</p></FadeIn>
      )
    } else if (props.courseGoals.length === 6) {
      action = (
        <FadeIn><p>Panlaughlin and Vrocum settle down in their sparsely-furnished living room to watch a banned telenovela. To keep the TV and electricity running, they must talk, always. Our collective dreams are of great worth to the corporations.</p></FadeIn>
      )
    } else if (props.courseGoals.length === 7) {
      action = (
        <FadeIn><p>Panlaughlin and Vrocum settle down in their sparsely-furnished living room to watch a banned telenovela. To keep the TV and electricity running, they must talk, always. Our collective dreams are of great worth to the corporations.</p></FadeIn>
      )
    } else if (props.courseGoals.length === 8) {
      action = (
        <FadeIn><p>Panlaughlin and Vrocum settle down in their sparsely-furnished living room to watch a banned telenovela. To keep the TV and electricity running, they must talk, always. Our collective dreams are of great worth to the corporations.</p></FadeIn>
      )
    } else if (props.courseGoals.length === 9) {
      action = (
        <FadeIn><p>Panlaughlin and Vrocum settle down in their sparsely-furnished living room to watch a banned telenovela. To keep the TV and electricity running, they must talk, always. Our collective dreams are of great worth to the corporations.</p></FadeIn>
      )
    } else if (props.courseGoals.length === 10) {
      action = (
        <FadeIn><p>Panlaughlin and Vrocum settle down in their sparsely-furnished living room to watch a banned telenovela. To keep the TV and electricity running, they must talk, always. Our collective dreams are of great worth to the corporations.</p></FadeIn>
      )
    } else if (props.courseGoals.length ===11) {
      action = (
        <FadeIn><p>Panlaughlin and Vrocum settle down in their sparsely-furnished living room to watch a banned telenovela. To keep the TV and electricity running, they must talk, always. Our collective dreams are of great worth to the corporations.</p></FadeIn>
      )
    }
  

  return (
      <div className='directions'><p>{action}</p></div>
    
  )}

export default StageDirections;