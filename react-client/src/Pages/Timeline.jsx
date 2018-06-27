import React, {Component} from 'react';

class Timeline extends Component {
    
        componentDidMount(){
            var PRESTimeline = /** @class */ (function() {
                function PRESTimeline(target, color) {
                    // this.__process_stylesheet(document.styleSheets[0]);
                    this.base = target;
                    this.color = color;
                    // console.log(this.color)
                    this.periodContainer = $(this.base).find('.periods-container');
                    this.cardContainer = $(this.base).find('.cards-container');
                    this.timelineNodeContainer = $(this.base).find('.timeline-container .timeline');
                    // this.activePeriod = $(this.base).find('.periods-container section.active')
                    this._parseData();
                    this._initialColor();
                    this._generateTimeline();
                    this._setStateClasses();
                    this._assignBtn();
                    this._adjustPeriodContainer();
                    this._adjustCardContainer();
                    // console.log(this.cardData)
                }
                PRESTimeline.prototype._parseData = function() {
                    var base = this.base;
                    var periods = $(base).find('.periods-container section');
                    for (var _i = 0, periods_1 = periods; _i < periods_1.length; _i++) {
                        var section = periods_1[_i];
                        section.period = $(section).attr('period');
                        section.index = $(section).index();
                    }
                    // console.log(periods)
                    this.periodData = periods;
                    var data = $(base).find('.cards-container section');
                    // console.log(data)
                    for (var _a = 0, data_1 = data; _a < data_1.length; _a++) {
                        var section = data_1[_a];
                        section.period = $(section).attr('period');
                        section.index = $(section).index();
                    }
                    // console.log(data)
                    this.cardData = data;
                    // #assign initial entry point (active items)
                    this.activePeriod = this.periodData[0];
                    this.activePeriodIndex = 0;
                    this.activeCard = this.cardData[0];
                    this.activeCardIndex = 0;
                };
                PRESTimeline.prototype._setStateClasses = function() {
                    // # periods
                    $(this.base).find('.periods-container section.active').removeClass('active');
                    $(this.base).find('.periods-container section.prev').removeClass('prev');
                    $(this.base).find('.periods-container section.next').removeClass('next');
                    // console.log("setclass: " + this.activePeriod.index)
                    $(this.activePeriod).addClass('active');
                    // console.log(this.activePeriod.index)
                    // this.activePeriodIndex = this.activePeriod.index
                    if ($(this.activePeriod).prev().length != 0) {
                        $(this.activePeriod).prev().addClass('prev');
                        $(this.base).find('.periods-container .btn-back').removeClass('hide');
                    } else {
                        $(this.base).find('.periods-container .btn-back').addClass('hide');
                    }
                    if ($(this.activePeriod).next().length != 0) {
                        $(this.activePeriod).next().addClass('next');
                        $(this.base).find('.periods-container .btn-next').removeClass('hide');
                    } else {
                        $(this.base).find('.periods-container .btn-next').addClass('hide');
                    }
                    // ## cards
                    $(this.base).find('.cards-container section.active').removeClass('active');
                    $(this.base).find('.cards-container section.prev').removeClass('prev');
                    $(this.base).find('.cards-container section.next').removeClass('next');
                    $(this.activeCard).addClass('active');
                    // this.activeCardIndex - this.activeCard.index
                    if ($(this.activeCard).prev().length != 0) {
                        $(this.activeCard).prev().addClass('prev');
                    }
                    if ($(this.activeCard).next().length != 0) {
                        $(this.activeCard).next().addClass('next');
                    }
                    // ## timeline 
                    $(this.base).find('.timeline li.active').removeClass('active');
                    // let findNode = $(this.base).find('.timeline ol li')[this.activeCard.index]
                    $(this.timelineData[this.activeCard.index]).addClass('active');
                    var timelineB = $(this.base).find('.timeline-container .btn-back');
                    var timelineN = $(this.base).find('.timeline-container .btn-next');
                    // console.log($(timelineN))
                    if (this.activeCardIndex === 0) {
                        timelineB.addClass('hide');
                    } else {
                        timelineB.removeClass('hide');
                    }
                    if (this.activeCardIndex >= this.cardData.length - 1) {
                        timelineN.addClass('hide');
                    } else {
                        timelineN.removeClass('hide');
                    }
                };
                // ## timeline generater
                PRESTimeline.prototype._generateTimeline = function() {
                    // ## create node list
                    var htmlWrap = '<ol></ol>';
                    $(this.timelineNodeContainer).append(htmlWrap);
                    var wrap = $(this.timelineNodeContainer).find('ol');
                    var numNode = this.cardData.length;
                    for (var i = 0; i < numNode; i++) {
                        var c = this.cardData[i].color;
                        var el = wrap.append('<li class="' + this.cardData[i].period + '" style="border-color: ' + c + '"></li>');
                    }
                    // ## width of timeline
                    var nodeW = 200;
                    wrap.css('width', nodeW * numNode - 16);
                    var nodeList = $(this.base).find('.timeline ol li');
                    this.timelineData = nodeList;
                };
                // ## assign button actions
                PRESTimeline.prototype._assignBtn = function() {
                    var _this = this;
                    var periodPrev = $(this.base).find('.periods-container .btn-back');
                    var periodNext = $(this.base).find('.periods-container .btn-next');
                    periodPrev.click(function() {
                        if (_this.activePeriodIndex > 0) {
                            // console.log('prev')
                            _this.activePeriodIndex -= 1;
                            _this.activePeriod = _this.periodData[_this.activePeriodIndex];
                            _this._chainActions('period');
                            _this._setStateClasses();
                        }
                        _this._adjustPeriodContainer();
                    });
                    periodNext.click(function() {
                        if (_this.activePeriodIndex < _this.periodData.length - 1) {
                            // console.log('next' + this.activePeriodIndex)
                            _this.activePeriodIndex += 1;
                            _this.activePeriod = _this.periodData[_this.activePeriodIndex];
                            _this._chainActions('period');
                            _this._setStateClasses();
                        }
                        _this._adjustPeriodContainer();
                    });
                    var timelinePrev = $(this.base).find('.timeline-container .btn-back');
                    var timelineNext = $(this.base).find('.timeline-container .btn-next');
                    timelinePrev.click(function() {
                        if (_this.activeCardIndex > 0) {
                            _this.activeCardIndex -= 1;
                            _this.activeCard = _this.cardData[_this.activeCardIndex];
                            _this._chainActions('timeline');
                            _this._setStateClasses();
                        }
                        _this._adjustCardContainer();
                        _this._adjustPeriodContainer();
                    });
                    timelineNext.click(function() {
                        if (_this.activeCardIndex < _this.cardData.length - 1) {
                            _this.activeCardIndex += 1;
                            _this.activeCard = _this.cardData[_this.activeCardIndex];
                            _this._chainActions('timeline');
                            _this._setStateClasses();
                        }
                        _this._adjustCardContainer();
                        _this._adjustPeriodContainer();
                    });
                    var _loop_1 = function(i) {
                        $(this_1.timelineData[i]).click(function() {
                            _this.activeCardIndex = _this.cardData[i].index;
                            _this.activeCard = _this.cardData[_this.activeCardIndex];
                            _this._chainActions('timeline');
                            _this._setStateClasses();
                            _this._adjustCardContainer();
                            _this._shiftTimeline();
                        });
                    };
                    var this_1 = this;
                    // ## assign each timeline li
                    for (var i = 0; i < this.timelineData.length; i++) {
                        _loop_1(i);
                    }
                };
                // ## color ##
                PRESTimeline.prototype._initialColor = function() {
                    for (var i = 0; i < this.periodData.length; i++) {
                        var p = this.periodData[i].period;
                        this.periodData[i].color = this.color[p];
                        var temp = this.periodData[i];
                        $(temp).css('border-color', temp.color);
                        $(temp).find('.year').css('color', temp.color);
                        // ## color for timeline items, this part utilize the period name as class which will be add to the li later
                        // ### cross browser bug fix
                        var sbstyle = document.createElement("style");
                        document.head.appendChild(sbstyle);
                        // let sheet = document.styleSheets[0]
                        sbstyle.sheet.insertRule('li.' + p + '.active { background-color: ' + this.color[p] + ' !important } ', 0);
                        sbstyle.sheet.insertRule('li.' + p + '::before { background-color: ' + this.color[p] + ' } ', 0);
                        sbstyle.sheet.insertRule('li.' + p + '::after { background-color: ' + this.color[p] + ' } ', 0);
                    }
                    for (var i = 0; i < this.cardData.length; i++) {
                        var p = this.cardData[i].period;
                        this.cardData[i].color = this.color[p];
                        var temp = this.cardData[i];
                        $(temp).css('border-color', temp.color);
                        $(temp).find('.year').css('color', temp.color);
                    }
                };
                PRESTimeline.prototype._adjustPeriodContainer = function() {
                    var activeH = $(this.activePeriod).outerHeight();
                    $(this.periodContainer).height(activeH);
                    console.log('top adjusted');
                };
                PRESTimeline.prototype._adjustCardContainer = function() {
                    var activeH = $(this.activeCard).outerHeight() + 24;
                    $(this.cardContainer).height(activeH);
                    console.log('bot adjusted');
                };
                PRESTimeline.prototype._shiftTimeline = function() {
                    // #### We need to fix this part if using this component in different sizes ####
                    var timelineW = $(this.base).find('.timeline-container').outerWidth();
                    var timelinePadding = 210;
                    var timelineCenter = 300;
                    var liWidth = 16;
                    var activeNodeX = $(this.timelineData[this.activeCardIndex]).position().left;
                    var finalPos = -activeNodeX + timelinePadding;
                    $(this.timelineNodeContainer).css('left', finalPos);
                    console.log(activeNodeX);
                };
                PRESTimeline.prototype._chainActions = function(state) {
                    switch (state) {
                        case 'period':
                            console.log('period');
                            if (this.activePeriod.period != this.activeCard.period) {
                                // ## find the closest li with the active period
                                var ta = [];
                                for (var i = 0; i < this.cardData.length; i++) {
                                    var temp = this.cardData[i];
                                    if (this.activePeriod.period === temp.period)
                                        ta.push(temp);
                                }
                                this.activeCard = ta[0];
                                this.activeCardIndex = ta[0].index;
                            }
                            break;
                        case 'timeline':
                            console.log('timeline');
                            if (this.activeCard.period != this.activePeriod.period) {
                                var ta = void 0;
                                for (var i = 0; i < this.periodData.length; i++) {
                                    var temp = this.periodData[i];
                                    if (this.activeCard.period === temp.period)
                                        ta = temp;
                                }
                                this.activePeriod = ta;
                                this.activePeriodIndex = ta.index;
                            }
                            break;
                    }
                    this._shiftTimeline();
                    this._adjustCardContainer();
                };
                return PRESTimeline;
            }());
            // ## document load ##
            $(document).ready(function() {
                var colorcode = {
                    'period2011': '#0000ff',
                    'period2012': '#6a00ff',
                    'period2013': '#9400ff',
                    'period2014': '#c300ff',
                    'period2015': '#ef00ff',
                    'period2016': '#ff00ff',
                    'period2017': '#ff0080',
                    'period2018': '#ff005e',
                    'period2019': '#ff002a',
                };
                var timeline = new PRESTimeline($('#this-timeline'), colorcode);
            });
        }
    
    render() {
        return (
            // <div className="">

            // </div>
            < div className = "ui container" >
                <div className="pres-timeline" id="this-timeline">
                    <div className="periods-container">
                        <section className="period-single" period="period2011">
                            <h4 className="year">2011</h4>
                            <h2 className="title">Ano de 2011</h2>
                            <p>Texto Ano 2011</p>
                        </section>
                        <section className="period-single" period="period2012">
                            <h4 className="year">2012</h4>
                            <h2 className="title">Ano de 2012</h2>
                            <p>Texto Ano 2012</p>
                        </section>
                        <section className="period-single" period="period2013">
                            <h4 className="year">2013</h4>
                            <h2 className="title">Ano de 2013</h2>
                            <p>Texto Ano 2013</p>
                        </section>
                        <section className="period-single" period="period2014">
                            <h4 className="year">2014</h4>
                            <h2 className="title">Ano de 2014</h2>
                            <p>Texto Ano 2014</p>
                        </section>
                        <section className="period-single" period="period2015">
                            <h4 className="year">2015</h4>
                            <h2 className="title">Ano de 2015</h2>
                            <p>Texto Ano 2015</p>
                        </section>
                        <section className="period-single" period="period2016">
                            <h4 className="year">2016</h4>
                            <h2 className="title">Ano de 2016</h2>
                            <p>Texto Ano 2016</p>
                        </section>
                        <section className="period-single" period="period2017">
                            <h4 className="year">2017</h4>
                            <h2 className="title">Ano de 2017</h2>
                            <p>Texto Ano 2017</p>
                        </section>
                        <section className="period-single" period="period2018">
                            <h4 className="year">2018</h4>
                            <h2 className="title">Ano de 2018</h2>
                            <p>Texto Ano 2018</p>
                        </section>
                        <section className="period-single" period="period2019">
                            <h4 className="year">2019</h4>
                            <h2 className="title">Ano de 2019</h2>
                            <p>Texto Ano 2019</p>
                        </section>
                        <div className="btn-back"></div>
                        <div className="btn-next"></div>
                    </div>

                    <div className="timeline-container">
                        <div className="timeline"></div>

                        <div className="btn-back">
                            <svg
                                width="30"
                                height="30"
                                viewBox="0 0 30 30"
                                xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h30v30H0z"/><path
                                fill="#D8D8D8"
                                fill-rule="evenodd"
                                d="M11.828 15l7.89-7.89-2.83-2.828L6.283 14.89l.11.11-.11.11L16.89 25.72l2.828-2.83"/></svg>
                        </div>
                        <div className="btn-next">
                            <svg
                                width="30"
                                height="30"
                                viewBox="0 0 30 30"
                                xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h30v30H0z"/><path
                                fill="#D8D8D8"
                                fill-rule="evenodd"
                                d="M18.172 14.718l-7.89-7.89L13.112 4l10.606 10.607-.11.11.11.11-10.608 10.61-2.828-2.83 7.89-7.89"/></svg>
                        </div>
                    </div>

                    <div className="cards-container">
                        <section className="card-single active" period="period2011">
                            <h4 className="year">05/12/2011</h4>
                            <h2 className="title">E a história começa por aqui...</h2>
                            <div className="content">
                                <img
                                    src={require('../../dist/Assets/timeline_images/20111205.jpg')}
                                    />
                                <p>Lá pro meio do ano de 2011 a senhorita da foto adiciona esse benino no MSN e começa a perguntar se ele fazia ingles na CNA... 
                                    Depois disso, começaram a se encontrar...
                                    07 dias depois dessa foto começam a namorar!
                                </p>
                            </div>
                        </section>
                        <section className="card-single active" period="period2011">
                            <h4 className="year">23/12/2011</h4>
                            <h2 className="title">Já que começou a namorar no fim do ano, tem festa!</h2>
                            <div className="content">
                                <img
                                    src={require('../../dist/Assets/timeline_images/20111223.jpg')}
                                    alt=""/>
                                <p>E vem o primeiro natal juntos</p>
                            </div>
                        </section>
                        <section className="card-single active" period="period2012">
                            <h4 className="year">13/04/2012</h4>
                            <h2 className="title">Já são família</h2>
                            <div className="content">
                                <img
                                    src={require('../../dist/Assets/timeline_images/20120413.jpg')}
                                    alt=""/>
                                <p>Alguns meses já passaram, e já não tem como um não ser membro oficial da família do outro</p>
                            </div>
                        </section>
                        <section className="card-single active" period="period2012">
                            <h4 className="year">17/08/2012</h4>
                            <h2 className="title">Primeiro aniversário do Paulo junto da Bia</h2>
                            <div className="content">
                                <img
                                    src={require('../../dist/Assets/timeline_images/20120817.jpg')}
                                    alt=""/>
                                <p>O primeiro aniversário juntos sempre é muito especial!</p>
                            </div>
                        </section>
                        <section className="card-single active" period="period2012">
                            <h4 className="year">16/09/2012</h4>
                            <h2 className="title">Onde um vai, o outro vai atrás</h2>
                            <div className="content">
                                <img
                                    src={require('../../dist/Assets/timeline_images/20120916.jpg')}
                                    alt=""/>
                                <p>Quase completando um ano de namoro, sempre estavam juntos em todas as festas... e cada festa uma sessão de fotos mais maluca que a outra</p>
                            </div>
                        </section>
                        <section className="card-single active" period="period2013">
                            <h4 className="year">13/05/2013</h4>
                            <h2 className="title">Crescendo juntos</h2>
                            <div className="content">
                                <img
                                    src={require('../../dist/Assets/timeline_images/20130513.jpg')}
                                    alt=""/>
                                <p>Do começo do ensino médio até Paulo tirar a carteira... os dois davam muitos passos importantes juntos</p>
                            </div>
                        </section>
                        <section className="card-single active" period="period2013">
                            <h4 className="year">30/05/2013</h4>
                            <h2 className="title">E começam a viajar</h2>
                            <div className="content">
                                <img
                                    src={require('../../dist/Assets/timeline_images/20130530.jpg')}
                                    alt=""/>
                                <p>Um casal que ama viajar, sempre dando um jeito de irem juntos não importa o destino</p>
                            </div>
                        </section>
                        <section className="card-single active" period="period2013">
                            <h4 className="year">03/08/2013</h4>
                            <h2 className="title">Do ensino médio à Universidade</h2>
                            <div className="content">
                                <img
                                    src={require('../../dist/Assets/timeline_images/20130803.jpg')}
                                    alt=""/>
                                <p>Aprovação em Ciência da Computação, tem que ter trote!</p>
                            </div>
                        </section>
                        <section className="card-single active" period="period2013">
                            <h4 className="year">03/08/2013</h4>
                            <h2 className="title">Mesmo sem cabelo o amor continua!</h2>
                            <div className="content">
                                <img
                                    src={require('../../dist/Assets/timeline_images/20130803_2.jpg')}
                                    alt=""/>
                                <p>Não importa a aparência ou fase da vida, e mesmo com a careca iluminada, Bia ainda ama Paulo</p>
                            </div>
                        </section>
                        <section className="card-single active" period="period2014">
                            <h4 className="year">07/02/2014</h4>
                            <h2 className="title">E sempre com responsabilidade</h2>
                            <div className="content">
                                <img
                                    src={require('../../dist/Assets/timeline_images/20140207.jpg')}
                                    alt=""/>
                                <p>Casal sobrio, gangue do toddynho</p>
                            </div>
                        </section>
                        <section className="card-single active" period="period2014">
                            <h4 className="year">02/11/2014</h4>
                            <h2 className="title">E mais responsabilidade</h2>
                            <div className="content">
                                <img
                                    src={require('../../dist/Assets/timeline_images/20141102.jpg')}
                                    alt=""/>
                                <p>O copo de acrílico contém água</p>
                            </div>
                        </section>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default Timeline;