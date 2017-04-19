exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('quotes').del()
    .then(function () {
      // Inserts seed entries
      return knex('quotes').insert([
        {
          character_id: 1,
          content: `"Wubba lubba dub-dub!"`,
          soundUrl: "https://d2eopxgp627wep.cloudfront.net/ps/audios/000/000/537/original/woo_vu_luvub_dub_dub.wav"
        },
        {
          character_id: 1,
          content: `"AIDS!"`,
          soundUrl: "https://d2eopxgp627wep.cloudfront.net/ps/audios/000/000/544/original/AIDS!.wav"
        },
        {
          character_id: 1,
          content: `"Ohh yea, you gotta get schwifty."`,
          soundUrl: "https://d2eopxgp627wep.cloudfront.net/ps/audios/000/000/550/original/get_schwifty_in_here.wav"
        },
        {
          character_id: 1,
          content: `"Lick Lick Lick my balls...hahaha yeah!"`,
          soundUrl: "https://d2eopxgp627wep.cloudfront.net/ps/audios/000/000/543/original/lick_my_balls.wav"
        },
        {
          character_id: 1,
          content: `"Riggity Riggity Wrecked Son"`,
          soundUrl: "https://d2eopxgp627wep.cloudfront.net/ps/audios/000/000/533/original/Riggity.wav"
        },
        {
          character_id: 1,
          content: `"Riki Tiki Tavi Biatch"`,
          soundUrl: "https://d2eopxgp627wep.cloudfront.net/ps/audios/000/000/538/original/ricky_ticky_tabby_biatch.wav"
        },
        {
          character_id: 1,
          content: `"Yes! F**k you god! Not today, bitch!"`,
          soundUrl: "https://d2eopxgp627wep.cloudfront.net/ps/audios/000/000/749/original/yes_fuck_you_god_not_today_bitch.wav"
        },
        {
          character_id: 1,
          content: `"And that's the way the news goes"`,
          soundUrl: "https://d2eopxgp627wep.cloudfront.net/ps/audios/000/000/539/original/And_that's_the_way_news_goes.wav"
        },
        {
          character_id: 1,
          content: `"And that's why I always say shum shum shlippity dub"`,
          soundUrl: "https://d2eopxgp627wep.cloudfront.net/ps/audios/000/000/541/original/And_that's_why_I_always_say.wav"
        },
        {
          character_id: 1,
          content: `"A long time ago..."`,
          soundUrl: "https://d2eopxgp627wep.cloudfront.net/ps/audios/000/000/737/original/along.mp3"
        },
        {
          character_id: 1,
          content: `"Concentrate and turn into a car...nevermind here's a taxi"`,
          soundUrl: "https://d2eopxgp627wep.cloudfront.net/ps/audios/000/000/740/original/concentrate.mp3"
        },
        {
          character_id: 1,
          content: `"Rick on Love..."`,
          soundUrl: "https://d2eopxgp627wep.cloudfront.net/ps/audios/000/001/087/original/youtube.mp3"
        },
        {
          character_id: 1,
          content: `"Rick on Wall Street..."`,
          soundUrl: "https://d2eopxgp627wep.cloudfront.net/ps/audios/000/001/053/original/youtube.mp3"
        },
        // {
        //   character_id: 1,
        //   content: `"I'm sorry, Morty. It's a bummer. In reality you're as dumb as they come."`,
        //   soundUrl: "./css/soundclips/"
        // },
        // {
        //   character_id: 1,
        //   content: `"There is no god, Summer; gotta rip that band-aid off now you'll thank me later."`,
        //   soundUrl: "./css/soundclips/"
        // },
        // {
        //   character_id: 1,
        //   content: `"GRAAAAAASSSSSSS.... tastes bad."`,
        //   soundUrl: "./css/soundclips/"
        // },
        // {
        //   character_id: 1,
        //   content: `"It's like the N word and the C word had a baby, and it was raised by all the bad words for Jews."`,
        //   soundUrl: "./css/soundclips/"
        // },
        {
          character_id: 2,
          content: `"I squanch my family"`,
          soundUrl: "./css/soundclips/Beth_I_squanch_my_family.wav"
        },
        {
          character_id: 2,
          content: `"I'm going out..."`,
          soundUrl: "./css/soundclips/Beth_im_going_out.wav"
        },
        {
          character_id: 2,
          content: `"Why expend the effort?"`,
          soundUrl: "./css/soundclips/Beth_why_expend_the effort.wav"
        },
        // {
        //   character_id: 3,
        //   content: `"Have you ever tried to relax? It's a paradox."`,
        //   soundUrl: "./css/soundclips/"
        // },
        // {
        //   character_id: 3,
        //   content: `"Nobody's killing me until after I catch my wife with another man."`,
        //   soundUrl: "./css/soundclips/"
        // },
        // {
        //   character_id: 3,
        //   content: `"God? God's turning people into insect monsters Beth. I'm the one beating them to death. Thank me."`,
        //   soundUrl: "./css/soundclips/"
        // },
        {
          character_id: 3,
          content: `"What a family..."`,
          soundUrl: "./css/soundclips/Jerry_What_a_family.wav"
        },
        {
          character_id: 3,
          content: `"Life is effort and I'll stop when I die"`,
          soundUrl: "./css/soundclips/Jerry_Life_is_effort_and_Ill_stop_when_I_die.wav"
        },
        {
          character_id: 4,
          content: `"Oh man"`,
          soundUrl: "https://d2eopxgp627wep.cloudfront.net/ps/audios/000/000/553/original/oh_man.wav"
        },
        {
          character_id: 4,
          content: `"Nobody exists on purpose... Come watch TV?"`,
          soundUrl: "https://d2eopxgp627wep.cloudfront.net/ps/audios/000/000/797/original/youtube.mp3"
        },
        {
          character_id: 4,
          content: `"Ohhhhh yeaaaahhhh"`,
          soundUrl: "https://d2eopxgp627wep.cloudfront.net/ps/audios/000/000/716/original/oh_yeahh.wav"
        },
        {
          character_id: 4,
          content: `"Oh my god?!"`,
          soundUrl: "https://d2eopxgp627wep.cloudfront.net/ps/audios/000/000/739/original/ohmygod.mp3"
        },
        {
          character_id: 4,
          content: `"What?!"`,
          soundUrl: "https://d2eopxgp627wep.cloudfront.net/ps/audios/000/000/738/original/what_.mp3"
        },
        {
          character_id: 4,
          content: `"Help!!!"`,
          soundUrl: "https://d2eopxgp627wep.cloudfront.net/ps/audios/000/000/557/original/Help!.wav"
        },
        {
          character_id: 4,
          content: `"Hey ya you doing ok?"`,
          soundUrl: "https://d2eopxgp627wep.cloudfront.net/ps/audios/000/000/556/original/hey_ya_you_doing_ok_.wav"
        },
        {
          character_id: 4,
          content: `"Praise the one true Morty"`,
          soundUrl: "https://d2eopxgp627wep.cloudfront.net/ps/audios/000/000/558/original/Praise_the_one_true_morty.wav"
        },
        {
          character_id: 4,
          content: `"You can't go out there because air is poisonous"`,
          soundUrl: "https://d2eopxgp627wep.cloudfront.net/ps/audios/000/000/554/original/you_can't_go_out_there.wav"
        },
        {
          character_id: 4,
          content: `"Oieeeeeee!"`,
          soundUrl: "https://d2eopxgp627wep.cloudfront.net/ps/audios/000/001/266/original/owee_%281%29.wav"
        },
        {
          character_id: 4,
          content: `"For real times a million buddy"`,
          soundUrl: "https://d2eopxgp627wep.cloudfront.net/ps/audios/000/000/555/original/for_real_times.wav"
        },
        {
          character_id: 4,
          content: `"Listen up, my name is morty smith from earth dimension c137."`,
          soundUrl: "https://d2eopxgp627wep.cloudfront.net/ps/audios/000/000/559/original/my_name_is_morty_smith.wav"
        },
        // {
        //   character_id: 4,
        //   content: `"You're missing the point, Dad... I don't want girls. I want Jessica!"`,
        //   soundUrl: "./css/soundclips/"
        // },
        // {
        //   character_id: 4,
        //   content: `"Don't even trip about your pants, dawg. We got an extra pair right here."`,
        //   soundUrl: "./css/soundclips/"
        // },
        // {
        //   character_id: 4,
        //   content: `"You're like Hitler, except...Hitler cared about Germany, or something"`,
        //   soundUrl: "./css/soundclips/"
        // },
        {
          character_id: 5,
          content: `"Let's make an intergenerational sandwich."`,
          soundUrl: "https://d2eopxgp627wep.cloudfront.net/ps/audios/000/000/549/original/Come_on_old_man.wav"
        },
        {
          character_id: 5,
          content: `"My choice is to: say nothing, be sarcastic, or bark 'yes' like a trained animal. It's not a conversation; you're holding me verbally hostage."`,
          soundUrl: "./css/soundclips/Summer_youre_holding_me_verbally_hostage.wav"
        },
        {
          character_id: 5,
          content: `"That's an intense line of questing, Snuffles"`,
          soundUrl: "./css/soundclips/Summer_thats_an_intense_line_of_questioning_snuffles.wav"
        },
        // {
        //   character_id: 5,
        //   content: `"God, Grandpa, you're such a dick."`,
        //   soundUrl: "./css/soundclips/"
        // },
        {
          character_id: 6,
          content: `"Squanchin party bro!"`,
          soundUrl: "./css/soundclips/Squanchy_squanching_party_bro.wav"
        },
        {
          character_id: 6,
          content: `"Hey, I'm Squanchin in here!"`,
          soundUrl: "./css/soundclips/Squanchy_im_squanchin_in_here.wav"
        },
        {
          character_id: 7,
          content: `"HI! I'M MR MEESEEKS! LOOK AT ME!"`,
          soundUrl: "https://d2eopxgp627wep.cloudfront.net/ps/audios/000/000/548/original/Hi_I'm_mr_meeseeks_look_at_me.wav"
        },
        {
          character_id: 7,
          content: `"Oooo Yeah Caaan Dooo!"`,
          soundUrl: "https://d2eopxgp627wep.cloudfront.net/ps/audios/000/000/547/original/Oooo_yeah__caaan_doo!.wav"
        },
        {
          character_id: 7,
          content: `"Is he keeping his shoulders square?" "Oooooooh he's tryin'!"`,
          soundUrl: "./css/soundclips/Mr_Meeseeks_can_you_help_me_get_two_strokes_off_of_jerrys_golf_game.wav"
        },
        {
          character_id: 7,
          content: `"Existence is pain to a meeseeks Jerry, and we will do anything to alleviate that pain."`,
          soundUrl: "./css/soundclips/Mr_Meseeks_Existence_is_pain_to_a_Meeseeks.wav"
        },
        {
          character_id: 7,
          content: `"I JUST WANNA DIE!"`,
          soundUrl: "./css/soundclips/Mr_Meeseeks_i_just_wanna_die.wav"
        },
        {
          character_id: 7,
          content: `"None of us can die until our job is done!"`,
          soundUrl: "./css/soundclips/Mr_Meeseeks_none_of_us_can_die_until_our_job_is_done.wav"
        },
        {
          character_id: 7,
          content: `"Ooohh! We're well past that Jerry!"`,
          soundUrl: "./css/soundclips/Meeseeks_oh_were_well_pass_that_jerry.wav"
        },
        {
          character_id: 8,
          content: `"In bird culture, this is considered a dick move."`,
          soundUrl: "https://d2eopxgp627wep.cloudfront.net/ps/audios/000/000/681/original/In_bird_culture__this_is_considered.wav"
        },
        {
          character_id: 8,
          content: `"Morty, do you know what "wubba lubba dub dub" means? It's not nonsense at all. In my people's tongue, it means, "I am in great pain. Please help me.""`,
          soundUrl: "./css/soundclips/Birdperson_My_people_have_another_saying.wav"
        },
        {
          character_id: 8,
          content: `"My people have another saying. "Gubba nub nub do ra ka." It means, "Whatever lets you sleep at night.""`,
          soundUrl: "./css/soundclips/Birdperson_My_people_have_another_saying.wav"
        },
        {
          character_id: 8,
          content: `"Tammy, I was approaching infertility..."`,
          soundUrl: "./css/soundclips/Birdperson_tammy_I_was_approaching_infertility.wav"
        },
        {
          character_id: 8,
          content: `"Rick is in deep pain..."`,
          soundUrl: "./css/soundclips/Birdperson_Deep_Pain.wav"
        },
        {
          character_id: 8,
          content: `"In bird culture..."`,
          soundUrl: "./css/soundclips/Birdperson_in_bird_culture.wav"
        },
        {
          character_id: 9,
          content: `"Brad is here, quick make my hair look drunk!"`,
          soundUrl: "../css/soundclips/Tammy_Quick_make_my_hair_look_drunk.wav"
        },
        {
          character_id: 9,
          content: `"Birdperson, you are my seed..."`,
          soundUrl: "../css/soundclips/Tammy_birdperson_you_are_my_seed.wav"
        },
        {
          character_id: 9,
          content: `"You know what this human eats? Bird Di**!"`,
          soundUrl: "https://d2eopxgp627wep.cloudfront.net/ps/audios/000/000/647/original/you_know_what_this_human_eats.wav"
        },
        {
          character_id: 10,
          content: `"Detective, I'm... This is upsetting to me because I feel like I don't need no Regular Leg partner."`,
          soundUrl: "../css/soundclips/Baby_legs_i_dont_need_no_regular_legs.wav"
        },
        {
          character_id: 10,
          content: `"I'm a good detective!"`,
          soundUrl: "../css/soundclips/Baby_legs_im_a_good_detective.wav"
        },
        {
          character_id: 10,
          content: `"Baby Legs Running..."`,
          soundUrl: "./css/soundclips/Baby_legs_running.wav"
        },
        {
          character_id: 11,
          content: `"Oo-wee! I'm Hungry"`,
          soundUrl: "./css/soundclips/Mr_Poopy_Butthole_Hungry.wav"
        },
        {
          character_id: 11,
          content: `"Just like the Hulk Musical..."`,
          soundUrl: "./css/soundclips/Mr_Poopy_Butthole_Hulk_Musical.wav"
        },
        {
          character_id: 11,
          content: `"Oo-wee! Whatever you want Rick!"`,
          soundUrl: "./css/soundclips/Mr_Poopy_Butthole_whatever_you_want_rick.wav"
        },
        {
          character_id: 11,
          content: `"You're not in any of my photos..."`,
          soundUrl: "./css/soundclips/Mr_Poopy_Butthole_youre_not_in_any_of_my_photos.wav"
        },
        {
          character_id: 12,
          content: `"I'm Ants in my Eyes Johnson, everything's black, I can't see a thing..."`,
          soundUrl: "./css/soundclips/Ants_in_my_Eyes_Johnson_i_cant_see_anything.wav"
        },
        {
          character_id: 12,
          content: `"I also can't feel anything either!"`,
          soundUrl: "./css/soundclips/Ants_in_my_Eyes_Johnson_i_cant_feel_anything.wav"
        },
        {
          character_id: 13,
          content: `"I'm half Abraham Lincoln soooo..."`,
          soundUrl: "./css/soundclips/Abradolf_Lincler_im_half_abraham_lincoln_soooo.wav"
        },
        {
          character_id: 13,
          content: `"I have no qualm with you boy..."`,
          soundUrl: "./css/soundclips/Abradolf_Lincler_i_have_no_qualm_with_you_boy.wav"
        },
        {
          character_id: 13,
          content: `"Rick! You brought me into this world..."`,
          soundUrl: "./css/soundclips/Abradolf_Lincler_you_brought_me_into_this_world.wav"
        },
        // {
        //   character_id: 13,
        //   content: `"Prepare to be emancipated from your own inferior genes!"`,
        //   soundUrl: "./css/soundclips/"
        // },
        {
          character_id: 14,
          content: `"Check it out! Tammy is already drunk, cool!"`,
          soundUrl: "./css/soundclips/Brad_check_it_out_tammy_is_already_drunk_cool.wav"
        },
        {
          character_id: 14,
          content: `"I throw balls far. You want good words? Date a languager."`,
          soundUrl: "./css/soundclips/Brad_I_throw_balls_far.wav"
        },
        {
          character_id: 14,
          content: `"WHAT DO I KNOW?!?"`,
          soundUrl: "./css/soundclips/Brad_that_the_third_reich_will_reign_for_a_1000_years.wav"
        },
        {
          character_id: 14,
          content: `"Dude,stay in your league..."`,
          soundUrl: "./css/soundclips/Brad_dude_stay_in_your_league.wav"
        },
        {
          character_id: 14,
          content: `"Were you about to talk to her?"`,
          soundUrl: "./css/soundclips/Brad_were_u_about_to_talk_to_her.wav"
        },
        // {
        //   character_id: 15,
        //   content: `"You got to be careful Morty, If that guy catches you with a box of his Eyeholes, he come bursting in through a window and just starts kicking the shit out of you. But it's worth the risk. They melt in your mouth."`,
        //   soundUrl: "./css/soundclips/"
        // },
        // {
        //   character_id: 16,
        //   content: `"I hate Mumumanunzdays. And I really could go for some enchiladas!"`,
        //   soundUrl: "./css/soundclips/"
        // },
        {
          character_id: 16,
          content: `"You dumb, stupid, weak, pathetic, white, white uh-uhh guilt white-guilt, milquetoast piece of human garbage."`,
          soundUrl: "https://d2eopxgp627wep.cloudfront.net/ps/audios/000/000/568/original/It's_gazorpazorpfield.wav"
        },
        // {
        //   character_id: 16,
        //   content: `" I don't give a fuck! I'm Gazorpazorp-fucking-field, bitch. Now gimme my fucking enchiladas."`,
        //   soundUrl: "./css/soundclips/"
        // },
        {
          character_id: 17,
          content: `"Principal Vagina here. Don’t let the name fool you — I’m very much in charge."`,
          soundUrl: "./css/soundclips/Principal_Vagina_dont_let_the_name_fool_you_im_very_much_in_charge.wav"
        },
        // {
        //   character_id: 17,
        //   content: `"...and there's NO EVIDENCE that a Latino student did it."`,
        //   soundUrl: "./css/soundclips/"
        // },
        // {
        //   character_id: 17,
        //   content: `"Hi! Principal Vagina: the name's real, possibly Scandinavian."`,
        //   soundUrl: "./css/soundclips/"
        // },
        {
          character_id: 17,
          content: `"Principal Vagina, no relation..."`,
          soundUrl: "./css/soundclips/Principal_Vagina_no_relation.wav"
        },
        {
          character_id: 18,
          content: `"You can run but you can't hide, bitch!"`,
          soundUrl: "./css/soundclips/ScaryTerry_im_scary_terry_you_can_run_but_you_cant_hide_bitch.wav"
        },
        // {
        //   character_id: 18,
        //   content: `"THIS IS BECAUSE YOU GIVE MORTY SMITH BAD GRADES, BITCH!"`,
        //   soundUrl: "./css/soundclips/"
        // },
        // {
        //   character_id: 18,
        //    content: `"These 2 halves don't belong together, bitch!"`,
        //    soundUrl: "./css/soundclips/"
        // },
        {
          character_id: 18,
           content: `"Awww Bitch"`,
           soundUrl: "https://d2eopxgp627wep.cloudfront.net/ps/audios/000/000/536/original/Awww_Bitch.wav"
        },
        {
          character_id: 18,
           content: `"Welcome, to your nightmare, BITCH!"`,
           soundUrl: "./css/soundclips/ScaryTerry_welcome_to_your_nightmare_bitch.wav"
        },
        {
          character_id: 18,
           content: `"You're home early..."`,
           soundUrl: "./css/soundclips/ScaryTerry_You're_home_early.wav"
        },
        // {
        //   character_id: 19,
        //   content: `"Now look, we're going to be dealing with some real serious stuff today. If you haven't heard of it it's called math! And without it, none of us would even exist."`,
        //   soundUrl: "./css/soundclips/"
        // },
        // {
        //   character_id: 19,
        //   content: `"5 more minute of this and I'm going to get mad!"`,
        //   soundUrl: "./css/soundclips/"
        // },
        // {
        //   character_id: 19,
        //   content: `"Nice, Mrs Pancakes. Real nice."`,
        //   soundUrl: "./css/soundclips/"
        // },
        // {
        //   character_id: 19,
        //   content: `"...not MY fault this is happening."`,
        //   soundUrl: "./css/soundclips/"
        // },
        // {
        //   character_id: 19,
        //   content: `"Oh my god, how could I not see this coming? My lust, *sob* my greed!"`,
        //   soundUrl: "./css/soundclips/"
        // },
        {
          character_id: 20,
          content: `"Where are my testicles, Summer? Where have they gone?"`,
          soundUrl: "./css/soundclips/Snuffles_where_are_my_testicles_summer_where_have_they_gone.wav"
        },
        {
          character_id: 20,
          content: `"We are not them, we are not them..."`,
          soundUrl: "./css/soundclips/Snuffles_We_are_not_them.wav"
        },
        {
          character_id: 20,
          content: `"Tell me Summer..."`,
          soundUrl: "./css/soundclips/Snuffles_tell_me_summer.wav"
        },
        {
          character_id: 20,
          content: `"Anything for my precious Morty..."`,
          soundUrl: "./css/soundclips/Snuffles_anything_for_my_precious_morty.wav"
        },
        {
          character_id: 20,
          content: `"DO NOT CALL ME THAT! Snuffles was my slave name..."`,
          soundUrl: "./css/soundclips/Snuffles_do_not_call_me_that_name_snuffles_was_my_slave_name.wav"
        },
        // {
        //   character_id: 20,
        //   content: `"Hello Jerry, come to rub my face in urine again?"`,
        //   soundUrl: "./css/soundclips/"
        // },
        // {
        //   character_id: 20,
        //   content: `"Snuffles want to be understood. Snuffles need to be understood."`,
        //   soundUrl: "./css/soundclips/"
        // },
        // {
        //   character_id: 21,
        //   content: `"I think you should put down the gun and we should get you to a doctor. What do you say we take down these blast shields?"`,
        //   soundUrl: "./css/soundclips/"
        // },
        // {
        //   character_id: 21,
        //   content: `"We're trying to sleep!"`,
        //   soundUrl: "./css/soundclips/"
        // },
        // {
        //   character_id: 22,
        //   content: `"I was Zuckerberging people before Zuckerberg's balls dropped. I'm the Devil, biatch! WHAT WHAT?!"`,
        //   soundUrl: "./css/soundclips/"
        // },
        // {
        //   character_id: 22,
        //   content: `"A price for everything"`,
        //   soundUrl: "./css/soundclips/"
        // },
        // {
        //   character_id: 22,
        //   content: `"I'm the Devil, what should I do when I fail? Give myself an ice cream?"`,
        //   soundUrl: "./css/soundclips/"
        // },
        {
          character_id: 23,
          content: `"Tiny Rick!"`,
          soundUrl: "https://d2eopxgp627wep.cloudfront.net/ps/audios/000/000/848/original/rick.wav"
        },
        {
          character_id: 23,
          content: `"Let me out!"`,
          soundUrl: "https://d2eopxgp627wep.cloudfront.net/ps/audios/000/000/847/original/let_me_out_.wav"
        },
        // {
        //   character_id: 24,
        //   content: `"Last bite. Mm. Oh, now they're resting comfortably in my stomach. Ooh, am I feeling good..."`,
        //   soundUrl: "./css/soundclips/"
        // },
        // {
        //   character_id: 24,
        //   content: `"No! Get away from me! Get away from me, there's no more Strawberry Smiggles— NAOHH!!"`,
        //   soundUrl: "./css/soundclips/"
        // },
        // {
        //   character_id: 24,
        //   content: `"Jesus Christ! Jesus Christ!! It hurts! My entrails are out!! Why would you even want to eat these?! Th-they're soaked with my stomach acid! "`,
        //   soundUrl: "./css/soundclips/"
        // },
        // {
        //   character_id: 24,
        //   content: `"Oh, Jesus Christ! Lord, savior and-and spirit, save me! Take me to the light!"`,
        //   soundUrl: "./css/soundclips/"
        // },
        // {
        //   character_id: 24,
        //   content: `"Oh my God, I see demons! I see demons are coming!"`,
        //   soundUrl: "./css/soundclips/"
        // },
        {
          character_id: 25,
          content: `"Show me what you got"`,
          soundUrl: "https://d2eopxgp627wep.cloudfront.net/ps/audios/000/000/710/original/Show_me_what_you_got!.wav"
        },
        {
          character_id: 25,
          content: `"I like what you got"`,
          soundUrl: "https://d2eopxgp627wep.cloudfront.net/ps/audios/000/000/706/original/I_like_what_you_got.wav"
        },
        {
          character_id: 25,
          content: `"Good Job"`,
          soundUrl: "https://d2eopxgp627wep.cloudfront.net/ps/audios/000/000/707/original/Good_Job!.wav"
        },
        {
          character_id: 25,
          content: `"Disqualified"`,
          soundUrl: "https://d2eopxgp627wep.cloudfront.net/ps/audios/000/000/708/original/Disqualified_version1.wav"
        },
        // {
        //   character_id: 26,
        //   content: `"I'm the god dammed President of the United fucking States! "`,
        //   soundUrl: "./css/soundclips/"
        // },
        {
          character_id: 26,
          content: `"Raise the posterior!"`,
          soundUrl: "https://d2eopxgp627wep.cloudfront.net/ps/audios/000/000/717/original/obama.wav"
        },
        // {
        //   character_id: 27,
        //   content: `"Annie"`,
        //   soundUrl: "./css/soundclips/"
        // },
        // {
        //   character_id: 28,
        //   content: `"Leonard Smith"`,
        //   soundUrl: "./css/soundclips/"
        // },
        // {
        //   character_id: 29,
        //   content: `"Joyce Smith"`,
        //   soundUrl: "./css/soundclips/"
        // },
        {
          character_id: 30,
          content: `"What's Up Morty?"`,
          soundUrl: "./css/soundclips/Jessica_whats_up_morty.wav"
        },
        // {
        //   character_id: 31,
        //   content: `"Arthricia"`,
        //   soundUrl: "./css/soundclips/"
        // },
        // {
        //   character_id: 32,
        //   content: `"Blim Blam"`,
        //   soundUrl: "./css/soundclips/"
        // },
        // {
        //   character_id: 33,
        //   content: `"Like we say in Brooklyn...we're walkin' here!"`,
        //   soundUrl: "./css/soundclips/"
        // },
        // {
        //   character_id: 34,
        //   content: `"Oh, this is going to be such a mindf**k!"`,
        //   soundUrl: "./css/soundclips/"
        // },
        // {
        //   character_id: 35,
        //   content: `"There's nothing more noble or free than the heart of a horse"`,
        //   soundUrl: "./css/soundclips/"
        // },
        // {
        //   character_id: 36,
        //   content: `"Dr. Xenon Bloom"`,
        //   soundUrl: "./css/soundclips/"
        // },
        // {
        //   character_id: 37,
        //   content: `"Ethan"`,
        //   soundUrl: "./css/soundclips/"
        // },
        // {
        //   character_id: 38,
        //   content: `"Fart"`,
        //   soundUrl: "./css/soundclips/"
        // },
        // {
        //   character_id: 39,
        //   content: `"General Nathan"`,
        //   soundUrl: "./css/soundclips/"
        // },
        // {
        //   character_id: 40,
        //   content: `"My story begins at the dawn of time in the far away realm of Alphabetrium!"`,
        //   soundUrl: "./css/soundclips/"
        // },
        // {
        //   character_id: 41,
        //   content: `"Jon"`,
        //   soundUrl: "./css/soundclips/"
        // },
        // {
        //   character_id: 42,
        //   content: `"Is it important we know who Jan Michael Vincent was in order to get this?” —Morty to Rick`,
        //   soundUrl: "./css/soundclips/"
        // },
        // {
        //   character_id: 43,
        //   content: `"Pluto's a fucking planet, BITCH!"`,
        //   soundUrl: "./css/soundclips/"
        // },
        // {
        //   character_id: 44,
        //   content: `"Just let this happen..."`,
        //   soundUrl: "./css/soundclips/"
        // },
        // {
        //   character_id: 45,
        //   content: `"I'm very discreet. I have no code of ethics. I will kill anyone, anywhere. Children, animals, old people, doesn't matter. I just love killing."`,
        //   soundUrl: "./css/soundclips/"
        // },
        // {
        //   character_id: 46,
        //   content: `"Lucy"`,
        //   soundUrl: "./css/soundclips/"
        // },
        // {
        //   character_id: 47,
        //   content: `"You don't know me!"`,
        //   soundUrl: "./css/soundclips/"
        // },
        // {
        //   character_id: 48,
        //   content: `"Oh no, he just got ran over and chewed up by the tires..."`,
        //   soundUrl: "./css/soundclips/"
        // },
        // {
        //   character_id: 49,
        //   content: `"Calling me Gearhead is like calling a Chinese person Asia face!"`,
        //   soundUrl: "./css/soundclips/"
        // },
        // {
        //   character_id: 50,
        //   content: `"I'm not going to tell you these coins will increase in value, or even hold their current value. The truth is, you bought 'em because you like 'em. They have value to you. That's what matters."`,
        //   soundUrl: "./css/soundclips/"
        // },
        // {
        //   character_id: 51,
        //   content: `"Stealy"`,
        //   soundUrl: "./css/soundclips/"
        // },
        // {
        //   character_id: 52,
        //   content: `"Unity"`,
        //   soundUrl: "./css/soundclips/"
        // },
        // {
        //   character_id: 53,
        //   content: `"Eek barba durkel, somebody's gonna get laid in college."`,
        //   soundUrl: "./css/soundclips/"
        // },
      ]);
    });
};


//Eek barba durkel, somebody's gonna get laid in college.” —Zeep responds to Rick's allegations that his Miniverse is slavery

// I'm not going to tell you these coins will increase in value, or even hold their current value. The truth is, you bought 'em because you like 'em. They have value to you. That's what matters.” —Doofus Rick to Jerry

// Calling me Gearhead is like calling a Chinese person Asia face!” —Gearhead

// Oh no, he just got ran over and chewed up by the tires...” —Randy Dicknose

// I was Zuckerberging people before Zuckerberg's balls dropped. I'm the Devil, biatch! WHAT WHAT?! - Mr. Needful

// You don't know me!” —Mrs. Pancakes' catchphrase

// I'm very discreet. I have no code of ethics. I will kill anyone, anywhere. Children, animals, old people, doesn't matter. I just love killing.” —Krombopulos Michael

// Just let this happen...” —King Jellybean

// Pluto's a fucking planet, BITCH!” —King Flippy Nips

// Is it important we know who Jan Michael Vincent was in order to get this?” —Morty to Rick

//My story begins at the dawn of time in the far away realm of Alphabetrium!” —Ice-T reveals himself

// There's nothing more noble or free than the heart of a horse” —Davin

// Oh, this is going to be such a mindf**k!” —Prince Nebulon

// "Like we say in Brooklyn...we're walkin' here!” —Cousin Nicky

// My man:  https://d2eopxgp627wep.cloudfront.net/ps/audios/000/000/551/original/my_man.wav
