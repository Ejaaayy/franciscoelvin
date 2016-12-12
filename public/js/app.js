"use strict";

class App{
	constructor(){
		this.lists = [
			{
				"image": "img/khalessi.png",
				"name": "Daenerys Targaryen",
				"description": " Princess Daenerys Targaryen, known as Daenerys Stormborn, is one of the last confirmed members of House Targaryen, along with her older brother Viserys, and she is one of the major POV characters in A Song of Ice and Fire. Dany is also used as a nickname by the siblings. In the television adaptation Game of Thrones, Daenerys is played by Emilia Clarke. </br> </br> Queen Daenerys I Targaryen, also known as Dany and Daenerys Stormborn, is a major character in the first, second, third, fourth, fifth, sixth and seventh seasons. She is played by starring cast member Emilia Clarke, and debuts in the series premiere. She is the younger sister of Rhaegar Targaryen and Viserys Targaryen, the paternal aunt of Jon Snow, and the youngest child of King Aerys II Targaryen and Queen Rhaella Targaryen, who were both ousted from the Iron Throne during Robert Baratheon's rebellion.",
				"family":"HOUSE TARGARYEN"			
			},
            {
				"image": "img/snow.png",
				"name": "Jon Snow",
				"description": " Jon Snow is the bastard son of Eddard Stark, by a mother whose identity is a source of speculation. He was raised by his father alongside his true-born half-siblings, but joins the Night's Watch when he nears adulthood. He is constantly accompanied by his albino direwolf Ghost. At the beginning of A Game of Thrones, Jon is fourteen years old. He is one of the major POV characters in the books. In the television adaptation Game of Thrones, Jon is portrayed by Kit Harington. ",
				"family":"BASTARD"	
			},
            {
				"image": "img/tyrion.png",
				"name": "Tyrion Lannister",
				"description": " Tyrion Lannister is a member of House Lannister and is the third and youngest child of Lord Tywin Lannister and the late Joanna Lannister. His older siblings are Cersei Lannister, the queen of King Robert Baratheon, and Ser Jaime Lannister, a knight of Robert's Kingsguard.",
				"family":"HOUSE LANNISTER"			
			},
			{
				"image": "img/ned.png",
				"name": "Eddard Stark",
				"description": "Lord Eddard Stark, also known as Ned Stark, is a major character in the first season. He is played by starring cast member Sean Bean, and debuts in the series premiere. He reappears in flashbacks during the sixth season, played by Sebastian Croft and Robert Aramayo. </br> </br> Eddard was the head of House Stark, the Lord of Winterfell, Lord Paramount and Warden of the North, and later Hand of the King to King Robert I Baratheon. He is the older brother of Benjen, Lyanna and the younger brother of Brandon Stark. He is father of Robb, Sansa, Arya, Bran and Rickon by his wife, Catelyn Tully, and uncle of Jon Snow, who he raised as his bastard son. He is a dedicated husband and father, a loyal friend and an honorable lord.",
				"family":"HOUSE STARK"			
			},
            {
				"image": "img/tywin.png",
				"name": "Tywin Lannister",
				"description": "Lord Tywin Lannister is a major character in the second, third and fourth seasons. He initially appeared as a recurring character in the first season, debuting in You Win or You Die, and appeared briefly as a corpse in the fifth season. He was played by starring cast member Charles Dance. Tywin Lannister was the head of House Lannister, Lord of Casterly Rock, Warden of the West, Lord Paramount of the Westerlands, Hand of the King for three different kings, and Protector of the Realm. He is the father of Cersei, Jaime and Tyrion Lannister, and sole grandfather of the incest-born Joffrey, Myrcella and Tommen Baratheon.",
				"family":"HOUSE LANNISTER"			
			},
            {
				"image": "img/cat.png",
				"name": "Catelyn Stark",
				"description": "Catelyn Stark, née Tully, is a major character in the first, second and third seasons. She is played by starring cast member Michelle Fairley, and debuts in the series premiere. She was played in the unaired pilot by Jennifer Ehle but the role was recast. </br> </br> Catelyn was born into House Tully and married into House Stark. Her husband, Eddard Stark, is the Lord Paramount of the North, and together they have five children: Robb, Sansa, Arya, Bran, and Rickon. Catelyn is a devoted mother and is fiercely protective of her children.",
				"family":"HOUSE STARK | HOUSE TULLY"			
			},
            {
				"image": "img/cersei.png",
				"name": "Cersei Lannister",
				"description": "Queen Cersei I Lannister is a major character in the first, second, third, fourth, fifth, sixth and seventh seasons. She is portrayed by starring cast member Lena Headey and debuts in the series premiere. Cersei is the widow of King Robert Baratheon and Queen of the Seven Kingdoms. She is the daughter of Lord Tywin Lannister, twin sister of Jaime Lannister and elder sister of Tyrion Lannister. She has an incestuous sexual relationship with Jaime, who is secretly the father of her three children, Joffrey, Myrcella and Tommen. </br> </br> After the assassinations of Joffrey and Myrcella and Tommen's suicide in the wake of the destruction of the Great Sept of Baelor, Cersei assumed the throne under the name of Cersei of the House Lannister, the First of Her Name, Queen of the Andals and the First Men, Protector of the Seven Kingdoms. ",
				"family":"HOUSE LANNISTER"			
			},
            {
				"image": "img/robb.png", 
                "name": "Robb Stark",
                "description": "King Robb Stark is a major character in the first, second, and third seasons. He also appears in flashback form in the sixth season. He is played by starring cast member Richard Madden and debuts in the series premiere. Robb is the eldest son of Lord Eddard Stark of Winterfell and his wife, Lady Catelyn. He is the brother of Sansa, Arya, Bran, and Rickon Stark, and cousin (believed to be half-brother) of Jon Snow. He also adopts a direwolf named Grey Wind. Robb is acclaimed as the King in the North during the War of the Five Kings. </b> </b> <b><i>SPOILERS: </i></b> Despite his young age, he commands great respect and is notable for never having lost a battle, earning himself the nickname The Young Wolf - after the sigil of his house. He rules the North and the Riverlands until he is murdered at the Red Wedding, alongside his pregnant wife, his mother, and many of his lords' bannermen, by Houses Frey and Bolton.",
                "family":"HOUSE STARK"			
			},
            {
				"image": "img/jaime.png", 
                "name": "Jaime Lannister",
                "description": "Ser Jaime Lannister is a major character in the first, second, third, fourth, fifth, sixth and seventh seasons. He is played by starring cast member Nikolaj Coster-Waldau and debuts in the series premiere. </br> </br> Jaime is the eldest son of Tywin, younger twin brother of Cersei, and older brother of Tyrion Lannister. He is also involved in an incestuous sexual relationship with Cersei and is the biological father of her three children, Joffrey, Myrcella, and Tommen. </br> </br> Jaime previously served in the Kingsguard of Aerys Targaryen, known as the Mad King, before infamously backstabbing him during the Sack of King's Landing, earning Jaime the nickname of the Kingslayer. He continued to serve in the Kingsguard of Robert Baratheon, and as Lord Commander for Robert's alleged sons Joffrey and Tommen. However, a confrontation with the Faith of the Seven led to his dismissal from the sworn order.",
                "family":"HOUSE LANNISTER"			
			},
            {
				"image": "img/brynden.png", 
                "name": "Brynden Tully",
                "description": "Ser Brynden Tully, popularly called The Blackfish, is a recurring character in the third and sixth seasons. He is played by Clive Russell. Ser Brynden Tully is a knight and a member of House Tully. He is the younger brother of Lord Hoster Tully, and the uncle of Catelyn, Lysa, and Edmure Tully. </br> </br> <b><i>SPOILERS: </i></b> After the massacre of the Northern army at the Red Wedding and the death of Robb Stark, the Blackfish reassembles the remnants of the Tully host and retakes Riverrun from House Frey, becoming the de facto leader and lord of House Tully during his nephew's captivity. Refusing to surrender his family home to the Freys, he is killed in a final stand when Jaime Lannister retakes the castle.",
                "family":"HOUSE TULLY"			
			},
            {
				"image": "img/robert.png", 
                "name": "Robert Baratheon",
                "description": "King Robert I Baratheon is a major character in the first season. He is played by starring cast member Mark Addy, and debuts in the series premiere. </br> </br> Robert Baratheon was the ruler of the Seven Kingdoms, formally styled as Robert of the House Baratheon, the First of His Name, King of the Andals and the First Men, Lord of the Seven Kingdoms and Protector of the Realm. </br> </br> Robert, a great warrior and charismatic man in his youth, took the throne through conquest in the war known as Robert's Rebellion, which began when the Prince of Dragonstone, Rhaegar Targaryen, allegedly abducted Robert's betrothed, Lyanna Stark. Killing Rhaegar at the Battle of the Trident, his climactic duel turned the tides of the war in his favour. After the war and following Lyanna's death, Robert married Cersei Lannister to cement an alliance with House Lannister to hold the kingdoms together, but the marriage was loveless.",
                "family":"HOUSE BARATHEON"			
			},
			{
				"image": "img/stannis.png", 
                "name": "Stannis Baratheon",
                "description": "King Stannis I Baratheon is a major character in the second, third, fourth and fifth seasons. He is played by starring cast member Stephen Dillane, and debuts in The North Remembers. Stannis is mentioned in the first season but did not appear. He is the Lord of Dragonstone, the younger brother of King Robert Baratheon and older brother of Renly Baratheon. </br> </br> Following Robert's death and the revelation that Robert's heir, Joffrey, is actually Queen Cersei's bastard son with her twin brother Jaime, Stannis declares himself the rightful King and begins a campaign to take the Iron Throne from the Lannisters. After amassing an army, Stannis attacks King's Landing and almost breaches the city, but is defeated by combined Lannister-Tyrell reinforcements and forced to retreat to Dragonstone. While planning his next move following the deaths of Joffrey and Robb Stark, Stannis travels North to the Wall to aid the Night's Watch against a wildling invasion and meets Jon Snow, attempting to acquire his help in retaking the North from House Bolton, who previously betrayed House Stark and murdered Robb. Stannis ultimately marches on Winterfell alone, but the weather slows his progress and he and his army are smashed by Bolton forces in the ensuing battle. In the aftermath, he is found and killed by Brienne of Tarth for his role in Renly's death.",
                "family":"HOUSE BARATHEON"			
			}				
		];
	}
    
	render(html, component){

		component.innerHTML += html;
	}

	reRender(html, component){

		component.innerHTML = html;
	}
    


}

class Component extends App{
	constructor(){

		super();
	}

	x(){
		let html = `



		<!-- NAV -->

		<nav class="navbar navbar-default navbar-fixed-top topnav" role="navigation">
			<div class="container topnav font">
				<div class="navbar-header">
					<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
					</button>
					<a class="navbar-brand topnav" href="#" onclick="component.land()">
                    <img border="0" src="img/wolf.png" width="100" height="70" style="margin:-26px 0px">
					</a>
				</div>
				<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
					<ul class="nav navbar-nav navbar-right">

						<li>
							<a href="#" onclick="component.land()"><i style="margin-top: -18px" class="medium1 material-icons left">home</i></a>
						</li>
                      	<li>
                      		<a href="#" onclick="component.house()">GREAT HOUSES</a>
                      	</li>                      
						<li>
							<a href="#" onclick="component.clist()">CHARACTERS</a>
						</li>
						<li>
							<a href="#" onclick="component.create()">CREATE</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>

		<!-- NAV -->





		<!-- LOGO -->

		<div id="landingpage">
		<div class="intro-header">

				<div class="row">
					<div class="col-lg-12">
						<div class="intro-image">

						</div>
					</div>
				</div>

		</div>

		<!-- LOGO -->






		<!-- DESCRIPTION -->

		<section id="services">
			<div class="container">
				<div class="row text-center">
						<h2 class="service-heading">GAME OF THRONES</h2>
						<p class="text-muted">Game of Thrones is an American fantasy drama television series created by David Benioff and D. B. Weiss. 
            			It is an adaptation of A Song of Ice and Fire, George R. R. Martin's series of fantasy novels, the first of which is A Game of Thrones. 
            			It is filmed at Titanic Studios in Belfast, on location in the United Kingdom, and in Croatia, Iceland, Malta, Morocco, Spain, and the United 
            			States. The series premiered on HBO in the United States on April 17, 2011, and its sixth season ended on June 26, 2016. The series was renewed
             			for a seventh season, scheduled to premiere in mid-2017, with a total of seven episodes and will conclude with its eighth season in 2018.</p>
					</div>
				</div
			</div>
		</section>

		<!--  DESCRIPTION -->






		<!-- GREATHOUSES BANNER-->

		<aside class="cc">
			<div class="text-vertical-center">
			    <a href="#"  style="text-decoration: none" onclick="component.house()">                       
				<h1 id="foont">GREAT HOUSES</h1>
				</a>
			</div>
		</aside>

		<!-- GREATHOUSES BANNER-->



		<!-- DESCRIPTION -->

		<section id="services">
			<div class="container">
				<div class="row text-center">
						<h2 class="service-heading">ABOUT US</h2>
						<p class="text-muted">A site for speculation, and discussion for HBO’s Game of Thrones, 
          				the television adaptation of George R. R. Martin’s A Song of Ice and Fire series. 
          				and has been following the production closely ever since. Student of AMA Davao Computer College.</p>
          				<a href="https://www.facebook.com/elvin.francisco.545"><i class="fa fa-facebook fa-4x"></i></a>&nbsp
						<a href="http://steamcommunity.com/id/POPcola/"><i class="fa fa-steam fa-4x"></i></a> &nbsp
					 	<a href="https://github.com/Ejaaayy"><i class="fa fa-github fa-4x"></i></a>
					</div>
				</div
			</div>
		</section>

		<!--  DESCRIPTION -->






		<!-- CHARACTERS BANNER-->

		<aside class="c">
			<div class="text-vertical-center">
			    <a href="#"  style="text-decoration: none" onclick="component.clist()">                       
				<h1 id="foont">CHARACTERS</h1>
				</a>
			</div>
		</aside>

		<!-- CHARACTERS BANNER-->
















		<!-- START CHARACTER -->


		`;
        
		for(let index=0;index<0;index++){
		    html+=`
		      <div class="col-xs-12 col-md-4"> 
		        <div class="thumbnail"> 
		          <img src="${this.lists[index].image}"> 
		          <div class="caption">
		            <h3>${this.lists[index].name}</h3>
		            <a class="btn1 btn-lg btn-primary" 
		            href="#" style="text-decoration: none;" onclick="component.clist()"><i class="large material-icons left">toc</i>MORE INFO</a>
		          </div>
		        </div>
		      </div>
		`;
		}

		
		html+=`
		</div>
		</div>
		</div>

		<!-- END CHARACTER -->












		<!-- START GREAT HOUSES -->

		<div id="great" class="display">
			<aside class="c1">
				<div class="text-vertical-center">
						<a href="#"  style="text-decoration: none" onclick="component.clist()">                       
								<h1 id="foont">GREAT HOUSES</h1>
						</a>
				</div>
			</aside>


			<section id="services">
				<div class="container">
					<div class="row text-center">
	                  <h2 class="light">The Great Houses are the most powerful of the noble houses of the Seven Kingdoms. 
	                  They exercise immense authority and power over their vassals and territories and are answerable only to 
	                  the King of the Andals and the First Men, Lord of the Seven Kingdoms and Protector of the Realm.</h2>
					</div>
				</div>
			</section>


							<!-- HOUSE STARK -->

				          <div class="c2">
				            
				          </div>


                          <div class="card horizontal">
                            <div class="card-image">
                              <div class="card smarl">
                                <img src="img/stark2.png">
                              </div> 
                            </div>

                          <div class="card-stacked">
                            <div class="card-content">
                              <ul>
                                  <li><b> Sigil: </b> A grey direwolf on a white field </li>                                  
                                  <li><b> Words: </b>"Winter is Coming" </li>
                                  <li><b> Titles: </b>Kings in the North</br>
                                                Lords of Winterfell</br>
                                                Lords Paramount of the North 
                                  </li> 
                                  <li><b> Seat: </b>Winterfell</li>               
                              </ul>
                                  <p> <b>House Stark</b> of Winterfell is a Great House of Westeros, ruling over the vast region known as the North and 
                                  the Vale as Kings in the North from their seat in Winterfell, recently retaken by the Starks from House Bolton. 
                                  It is by far one of the oldest lines of Westerosi nobility, claiming a line of descent stretching back over eight 
                                  thousand years. The head of the house is the Lord of Winterfell. Before the Targaryen conquest, the leaders of House 
                                  Stark ruled over the region as the Kings in the North. Jon Snow is the current King in the North and the Vale, 
                                  partially due to the allegiance of Petyr Baelish, the Lord Regent of the Vale, to House Stark. </p> </br>
                                  <p> <b><i>SPOILERS</i></b> Their rule in the North seemingly ended after the events of the Red Wedding when House Frey 
                                  and House Bolton betrayed them, after joining alliance with House Lannister. Roose Bolton personally killed King Robb Stark. 
                                  Both the North and Winterfell were taken over by House Bolton, but their hold was jeopardized when Sansa Stark escaped their 
                                  clutches after learning that her brothers Bran and Rickon Stark were still alive. House Stark were restored to their former stature 
                                  after the Battle of the Bastards albeit at great cost with Rickon's death. Their success in this battle later leads to the resurgence 
                                  of House Stark as the royal family of the North, with its vassals declaring Jon Snow as King in the North. </p>
                          	</div>
		            			<a class="btn1 btn-lg btn-primary" 
		            			href="#" style=" margin-right: auto;   text-decoration: none; " onclick="component.clist()">STARK CHARACTERS</a>
		            			</div>   
							  </div>

							<!-- HOUSE STARK -->

							<br />
							<br />
							<br />

							<!-- HOUSE TARGARYEN -->

				          <div class="c3">
				            
				          </div>

                          <div class="card horizontal">
                            <div class="card-image">
                              <div class="card smarl">
                                <img src="img/fire2.png">
                              </div> 
                            </div>
                          <div class="card-stacked">
                            <div class="card-content">
                              <ul>
                                  <li><b> Sigil: </b> A red three-headed dragon, <br />
                                                      on a black field 
                                  </li>                                  
                                  <li><b> Words: </b>"Fire and Blood"</li>
                                  <li><b> Titles: </b>Queen of the Andals and the First Men (claimant)<br/>
                                                 Lord of the Seven Kingdoms (claimant)<br/>
                                                Protector of the Realm (claimant)<br/>
                                                Queen of Meereen (formerly)</li>
                                  <li><b> Seat: </b>Great Pyramid, Meereen<br/>
                                                    Dragonstone (formerly)<br/>
                                                    Red Keep, King's Landing (formerly) </li>                                                                                    
                              </ul>
                                  <p><b>House Targaryen</b> is a former Great House of Westeros and was the ruling royal House of the Seven Kingdoms for three centuries, 
                                  before it was deposed during Robert's Rebellion and House Baratheon replaced it as the new royal House. The few surviving Targaryens fled into 
                                  exile. Currently based in Essos, House Targaryen seeks to retake the Seven Kingdoms from House Lannister, who formally replaced House Baratheon 
                                  as the royal House following the destruction of the Great Sept of Baelor. </p> </br>
                                  <p>House Targaryen's sigil is a three-headed red dragon on a black background, and their words are "Fire and Blood". </p>
                          </div>
		            			<a class="btn1 btn-lg btn-primary" 
		            			href="#" style=" margin-right: auto; text-decoration: none; " onclick="component.clist()">TARGARYEN CHARACTERS</a>
		            		</div>
		            		</div>
							<!-- HOUSE TARGARYEN -->

							<br />
							<br />
							<br />

							<!-- HOUSE LANNISTER -->


				          <div class="c4">
				            
				          </div>


                          <div class="card horizontal">
                            <div class="card-image">
                              <div class="card smarl">
                                <img src="img/lannister2.png">
                              </div> 
                            </div>
                          <div class="card-stacked">
                            <div class="card-content">
                              <ul>
                                  <li><b> Sigil: </b> A golden lion rampant on a crimson field.</li>                                  
                                  <li><b> Words: </b>"Hear Me Roar!"(official)<br />
                                                      "A Lannister Always Pays His Debts" (common saying)</li>
                                  <li><b> Titles: </b>Queen of the Andals and the First Men<br />
                                                    Protector of the Seven Kingdoms<br />
                                                    Lords of Casterly Rock<br />
                                                    Lords Paramount of the Westerlands<br />
                                                    Wardens of the West<br />
                                                    Kings of the Rock (pre-Wars of Conquest)</li>
                                  <li><b> Seat: </b> Red Keep, King's Landing Casterly Rock (ancestral)</li>
                              </ul>
                                  <p><b>House Lannister </b>of Casterly Rock is one of the Great Houses of Westeros, one of its richest and most powerful 
                                  families and oldest dynasties. It is also the current royal house of the Seven Kingdoms following the extinction of House 
                                  Baratheon of King's Landing. </p> </br>
                                  <p>Their lands are in the far west of the continent. Their seat is Casterly Rock, a massive rocky promontory overlooking the Sunset 
                                  Sea which has had habitations and fortifications built into it over the millennia. They are the Lords Paramount of the Westerlands and 
                                  Wardens of the West. As the new royal house, they also rule directly over the Crownlands from their seat of the Red Keep in King's Landing,
                                  the traditional seat of the royal family. House Lannister's Heraldry consists of a golden lion on a crimson background, and their House words 
                                  are "Hear me roar!", which is rarely mentioned. Their unofficial motto, which is as well known as the official one, is "A Lannister always pays 
                                  his debts" - which is used much more often and mostly in negative context, though it can also be used in the original, literal sense. </p>
                          </div>
		            			<a class="btn1 btn-lg btn-primary" 
		            			href="#" style=" margin-right: auto;   text-decoration: none; " onclick="component.clist()">LANNISTER CHARACTERS</a>
							  </div>
							  </div>


							<!-- HOUSE LANNISTER -->



							<br />
							<br />
							<br />


                            </div>
						  </div>                          
                      	</div>
					  </div>
















        <!-- CHARACTER LIST -->


		<div id="charlist" class="display">

		            <aside id="callout1">
                	<div class="text-vertical-center">
					<h1 class="text-center" >CHARACTERS</h1>
                	</div>
            		</aside>

					<div class="container1" id="adjust">
					<div class="row1">
					<center>
						<div class="col-xs-15 col-md-12">
						<table class="table table-responsive table-hover" id="adjust1">
						<thead>
						<tr>

							<th>Name</th>
							<th>Family</th>
						</tr>
					    </thead>
						<div class="input-group stylish-input-group" id="adjustsearch">
						<input oninput="component.char()" 
						type="text" class="form-control"  placeholder="Search" id="charactersearch">
						<span class="input-group-addon"> 
						</span>
						</div>

						<tbody id="characterlist"></tbody>
						</table>
		</div>
		</div>
		</div>
    	</div>
        <!-- END CHARATER LIST -->













        <!-- START UPDATE-DELETE  -->
        <div id="updatedelete" class="display">

            <div class="container" id="adjust5">
            <div class="row">
            <div id="characterinfo"></div>
            </div>
            </div>

        </div>

        <!-- END UPDATE-DELETE -->














		<!-- START CREATE PAGE -->
        <div id="cr8" class="display">
        <div class="container" id="adjust5">
        <div class="row">
            <div class="col col-sm-12">
                <div id="charatercreate"></div>		
            </div>
        </div>
        </div>
        </div>

        <!-- END CREATE PAGE -->







          <!-- FOOTER -->

            <footer class="page-footer1 teal1">
              <div class="container1">
                <div class="row1">
                  <div class="col1 l61 s121">


                  &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp  
                  <a href="#" onclick="component.land()" >
                    <img border="0" src="img/wolf.png" width="100" height="70" style="margin:25px 5px">
                  </a>
                    <h5 class="white-text2">GAME OF THRONES</h5>
                    <p class="grey-text1 text-lighten-41">A student at AMA Davao Computer College </p>


                  </div>
                  <div class="col1 l31 s121">
                    <h5 class="white-text1">MENU</h5>
                    <ul>
                      <li><a class="white-text1" href="#" onclick="component.land()">HOME</a></li>
                      <li><a class="white-text1" href="#" onclick="component.house()">GREAT HOUSES</a></li>                      
                      <li><a class="white-text1" href="#" onclick="component.clist()">CHARACTER</a></li>
                      <li><a class="white-text1" href="#" onclick="component.create()">CREATE</a></li>
                    </ul>
                  </div>

                   <div class="col1 l31 s121">
                    <h5 class="white-text1 footer-right">CONTACT US</h5>
						<a href="https://www.facebook.com/elvin.francisco.545"><i class="fa fa-facebook fa-4x"></i></a>
						<a href="http://steamcommunity.com/id/POPcola/"><i class="fa fa-steam fa-4x"></i></a>
					 	<a href="https://github.com/Ejaaayy"><i class="fa fa-github fa-4x"></i></a>                    
                  </div>



                </div>
              </div>

              <div class="footer-copyright1">
                <div class="container1">
                 <a class="brown-text1 text-lighten-31" href="https://www.facebook.com/elvin.francisco.545">ELVIN JOHN FRANCISCO</a>
                </div>
              </div>
            </footer>

          <!-- FOOTER -->

		`;
		this.reRender(`${html}`,document.getElementById("app"));	
		this.characterlist();
	}


	land(){
		$('#landingpage').show();
		$('#great').hide();
		$('#charlist').hide();
        $('#updatedelete').hide();
        $('#cr8').hide();
        $('#great').hide();
	}

	house(){
		$('#landingpage').hide();
		$('#great').show();		
		$('#charlist').hide();
        $('#updatedelete').hide();
        $('#cr8').hide();
	}
	clist(){
		$('#landingpage').hide();
		$('#great').hide();		
		$('#charlist').show();
        $('#updatedelete').hide();
        $('#cr8').hide();
	}
    
    deleteupdate(){
		$('#landingpage').hide();
		$('#great').hide();		
		$('#charlist').hide();
        $('#updatedelete').show();
        $('#cr8').hide();
	}
    
    create(){
        $('#landingpage').hide();
		$('#great').hide();        
		$('#charlist').hide();
        $('#updatedelete').hide();
        $('#cr8').show();
        
    }






<!-- CHARACTER LIST-->

    characterlist(){
		let html = "";
		let m = this.lists;
		for(let i=0;i<m.length;i++){
			html += `
				<tr>
					<td>${m[i].name}</td>
					<td>${m[i].family}</td>
					<td><button class="btn btn-primary" id="bn" onclick="component.characterinfo(${i})">INFO</button></td>
				</tr>
			`;
		}
		this.reRender(html,document.getElementById('characterlist'));
	}

<!-- CHARACTER LIST-->
   








<!-- CHARACTER INFOS -->

    characterinfo(key){
		this.reRender(
			`
                    <div id="container">
                    <div id="row">
                    <div id="infodetails">
                    <div class="col-lg-4 col-xs-12" id="adjustDetails">
                    <div class="thumbnail"><img src="${this.lists[key].image}"></div>
                    </div>
                    <div class="col-lg-8 col-xs-12" id="adjustDetails1">
                        <h1 id="slimfont">${this.lists[key].name}</h1>
                        <button class="btn2" onclick="component.updatecharacter(${key})"><i class="medium1 material-icons left">loop</i>UPDATE</button>
                        <button class="btn2" onclick="component.characterdelete(${key})"><i class="medium1 material-icons left">delete sweep</i>DELETE</button>
                        <button class="btn2" onclick="component.clist()"><i class="medium1 material-icons left">reply</i>BACK</button>
                    </div>
                    <div class="col-lg-12 col-xs-12" id="adjust100">
                        <ul class="list-group">
                        <li class="list-group-item"><span class="headername">Description:</span> ${this.lists[key].description}</li>
                        <li class="list-group-item"><span class="headername">Family:</span> ${this.lists[key].family}</li>                                      
                        </ul>
                    </div>
                    </div>
                    </div>
                    </div>
				    	
			`,document.getElementById('characterinfo'));
			this.deleteupdate();
	}

<!-- CHARACTER INFOS -->









<!-- CREATING CHARATER PAGE-->
    
    charatercreate(){
		this.render(
			`
				<h1 class="text-center">CREATE</h1>
				Image: <input class="form-control" id="newImage" type="" placeholder="Enter Image" /><br/>
				Name: <input class="form-control" id="newName" type="" placeholder="Enter Name" /><br/>
				Description: <input class="form-control" id="newDescription" type="" placeholder="Enter Description" /><br/>
                Family: <input class="form-control" id="newFamily" type="" placeholder="Enter Family" /><br/>
				<button class="btn btn-success" onclick="component.createcharacter()">CREATE</button>
			`,document.getElementById('charatercreate'));
	}

    
<!-- CREATING CHARATER PAGE -->







<!-- CREATING CHARACTER -->

    createcharacter(){
		let i = document.getElementById('newImage');
		let n = document.getElementById('newName');
		let d = document.getElementById('newDescription');
        let f = document.getElementById('newFamily');

		let charr = {"image":i.value,
					"name":n.value,
					"description":d.value,
					"family":f.value
					};
		this.lists.push(charr);
	 	this.clist();
		i.value = n.value = d.value = f.value = ''; //Clear Fields
		this.characterlist();
	}
    
<!-- CREATING CHARACTER -->








<!-- UPDATING CHARACTER -->

    characterupdate(key){
		let i = document.getElementById('updateImage');
		let n = document.getElementById('updateName');
		let d = document.getElementById('updateDescription');
        let f = document.getElementById('updateFamily');

		let m = this.lists[key];
		let charr = {"image":i.value,
					"name":n.value,
					"description":d.value,
					"family":f.value};

		this.lists[key] = charr;
		let details = document.getElementById('characterinfo');
		details.innerHTML = "";
		
		this.characterlist();
		this.clist();
	}
   
<!-- UPDATING CHARACTER -->








<!-- CHARACTER UPDATE -->

    updatecharacter(key){
		this.reRender(
			`
                <div class="container" id="adjustDetails200">
                        <h2 class="text-center" id="slimfont">${this.lists[key].name}</h2>
                        Image: <input class="form-control" id="updateImage" type="text" value="${this.lists[key].image}" /><br/>
                        Name: <input class="form-control" id="updateName" type="text" value="${this.lists[key].name}" /><br/>
                        Description: <input class="form-control" id="updateDescription" type="text" value="${this.lists[key].description}" /><br/>
                        Family: <input class="form-control" id="updateFamily" type="text" value="${this.lists[key].family}" /><br/>
                        <button class="btn btn-success" onclick="component.characterupdate(${key})"><i class="medium material-icons left">save</i></button>
                </div>
			`,document.getElementById('infodetails'));
	}
    
<!-- CHARACTER UPDATE -->










<!-- DELETING CHARACTER -->

    characterdelete(key){		
		this.lists.splice(key,1);

		let details = document.getElementById('characterinfo');
		details.innerHTML = "";
		
		this.characterlist();	
		this.clist();
		
	}

<!-- DELETING CHARACTER -->

    






<!-- SEARCH CHARACTER -->

	char(){
		let charactersearch = document.getElementById('charactersearch')
		let characterlist = document.getElementById('characterlist');
		let html = ``;
		    for(let i=0;i<this.lists.length;i++){
		      if(this.lists[i].name.toLowerCase().includes(charactersearch.value)||this.lists[i].family.toLowerCase().includes(charactersearch.value)||this.lists[i].name.toUpperCase().includes(charactersearch.value)||this.lists[i].family.toUpperCase().includes(charactersearch.value)||this.lists[i].name.includes(charactersearch.value)||this.lists[i].name.includes(charactersearch.value)||this.lists[i].family.includes(charactersearch.value)){
		      	html +=`
		          <td>${this.lists[i].name}</td>
		          <td>${this.lists[i].family}</td>
		          <td><button class="btn btn-primary"  onclick="component.characterinfo(${i})">INFO</button></td>
		        </tr>`; 
		      }
		    }
    characterlist.innerHTML = html;
	}

<!-- SEARCH CHARACTER -->
	






}


let component = new Component();
component.x();
component.charatercreate();
