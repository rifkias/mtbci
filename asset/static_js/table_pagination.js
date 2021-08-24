   /*!
 * jQuery fancyTable plugin
 * https://github.com/myspace-nu
 *
 * Copyright 2018 Johan Johansson
 * Released under the MIT license
 */
   let fancyTableInstance = null;
   (function($) {
       $.fn.fancyTable = function(options) {
           var settings = $.extend({
               inputStyle: "",
               inputPlaceholder: "Search Your Shares",
               pagination: false,
               pagClosest: 3,
               perPage: 5,
               sortable: true,
               searchable: false,
               onInit: function(){ },
               onUpdate: function(){ },
                 testing: false
           }, options);
           var instance = this;
           fancyTableInstance = this;
           this.settings = settings;
           this.tableUpdate = function (elm) {
               elm.fancyTable.matches = 0;
               $(elm).find("tbody tr").each(function() {
                   var n=0;
                   var match = true;
                   var globalMatch = false;
                   $(this).find("td").each(function() {
                       if(!settings.globalSearch && elm.fancyTable.searchArr[n] && !(new RegExp(elm.fancyTable.searchArr[n],"i").test($(this).html()))){
                           match = false;
                       } else if(settings.globalSearch && (!elm.fancyTable.search || (new RegExp(elm.fancyTable.search,"i").test($(this).html())))){
                           if(!Array.isArray(settings.globalSearchExcludeColumns) || !settings.globalSearchExcludeColumns.includes(n+1)){
                               globalMatch = true;
                           }
                       }
                       n++;
                   });
                   if((settings.globalSearch && globalMatch) || (!settings.globalSearch && match)){
                       elm.fancyTable.matches++
                       if(!settings.pagination || (elm.fancyTable.matches>(elm.fancyTable.perPage*(elm.fancyTable.page-1)) && elm.fancyTable.matches<=(elm.fancyTable.perPage*elm.fancyTable.page))){
                           $(this).show();
                       } else {
                           $(this).hide();
                       }
                   } else {
                       $(this).hide();
                   }
               });
               elm.fancyTable.pages = Math.ceil(elm.fancyTable.matches/elm.fancyTable.perPage);
               if(settings.pagination){
                   var paginationElement = (elm.fancyTable.paginationElement) ? $(elm.fancyTable.paginationElement) : $(elm).find(".pag");
                   paginationElement.empty();

                   if(elm.id == "myTable1")
                   {
                           $(".spread-table-pag .arrow-pag").css("cursor","pointer").off().on('click',function(e){
                                 elm = document.getElementById('myTable1');
                               if(elm.fancyTable.page > 4 ){
                                   $(".pag-arrow-next-1, .pag-arrow-last-1").addClass('disabled');
                                   $(".pag-arrow-prev-1, .pag-arrow-first-1").hasClass('disabled') && $(".pag-arrow-prev-1, .pag-arrow-first-1").removeClass('disabled');
                               }
                               else if (elm.fancyTable.page === 2){
                                   $(".pag-arrow-prev-1, .pag-arrow-first-1").addClass('disabled');
                                   $(".pag-arrow-next-1, .pag-arrow-last-1").hasClass('disabled') && $(".pag-arrow-next-1, .pag-arrow-last-1").removeClass('disabled');
                               }
                               else{
                                   $(".arrow-page-mix-1").removeClass('disabled');
                               }

                               if($(this).is($(".pag-arrow-next-1"))){
                                   elm.fancyTable.page = elm.fancyTable.page + 1;
                                   $(".pag-arrow-prev-1, .pag-arrow-first-1").hasClass('disabled') && $(".pag-arrow-prev-1, .pag-arrow-first-1").removeClass('disabled');
                               }

                               else if($(this).is($(".pag-arrow-first-1"))){
                                   elm.fancyTable.page = 1;
                                   $(".pag-arrow-next-1, .pag-arrow-last-1").removeClass('disabled');
                                   $(".pag-arrow-prev-1, .pag-arrow-first-1").addClass('disabled');
                               }
                               else if($(this).is($(".pag-arrow-last-1"))){
                                   elm.fancyTable.page = 6;
                                   $(".pag-arrow-prev-1, .pag-arrow-first-1").removeClass('disabled');
                                   $(".pag-arrow-next-1, .pag-arrow-last-1").addClass('disabled');
                               }
                               else{
                                   elm.fancyTable.page = elm.fancyTable.page - 1;
                               }
                                instance.tableUpdate(elm);
                           });
                           }
                   else
                       {
                           $(".spread-table-pag-2 .arrow-pag").css("cursor","pointer").off().on('click',function(e){
                                 elm = document.getElementById('myTable2');
                               if(elm.fancyTable.page > 4 ){
                                   $(".pag-arrow-next, .pag-arrow-last").addClass('disabled');
                                   $(".pag-arrow-prev, .pag-arrow-first").hasClass('disabled') && $(".pag-arrow-prev, .pag-arrow-first").removeClass('disabled');
                               }
                               else if (elm.fancyTable.page === 2){
                                   $(".pag-arrow-prev, .pag-arrow-first").addClass('disabled');
                                   $(".pag-arrow-next, .pag-arrow-last").hasClass('disabled') && $(".pag-arrow-next, .pag-arrow-last").removeClass('disabled');
                               }
                               else{
                                   $(".arrow-page-mix").removeClass('disabled');
                               }

                               if($(this).is($(".pag-arrow-next"))){
                                   elm.fancyTable.page = elm.fancyTable.page + 1;
                                   $(".pag-arrow-prev, .pag-arrow-first").hasClass('disabled') && $(".pag-arrow-prev, .pag-arrow-first").removeClass('disabled');
                               }

                               else if($(this).is($(".pag-arrow-first"))){
                                   elm.fancyTable.page = 1;
                                   $(".pag-arrow-next, .pag-arrow-last").removeClass('disabled');
                                   $(".pag-arrow-prev, .pag-arrow-first").addClass('disabled');
                               }
                               else if($(this).is($(".pag-arrow-last"))){
                                   elm.fancyTable.page = 6;
                                   $(".pag-arrow-prev, .pag-arrow-first").removeClass('disabled');
                                   $(".pag-arrow-next, .pag-arrow-last").addClass('disabled');
                               }
                               else{
                                   elm.fancyTable.page = elm.fancyTable.page - 1;
                               }
                                instance.tableUpdate(elm);
                           });
                       }
               }
               settings.onUpdate.call(this,elm);
           };
           this.reinit = function(elm){
               $(this).each(function(){
                   $(this).find("th a").contents().unwrap();
                   $(this).find("tr.fancySearchRow").remove();
               });
               $(this).fancyTable(this.settings);
           };
           this.tableSort = function (elm) {
               if(typeof elm.fancyTable.sortColumn !== "undefined" && elm.fancyTable.sortColumn < elm.fancyTable.nColumns){
                   $(elm).find("thead th div.sortArrow").each(function(){
                       $(this).remove();
                   });
                   var sortArrow = $("<div>",{"class":"sortArrow"}).css({"margin":"0.1em","display":"inline-block","width":0,"height":0,"border-left":"0.4em solid transparent","border-right":"0.4em solid transparent"});
                   sortArrow.css(
                       (elm.fancyTable.sortOrder>0) ?
                       {"border-top":"0.4em solid #000"} :
                       {"border-bottom":"0.4em solid #000"}
                   );
                   $(elm).find("thead th a").eq(elm.fancyTable.sortColumn).append(sortArrow);
                   var rows = $(elm).find("tbody tr").toArray().sort(
                       function(a, b) {
                           var elma = $(a).find("td").eq(elm.fancyTable.sortColumn);
                           var elmb = $(b).find("td").eq(elm.fancyTable.sortColumn);
                           var cmpa = $(elma).data("sortvalue") ? $(elma).data("sortvalue") : elma.html();
                           var cmpb = $(elmb).data("sortvalue") ? $(elmb).data("sortvalue") : elmb.html();
                           if(elm.fancyTable.sortAs[elm.fancyTable.sortColumn] == 'case-insensitive') {
                               cmpa = cmpa.toLowerCase();
                               cmpb = cmpb.toLowerCase();
                           }
                           if(elm.fancyTable.sortAs[elm.fancyTable.sortColumn] == 'numeric'){
                               return((elm.fancyTable.sortOrder>0) ? parseFloat(cmpa)-parseFloat(cmpb) : parseFloat(cmpb)-parseFloat(cmpa));
                           } else {
                               return((cmpa<cmpb)?-elm.fancyTable.sortOrder:(cmpa>cmpb)?elm.fancyTable.sortOrder:0);
                           }
                       }
                   );
                   $(elm).find("tbody").empty().append(rows);
               }
           };
           this.each(function() {
               if($(this).prop("tagName")!=="TABLE"){
                   console.warn("fancyTable: Element is not a table.");
                   return true;
               }
               var elm = this;
               elm.fancyTable = {
                   nColumns: $(elm).find("td").first().parent().find("td").length,
                   nRows : $(this).find("tbody tr").length,
                   perPage : settings.perPage,
                   page : 1,
                   pages : 0,
                   matches : 0,
                   searchArr : [],
                   search : "",
                   sortColumn : settings.sortColumn,
                   sortOrder : (typeof settings.sortOrder === "undefined") ? 1 : (new RegExp("desc","i").test(settings.sortOrder) || settings.sortOrder == -1) ? -1 : 1,
                   sortAs:[], // null, numeric or case-insensitive
                   paginationElement : settings.paginationElement
               };
               if($(elm).find("tbody").length==0){
                   var content = $(elm).html();
                   $(elm).empty();
                   $(elm).append("<tbody>").append($(content));
               }
               if($(elm).find("thead").length==0){
                   $(elm).prepend($("<thead>"));
               }
               if(settings.sortable){
                   var n=0;
                   $(elm).find("thead th").each(function() {
                       elm.fancyTable.sortAs.push(
                           ($(this).data('sortas')=='numeric') ? 'numeric' :
                           ($(this).data('sortas')=='case-insensitive') ? 'case-insensitive' :
                           null
                       );
                       var content = $(this).html();
                       var a = $("<a>",{
                           html:content,
                           "data-n": n,
                           class:""
                       }).css("cursor","pointer").bind("click",function(){
                           if(elm.fancyTable.sortColumn == $(this).data("n")){
                               elm.fancyTable.sortOrder=-elm.fancyTable.sortOrder;
                           } else {
                               elm.fancyTable.sortOrder=1;
                           }
                           elm.fancyTable.sortColumn = $(this).data("n");
                           instance.tableSort(elm);
                           instance.tableUpdate(elm);
                       });
                       $(this).empty();
                       $(this).append(a);
                       n++;
                   });
               }
               if(settings.searchable){
                   var searchHeader = $("<tr>").addClass("fancySearchRow");
                   if(settings.globalSearch){
                       $(".cfd-tabs li").bind("click",function(){
                           elm.fancyTable.search = $(this).data().name;
                           elm.fancyTable.page = 1;
                           instance.tableUpdate(elm);
                       });
                       $(".custom-option").bind("click",function(){
                           elm = document.getElementById('myTable1');
                           let data = $(this).data().name;
                           if(data.toLowerCase() === 'all'){
                               data = ''
                           }
                           if(elm.fancyTable.matches  < elm.fancyTable.perPage){
                               $(".pag-arrow-next-1, .pag-arrow-last-1").addClass('disabled');
                           }
                           else{
                               $(".pag-arrow-next-1, .pag-arrow-last-1").removeClass('disabled');
                           }
                           elm.fancyTable.search = data;
                           elm.fancyTable.page = 1;
                           instance.tableUpdate(elm);
                       });

                       if(settings.pagination){
                   var paginationElement = (elm.fancyTable.paginationElement) ? $(elm.fancyTable.paginationElement) : $(elm).find(".pag");
                   paginationElement.empty();
               }
               settings.onUpdate.call(this,elm);

                       var searchField = $("<input>",{
                           "class":"filter-data-cust",
                           "placeholder": settings.inputPlaceholder,
                           style:"width:100%;"+settings.inputStyle
                       }).bind("change paste keyup",function(){
                           elm.fancyTable.search = $(this).val();
                           elm.fancyTable.page = 1;
                           instance.tableUpdate(elm);
                       });
                       var th = $("<th>",{ style:"padding:2px;" }).attr("colspan",elm.fancyTable.nColumns);
                       if(elm.id == "myTable1")
                           {
                               $(searchField).appendTo($(".tb_search"));
                           }
                       else if(elm.id == "myTable2")
                       {
                           $(searchField).appendTo($(".tb_search-2"));
                       }
                   } else {
                       var n=0;
                       $(elm).find("td").first().parent().find("td").each(function() {
                           elm.fancyTable.searchArr.push("");
                           var searchField = $("<input>",{
                               "data-n": n,
                               "placeholder": settings.inputPlaceholder,
                               style:"width:100%;"+settings.inputStyle
                           }).bind("change paste keyup",function(){
                               elm.fancyTable.searchArr[$(this).data("n")] = $(this).val();
                               elm.fancyTable.page = 1;
                               instance.tableUpdate(elm);
                           });
                           var th = $("<th>",{ style:"padding:2px;" });
                           $(searchField).appendTo($(th));
                           $(th).appendTo($(searchHeader));
                           n++;
                       });
                   }
                   searchHeader.appendTo($(elm).find("thead"));
               }
               // Sort
               instance.tableSort(elm);
               if(settings.pagination && !settings.paginationElement){
                   $(elm).find("tfoot").remove();
                   $(elm).append($("<tfoot><tr></tr></tfoot>"));
                   $(elm).find("tfoot tr").append($("<td class='pag'></td>",{ }).attr("colspan",elm.fancyTable.nColumns));
               }
               instance.tableUpdate(elm);
               settings.onInit.call(this,elm);
           });
           return this;
       };
   }(jQuery));
