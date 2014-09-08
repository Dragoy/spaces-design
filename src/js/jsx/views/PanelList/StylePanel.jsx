/** @jsx React.DOM */
/*
 * Copyright (c) 2014 Adobe Systems Incorporated. All rights reserved.
 *  
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"), 
 * to deal in the Software without restriction, including without limitation 
 * the rights to use, copy, modify, merge, publish, distribute, sublicense, 
 * and/or sell copies of the Software, and to permit persons to whom the 
 * Software is furnished to do so, subject to the following conditions:
 *  
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *  
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER 
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING 
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER 
 * DEALINGS IN THE SOFTWARE.
 * 
 */


define(function (require, exports, module) {
    "use strict";

    var React = require("react");

    var TitleHeader = require("jsx!js/jsx/shared/TitleHeader"),
        Opacity = require("jsx!js/jsx/views/PanelList/Style/Opacity"),
        BlendMode = require("jsx!js/jsx/views/PanelList/Style/BlendMode"),
        Combine = require("jsx!js/jsx/views/PanelList/Style/Combine"),
        Type = require("jsx!js/jsx/views/PanelList/Style/Type"),
        Fill = require("jsx!js/jsx/views/PanelList/Style/Fill"),
        strings = require("i18n!nls/strings");

    var StylePanel = React.createClass({
        render: function () {
            return (
                <section id="styleSection">
                    <TitleHeader title={strings.TITLE_STYLE} />
                    
                    <div className="section-background" >
                        <ul className="list">
                            <li className="formline" >
                                <Opacity />
                                <BlendMode />
                            </li>
                            <li className="formline" >
                                <Combine />
                            </li>
                            <li className="formline" >
                                <Type />
                            </li>
                            <li className="formline" >
                                <Fill />
                            </li>
                            <li className="formline" >
                                <Stroke/>
                            </li>
                        </ul>
                    </div>
                </section>
            );
        }
    });

    module.exports = StylePanel;
});