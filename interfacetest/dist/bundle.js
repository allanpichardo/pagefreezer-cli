(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/*
 * Copyright (c) 2017 Allan Pichardo.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
"use strict";
/// <reference path="../../node_modules/@types/jquery/index.d.ts" />
var Pagefreezer = (function () {
    function Pagefreezer() {
    }
    Pagefreezer.diffPages = function (url1, url2, callback) {
        $.ajax({
            type: "GET",
            url: Pagefreezer.DIFF_API_URL,
            dataType: "json",
            jsonpCallback: callback,
            data: {
                old_url: url1,
                new_url: url2,
                as: "json",
            },
            success: callback,
            error: function (error) {
                console.log(error);
            },
            headers: { "x-api-key": "SP949Hsfdm2z9rYbnb9mC588hO2uV3Nna2pcy1cj" }
        });
    };
    return Pagefreezer;
}());
Pagefreezer.DIFF_API_URL = "/diff";
Pagefreezer.API_KEY = "SP949Hsfdm2z9rYbnb9mC588hO2uV3Nna2pcy1cj";
exports.Pagefreezer = Pagefreezer;

},{}],2:[function(require,module,exports){
/*
 * Copyright (c) 2017 Allan Pichardo.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
"use strict";
var Pagefreezer_1 = require("./Pagefreezer");
$(document).ready(function () {
    console.log("ready");
    toggleProgressbar(false);
    $('#submitButton').click(function () {
        toggleProgressbar(true);
        Pagefreezer_1.Pagefreezer.diffPages($('#url1').val(), $('#url2').val(), function (data, status) {
            console.log(data);
            $('#pageView').html(data.result.output.html);
            toggleProgressbar(false);
        });
    });
});
function toggleProgressbar(isVisible) {
    if (isVisible) {
        $('.progress').show();
    }
    else {
        $('.progress').hide();
    }
}

},{"./Pagefreezer":1}]},{},[2,1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvc2NyaXB0cy9QYWdlZnJlZXplci50cyIsInNyYy9zY3JpcHRzL21haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTs7Ozs7Ozs7R0FRRzs7QUFFSCxvRUFBb0U7QUEyQnBFO0lBQUE7SUEwQkEsQ0FBQztJQXJCaUIscUJBQVMsR0FBdkIsVUFBd0IsSUFBWSxFQUFFLElBQVksRUFBRSxRQUFpRTtRQUVqSCxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ0gsSUFBSSxFQUFFLEtBQUs7WUFDWCxHQUFHLEVBQUUsV0FBVyxDQUFDLFlBQVk7WUFDN0IsUUFBUSxFQUFFLE1BQU07WUFDaEIsYUFBYSxFQUFFLFFBQVE7WUFDdkIsSUFBSSxFQUFFO2dCQUNGLE9BQU8sRUFBRSxJQUFJO2dCQUNiLE9BQU8sRUFBRSxJQUFJO2dCQUNiLEVBQUUsRUFBRSxNQUFNO2FBQ2I7WUFDRCxPQUFPLEVBQUUsUUFBUTtZQUNqQixLQUFLLEVBQUUsVUFBUyxLQUFLO2dCQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3ZCLENBQUM7WUFDRCxPQUFPLEVBQUUsRUFBQyxXQUFXLEVBQUUsMENBQTBDLEVBQUM7U0FDckUsQ0FBQyxDQUFDO0lBRVAsQ0FBQztJQUVMLGtCQUFDO0FBQUQsQ0ExQkEsQUEwQkM7QUF4QmlCLHdCQUFZLEdBQUcsT0FBTyxDQUFDO0FBQ3ZCLG1CQUFPLEdBQUcsMENBQTBDLENBQUM7QUFIMUQsa0NBQVc7OztBQ3JDeEI7Ozs7Ozs7O0dBUUc7O0FBRUgsNkNBQTBDO0FBRTFDLENBQUMsQ0FBRSxRQUFRLENBQUUsQ0FBQyxLQUFLLENBQUM7SUFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNyQixpQkFBaUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUV6QixDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQ3JCLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLHlCQUFXLENBQUMsU0FBUyxDQUNqQixDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQ2hCLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFDaEIsVUFBUyxJQUFJLEVBQUUsTUFBTTtZQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2xCLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDN0MsaUJBQWlCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDN0IsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyxDQUFBO0FBRUYsMkJBQTJCLFNBQWtCO0lBQ3pDLEVBQUUsQ0FBQSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFDWCxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUE7SUFDekIsQ0FBQztJQUFDLElBQUksQ0FBQyxDQUFDO1FBQ0osQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFBO0lBQ3pCLENBQUM7QUFDTCxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTcgQWxsYW4gUGljaGFyZG8uXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vbm9kZV9tb2R1bGVzL0B0eXBlcy9qcXVlcnkvaW5kZXguZC50c1wiIC8+XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGFnZWZyZWV6ZXJSZXNwb25zZSB7XG4gICAgc3RhdHVzOiBzdHJpbmc7XG4gICAgcmVzdWx0OiBSZXN1bHQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVzdWx0IHtcbiAgICBzdGF0dXM6IHN0cmluZztcbiAgICBvdXRwdXQ6IE91dHB1dDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBPdXRwdXQge1xuICAgIGh0bWw6IHN0cmluZztcbiAgICBkaWZmczogRGlmZjtcbiAgICByYXdIdG1sMjogc3RyaW5nO1xuICAgIHJhd0h0bWwxOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGlmZiB7XG5cbiAgICBuZXc6IHN0cmluZztcbiAgICBvbGQ6IHN0cmluZztcbiAgICBjaGFuZ2U6IG51bWJlcjtcbiAgICBvZmZzZXQ6IG51bWJlcjtcbn1cblxuZXhwb3J0IGNsYXNzIFBhZ2VmcmVlemVyIHtcblxuICAgIHB1YmxpYyBzdGF0aWMgRElGRl9BUElfVVJMID0gXCIvZGlmZlwiO1xuICAgIHB1YmxpYyBzdGF0aWMgQVBJX0tFWSA9IFwiU1A5NDlIc2ZkbTJ6OXJZYm5iOW1DNTg4aE8ydVYzTm5hMnBjeTFjalwiO1xuXG4gICAgcHVibGljIHN0YXRpYyBkaWZmUGFnZXModXJsMTogc3RyaW5nLCB1cmwyOiBzdHJpbmcsIGNhbGxiYWNrOiAocmVzcG9uc2U6IFBhZ2VmcmVlemVyUmVzcG9uc2UsIHN0YXR1czogc3RyaW5nKSA9PiB2b2lkKSB7XG5cbiAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgIHR5cGU6IFwiR0VUXCIsXG4gICAgICAgICAgICB1cmw6IFBhZ2VmcmVlemVyLkRJRkZfQVBJX1VSTCxcbiAgICAgICAgICAgIGRhdGFUeXBlOiBcImpzb25cIixcbiAgICAgICAgICAgIGpzb25wQ2FsbGJhY2s6IGNhbGxiYWNrLFxuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIG9sZF91cmw6IHVybDEsXG4gICAgICAgICAgICAgICAgbmV3X3VybDogdXJsMixcbiAgICAgICAgICAgICAgICBhczogXCJqc29uXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3VjY2VzczogY2FsbGJhY2ssXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaGVhZGVyczoge1wieC1hcGkta2V5XCI6IFwiU1A5NDlIc2ZkbTJ6OXJZYm5iOW1DNTg4aE8ydVYzTm5hMnBjeTFjalwifVxuICAgICAgICB9KTtcblxuICAgIH1cblxufSIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTcgQWxsYW4gUGljaGFyZG8uXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiAqL1xuXG5pbXBvcnQge1BhZ2VmcmVlemVyfSBmcm9tIFwiLi9QYWdlZnJlZXplclwiO1xuXG4kKCBkb2N1bWVudCApLnJlYWR5KGZ1bmN0aW9uKCkge1xuICAgIGNvbnNvbGUubG9nKFwicmVhZHlcIik7XG4gICAgdG9nZ2xlUHJvZ3Jlc3NiYXIoZmFsc2UpO1xuXG4gICAgJCgnI3N1Ym1pdEJ1dHRvbicpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdG9nZ2xlUHJvZ3Jlc3NiYXIodHJ1ZSk7XG4gICAgICAgIFBhZ2VmcmVlemVyLmRpZmZQYWdlcyhcbiAgICAgICAgICAgICQoJyN1cmwxJykudmFsKCksXG4gICAgICAgICAgICAkKCcjdXJsMicpLnZhbCgpLFxuICAgICAgICAgICAgZnVuY3Rpb24oZGF0YSwgc3RhdHVzKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICAgICAgJCgnI3BhZ2VWaWV3JykuaHRtbChkYXRhLnJlc3VsdC5vdXRwdXQuaHRtbCk7XG4gICAgICAgICAgICAgICAgdG9nZ2xlUHJvZ3Jlc3NiYXIoZmFsc2UpO1xuICAgICAgICAgICAgfSk7XG4gICAgfSk7XG59KVxuXG5mdW5jdGlvbiB0b2dnbGVQcm9ncmVzc2Jhcihpc1Zpc2libGU6IGJvb2xlYW4pIHtcbiAgICBpZihpc1Zpc2libGUpIHtcbiAgICAgICAgJCgnLnByb2dyZXNzJykuc2hvdygpXG4gICAgfSBlbHNlIHtcbiAgICAgICAgJCgnLnByb2dyZXNzJykuaGlkZSgpXG4gICAgfVxufSJdfQ==
