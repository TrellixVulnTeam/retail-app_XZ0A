/**
 * Copyright (c) 2014, 2017, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
/*
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
*/
define(["ojs/ojcore","jquery","ojs/ojcomponentcore","ojs/ojcollapsible"],function(a,g){(function(){a.Ra("oj.ojAccordion",g.oj.baseComponent,{widgetEventPrefix:"oj",options:{multiple:!1,expanded:null,beforeExpand:null,expand:null,beforeCollapse:null,collapse:null},_ComponentCreate:function(){this._super();this.element.addClass("oj-accordion oj-component").attr("role","group");this.options.expanded=this.Q6(this.options.expanded);this.Of()},ph:function(a,c,d){this.qh(c,d,{launcher:this.element.find(".oj-collapsible-header-icon").first()})},
_destroy:function(){this.element.removeClass("oj-accordion oj-component").removeAttr("role");this.element.children().removeClass("oj-accordion-collapsible");this.element.children(".oj-accordion-created").removeClass("oj-accordion-created").ojCollapsible("destroy")},_setOption:function(a,c,d){if("multiple"===a)!1==c&&!0==this.options.multiple&&this.element.children(".oj-expanded").first().siblings(".oj-collapsible").ojCollapsible("collapse",!1);else if("expanded"===a){this.KDa(c);return}this._super(a,
c,d)},refresh:function(){this._super();this.Of()},Of:function(){this.gAa();this._setOption("disabled",this.options.disabled);this.C$=!0;this._setOption("expanded",this.options.expanded);this.C$=!1;this.Bn()},gAa:function(){this.element.children(":oj-collapsible").each(function(){g(this).ojCollapsible("option","expandArea","header")});this.pp=this.element.children().not(":oj-ojCollapsible").ojCollapsible({expandArea:"header"}).addClass("oj-accordion-created").end().addClass("oj-accordion-collapsible").attr("data-oj-internal",
!0)},Bn:function(){var a={keydown:this.Tv,ojbeforeexpand:this.rqa,ojexpand:this.Ita,ojbeforecollapse:this.pqa,ojcollapse:this.rra};this._off(this.pp);this._on(this.pp,a)},Tv:function(a){if(!a.altKey&&!a.ctrlKey&&(g(a.target).hasClass("oj-collapsible-header")||g(a.target).hasClass("oj-collapsible-header-icon"))){var c=g.ui.keyCode,d=this.pp.not(".oj-disabled"),e=d.length,f=g(a.target).closest(".oj-collapsible"),h=d.index(f),k=!1;if(0<=h)switch(a.keyCode){case c.RIGHT:case c.DOWN:k=d[(h+1)%e];break;
case c.LEFT:case c.UP:k=d[(h-1+e)%e];break;case c.HOME:k=d[0];break;case c.END:k=d[e-1]}k&&(f&&g(f).trigger("ojfocusout"),g(k).trigger("ojfocus"),a.preventDefault())}},c7:function(a){return!this.options.multiple&&(a=g(a.target).closest(".oj-collapsible"),a.parent().is(":oj-ojAccordion"))?a.siblings(".oj-collapsible.oj-expanded").map(function(){return g(this).data("oj-ojCollapsible")}):g()},rqa:function(a){if(!this.EK(a))return!0;var c,d=this,e;this.c7(a).each(function(){var f=this.element;e=d.hz(f,
g(a.target));f={header:f.find(".oj-collapsible-header"),content:f.find(".oj-collapsible-content")};return c=this._trigger("beforeCollapse",a,f)});e||(e=d.hz(null,g(a.target)));this.options.multiple||this._trigger("beforeExpand",a,e);return c},Ita:function(a,c){if(this.EK(a)&&!this.IS){var d,e=this;this.c7(a).each(function(){this.collapse(!1,a,c);d=e.hz(this.element,g(a.target))});d||(d=e.hz(null,g(a.target)));this.options.multiple||this._trigger("expand",a,d);this.JX()}},pqa:function(a,c){return this.EK(a)&&
!this.options.multiple?this._trigger("beforeCollapse",a,this.j$(a,c)):!0},rra:function(a,c){if(!this.IS&&this.EK(a)){var d=this.j$(a,c);this.options.multiple||this._trigger("collapse",a,d);this.JX()}},hz:function(a,c){return{fromCollapsible:a,toCollapsible:c}},j$:function(a,c){var d;if(c.toCollapsible)d=c;else{if(a.originalEvent&&a.originalEvent.target){var e=g(a.originalEvent.target);e.hasClass("oj-collapsible")&&(d=this.hz(g(a.target),e))}d||(d=this.hz(g(a.target),null))}return d},EK:function(a){return g(a.target).is(this.pp)},
JX:function(){var b,c=[];this.pp.each(function(a){g(this).ojCollapsible("option","expanded")&&(b=g(this).attr("id"),c.push(b?b:a))});a.b.A5(this.options.expanded,c)||this.option("expanded",c,{_context:{kb:!0,Cd:!0}})},Q6:function(a){if(Array.isArray(a)){var c,d=[];this.element.children().each(function(e){(c=g(this).attr("id"))?-1!=a.indexOf(c)?d.push(c):-1!=a.indexOf(e)&&d.push(c):-1!=a.indexOf(e)&&d.push(e)});!this.options.multiple&&1<d.length&&(d=[d[d.length-1]]);return d}return null},KDa:function(b){this.C$||
(b=this.Q6(b));if(b){var c=this,d,e,f,h=0;this.pp.each(function(k){d=g(this);e=d.attr("id");f=!1;e?e==b[h]&&(f=!0):k==b[h]&&(f=!0);f&&h++;d.ojCollapsible("option","expanded")!==f&&(a.t.warn("JET Accordion: override collapsible "+k+" expanded setting"),c.IS=!0,d.ojCollapsible("option","expanded",f),c.IS=!1)})}this.JX()},getNodeBySubId:function(a){if(null==a)return this.element?this.element[0]:null;var c=a.subId;a=a.index;if("number"!==typeof a||0>a||a>=this.pp.length)return null;a=this.pp[a];switch(c){case "oj-accordion-content":c=
"oj-collapsible-content";break;case "oj-accordion-header":c="oj-collapsible-header";break;case "oj-accordion-disclosure":case "oj-accordion-header-icon":c="oj-collapsible-disclosure";break;case "oj-accordion-collapsible":return a;default:return null}return g(a).ojCollapsible("getNodeBySubId",{subId:c})},getSubIdByNode:function(a){for(var c=-1,d=a;d;){c=Array.prototype.indexOf.call(this.pp,d);if(-1!=c)break;d=d.parentElement}d=null;if(-1!=c)switch(a=(a=g(this.pp[c]).ojCollapsible("getSubIdByNode",
a))?a:{},a.subId){case "oj-collapsible-content":d="oj-accordion-content";break;case "oj-collapsible-header":d="oj-accordion-header";break;case "oj-collapsible-disclosure":case "oj-collapsible-header-icon":d="oj-accordion-disclosure";break;default:d="oj-accordion-collapsible"}return d?{subId:d,index:c}:null}})})();a.Components.Xa("ojAccordion","baseComponent",{properties:{expanded:{type:"Array"},multiple:{type:"boolean"}},methods:{refresh:{}},extension:{_widgetName:"ojAccordion"}});a.Components.register("oj-accordion",
a.Components.getMetadata("ojAccordion"))});