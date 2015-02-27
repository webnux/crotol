$.fn.draghover=function(a){return this.each(function(){var c=$(),b=$(this);
b.on("dragenter",function(d){if(c.size()===0){b.trigger("draghoverstart",d)
}c=c.add(d.target)
});
b.on("dragleave drop",function(d){setTimeout(function(){c=c.not(d.target);
if(c.size()===0){b.trigger("draghoverend")
}},1)
})
})
};