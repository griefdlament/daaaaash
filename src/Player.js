var Player = cc.Sprite.extend({
	ctor: function(){
		this.started = false;
		this._super();
		this.initWithFile('res/images/player.png');

		this.speed = 3;
		this.acceleration = 0.1;
	},

	animation: function(){
		var animation = new cc.Animation.create();
		animation.addSpriteFrameWithFile('res/images/player.png');
		//
		//
		animation.setDelayPerUnit(0.3);
		return cc.RepeatForever.create(cc.Animate.create(animation));
	},

	update: function(){
		if(this.started == true){
		var pos = this.getPosition();
			handleStart(pos);
		}
	},
	
	handleStart: function(pos){
		this.setPosition(cc.p(pos.x, pos.y + this.speed));
		this.speed += this.acceleration;
	},

	stop: function(){
		this.started = false;
	},

	start: function(){
		this.started = true;
	}
});