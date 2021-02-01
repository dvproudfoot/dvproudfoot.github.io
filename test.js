define(['pipAPI', 'https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/stiat/qualtrics/qstiat6.js'], function(APIConstructor, stiatExtension){
	
	var API = new APIConstructor();
		  return stiatExtension({
		  category : { 
		    name : 'Creative', //Will appear in the data.
		    title : {
		      media : {word : 'Creative words'}, //Name of the category presented in the task.
		      css : {color:'#31b404','font-size':'2em'}, //Style of the category title.
		      height : 7 //Used to position the "Or" in the combined block.
		    }, 
		    media : [ //Stimuli content as PIP's media objects
    		    	{word : 'Creative'}, 
    			{word : 'Innovative'}, 
    			{word : 'Ingenious'}, 
    			{word : 'Original'}, 
    			{word : 'Inventive'} 
		    ], 
		    //Stimulus css (style)
		    css : {color:'#31b404','font-size':'3em'}
		  },	

  		attribute1 : 
			{
			name : 'Male', //Attribute label
			title : {
				media : {word : 'Male names'}, //Name of the category presented in the task.
				css : {color:'#31b404','font-size':'2em'}, //Style of the category title.
				height : 7 //Used to position the "Or" in the combined block.
			}, 
			media : [ //Stimuli
				{word : 'Ben'}, 
    			        {word : 'Paul'}, 
    			        {word : 'Daniel'}, 
    			        {word : 'John'}, 
    			        {word : 'Jeffrey'}
		    ], 
			//Can change color and size of the targets here.
			css : {color:'#31b404','font-size':'3em'}
			},
		attribute2 : 
			{
			name : 'Female', //Attribute label
			title : {
				media : {word : 'Female names'}, //Name of the category presented in the task.
				css : {color:'#31b404','font-size':'2em'}, //Style of the category title.
				height : 7 //Used to position the "Or" in the combined block.
			}, 
			media : [ //Stimuli
				{word: 'Rebecca'},
				{word: 'Michelle'},
				{word: 'Emily'},
				{word: 'Julia'},
				{word: 'Anna'}
				
			], 
			//Can change color and size of the targets here.
			css : {color:'#31b404','font-size':'3em'}
			},

  base_url : {//Where are your images at?
    image : 'https://baranan.github.io/minno-tasks/images/'
  }}
  );
  });
