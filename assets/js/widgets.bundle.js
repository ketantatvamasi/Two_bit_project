"use strict";

// Class definition
var KTFormsWidget1 = (function () {
    // Private methods
    var initForm1 = function () {
        var element = document.querySelector('#kt_forms_widget_1_select_1');

        if ( !element ) {
            return;
        }

        var optionFormat = function(item) {
            if ( !item.id ) {
                return item.text;
            }

            var span = document.createElement('span');
            var template = '';

            template += '<img src="' + item.element.getAttribute('data-kt-select2-icon') + '" class="rounded-circle h-20px me-2" alt="image"/>';
            template += item.text;

            span.innerHTML = template;

            return $(span);
        }

        // Init Select2 --- more info: https://select2.org/
        $(element).select2({
            placeholder: "Select coin",
            minimumResultsForSearch: Infinity,
            templateSelection: optionFormat,
            templateResult: optionFormat
        });
    };

    var initForm2 = function () {
        var element = document.querySelector('#kt_forms_widget_1_select_2');

        if ( !element ) {
            return;
        }

        var optionFormat = function(item) {
            if ( !item.id ) {
                return item.text;
            }

            var span = document.createElement('span');
            var template = '';

            template += '<img src="' + item.element.getAttribute('data-kt-select2-icon') + '" class="rounded-circle h-20px me-2" alt="image"/>';
            template += item.text;

            span.innerHTML = template;

            return $(span);
        }

        // Init Select2 --- more info: https://select2.org/
        $(element).select2({
            placeholder: "Select coin",
            minimumResultsForSearch: Infinity,
            templateSelection: optionFormat,
            templateResult: optionFormat
        });
    };

    // Public methods
    return {
        init: function () {
            initForm1();
            initForm2();
        },
    };
})();

// Webpack support
if (typeof module !== "undefined") {
    module.exports = KTFormsWidget1;
}

// On document ready
KTUtil.onDOMContentLoaded(function () {
    KTFormsWidget1.init();
});

"use strict";

// Class definition
var KTCardsWidget1 = function () {
    // Private methods
    var initChart = function() {
        var element = document.getElementById("kt_card_widget_1_chart");
        
        if (!element) {
            return;
        }

        var color = element.getAttribute('data-kt-chart-color');
        
        var height = parseInt(KTUtil.css(element, 'height'));
        var labelColor = KTUtil.getCssVariableValue('--kt-gray-500');         
        var baseColor = KTUtil.isHexColor(color) ? color : KTUtil.getCssVariableValue('--kt-' + color);
        var secondaryColor = KTUtil.getCssVariableValue('--kt-gray-300');        

        var options = {
            series: [{
                name: 'Sales',
                data: [30, 75, 55, 45, 30, 60, 75, 50],
                margin: {
					left: 5,
					right: 5
				}   
            }],
            chart: {
                fontFamily: 'inherit',
                type: 'bar',
                height: height,
                toolbar: {
                    show: false
                },
                sparkline: {
                    enabled: true
                }
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: ['35%'],
                    borderRadius: 6
                }
            },
            legend: {
                show: false
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                show: true,
                width: 4,
                colors: ['transparent']
            },
            xaxis: {                
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false
                },
                labels: {
                    show: false,
                    style: {
                        colors: labelColor,
                        fontSize: '12px'
                    }
                },               
                crosshairs: {
                    show: false
                }
            },
            yaxis: {
                labels: {
                    show: false,
                    style: {
                        colors: labelColor,
                        fontSize: '12px'
                    }
                }
            },
            fill: {
                type: 'solid'
            },
            states: {
                normal: {
                    filter: {
                        type: 'none',
                        value: 0
                    }
                },
                hover: {
                    filter: {
                        type: 'none',
                        value: 0
                    }
                },
                active: {
                    allowMultipleDataPointsSelection: false,
                    filter: {
                        type: 'none',
                        value: 0
                    }
                }
            },
            tooltip: {
                style: {
                    fontSize: '12px'
                },
                x: {
                    formatter: function (val) {
                        return "Feb: " + val
                    }
                },
                y: {
                    formatter: function (val) {
                        return val + "%"  
                    }
                }
            },
            colors: [baseColor, secondaryColor],
            grid: {
                borderColor: false,
                strokeDashArray: 4,
                yaxis: {
                    lines: {
                        show: true
                    }
                },
                padding: {
                    top: 10,
					left: 25,
					right: 25     
				}               
            }
        };

        // Set timeout to properly get the parent elements width
        var chart = new ApexCharts(element, options);
        
        // Set timeout to properly get the parent elements width
        setTimeout(function() {
            chart.render();   
        }, 300);  
    }

    // Public methods
    return {
        init: function () {
            initChart();
        }   
    }
}();

// Webpack support
if (typeof module !== 'undefined') {
    module.exports = KTCardsWidget1;
}

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTCardsWidget1.init();
});
   
        
        
        
           
"use strict";

// Class definition
var KTCardsWidget10 = function () {
    // Private methods
    var initChart = function() {
        var el = document.getElementById('kt_card_widget_10_chart'); 

        if (!el) {
            return;
        }

        var options = {
            size: el.getAttribute('data-kt-size') ? parseInt(el.getAttribute('data-kt-size')) : 70,
            lineWidth: el.getAttribute('data-kt-line') ? parseInt(el.getAttribute('data-kt-line')) : 11,
            rotate: el.getAttribute('data-kt-rotate') ? parseInt(el.getAttribute('data-kt-rotate')) : 145,            
            //percent:  el.getAttribute('data-kt-percent') ,
        }

        var canvas = document.createElement('canvas');
        var span = document.createElement('span'); 
            
        if (typeof(G_vmlCanvasManager) !== 'undefined') {
            G_vmlCanvasManager.initElement(canvas);
        }

        var ctx = canvas.getContext('2d');
        canvas.width = canvas.height = options.size;

        el.appendChild(span);
        el.appendChild(canvas);

        ctx.translate(options.size / 2, options.size / 2); // change center
        ctx.rotate((-1 / 2 + options.rotate / 180) * Math.PI); // rotate -90 deg

        //imd = ctx.getImageData(0, 0, 240, 240);
        var radius = (options.size - options.lineWidth) / 2;

        var drawCircle = function(color, lineWidth, percent) {
            percent = Math.min(Math.max(0, percent || 1), 1);
            ctx.beginPath();
            ctx.arc(0, 0, radius, 0, Math.PI * 2 * percent, false);
            ctx.strokeStyle = color;
            ctx.lineCap = 'round'; // butt, round or square
            ctx.lineWidth = lineWidth
            ctx.stroke();
        };

        // Init 
        drawCircle('#E4E6EF', options.lineWidth, 100 / 100); 
        drawCircle(KTUtil.getCssVariableValue('--kt-primary'), options.lineWidth, 100 / 150);
        drawCircle(KTUtil.getCssVariableValue('--kt-success'), options.lineWidth, 100 / 250);   
    }

    // Public methods
    return {
        init: function () {
            initChart();
        }   
    }
}();

// Webpack support
if (typeof module !== 'undefined') {
    module.exports = KTCardsWidget10;
}

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTCardsWidget10.init();
});
   
        
        
        
           
"use strict";

// Class definition
var KTCardWidget12 = function () {
    var chart = {
        self: null,
        rendered: false
    };

    // Private methods
    var initChart = function(chart) {
        var element = document.getElementById("kt_card_widget_12_chart");

        if (!element) {
            return;
        }

        var height = parseInt(KTUtil.css(element, 'height'));       
        var borderColor = KTUtil.getCssVariableValue('--kt-border-dashed-color');
        var baseColor = KTUtil.getCssVariableValue('--kt-gray-800');
        var lightColor = KTUtil.getCssVariableValue('--kt-success');

        var options = {
            series: [{
                name: 'Sales',
                data: [3.5, 5.7, 2.8, 5.9, 4.2, 5.6, 4.3, 4.5, 5.9, 4.5, 5.7, 4.8, 5.7]
            }],
            chart: {
                fontFamily: 'inherit',
                type: 'area',
                height: height,
                toolbar: {
                    show: false
                }
            },             
            legend: {
                show: false
            },
            dataLabels: {
                enabled: false
            },
            fill: {
                type: 'solid',
                opacity: 0
            },
            stroke: {
                curve: 'smooth',
                show: true,
                width: 2,
                colors: [baseColor]
            },
            xaxis: {                 
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false
                },
                labels: {
                    show: false
                },
                crosshairs: {
                    position: 'front',
                    stroke: {
                        color: baseColor,
                        width: 1,
                        dashArray: 3
                    }
                },
                tooltip: {
                    enabled: true,
                    formatter: undefined,
                    offsetY: 0,
                    style: {
                        fontSize: '12px'
                    }
                }
            },
            yaxis: {
                labels: {
                    show: false
                }
            },
            states: {
                normal: {
                    filter: {
                        type: 'none',
                        value: 0
                    }
                },
                hover: {
                    filter: {
                        type: 'none',
                        value: 0
                    }
                },
                active: {
                    allowMultipleDataPointsSelection: false,
                    filter: {
                        type: 'none',
                        value: 0
                    }
                }
            },
            tooltip: {
                style: {
                    fontSize: '12px'
                },
                x: {
                    formatter: function (val) {
                        return "Feb " + val;
                    }
                },
                y: {
                    formatter: function (val) {
                        return val * "10" + "K"
                    }
                }
            },
            colors: [lightColor],
            grid: { 
                borderColor: borderColor,                 
                strokeDashArray: 4,
                padding: {
                    top: 0,
                    right: -20,
                    bottom: -20,
                    left: -20
                },
                yaxis: {
                    lines: {
                        show: true
                    }
                }
            },
            markers: {               
                strokeColor: baseColor,
                strokeWidth: 2
            }
        }; 

        chart.self = new ApexCharts(element, options);

        // Set timeout to properly get the parent elements width
        setTimeout(function() {
            chart.self.render();
            chart.rendered = true;
        }, 200);   
    }

    // Public methods
    return {
        init: function () {
            initChart(chart);

            // Update chart on theme mode change
            KTThemeMode.on("kt.thememode.change", function() {                
                if (chart.rendered) {
                    chart.self.destroy();
                }

                initChart(chart);
            });
        }     
    }
}();

// Webpack support
if (typeof module !== 'undefined') {
    module.exports = KTCardWidget12;
}

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTCardWidget12.init();
});

"use strict";

// Class definition
var KTCardWidget13 = function () {
    var chart = {
        self: null,
        rendered: false
    };

    // Private methods
    var initChart = function(chart) {
        var element = document.getElementById("kt_card_widget_13_chart");

        if (!element) {
            return;
        }

        var height = parseInt(KTUtil.css(element, 'height'));       
        var borderColor = KTUtil.getCssVariableValue('--kt-border-dashed-color');
        var baseColor = KTUtil.getCssVariableValue('--kt-gray-800');
        var lightColor = KTUtil.getCssVariableValue('--kt-success');

        var options = {
            series: [{
                name: 'Shipments',
                data: [1.5, 4.5, 2, 3, 2, 4, 2.5, 2, 2.5, 4, 3.5, 4.5, 2.5]
            }],
            chart: {
                fontFamily: 'inherit',
                type: 'area',
                height: height,
                toolbar: {
                    show: false
                }
            },             
            legend: {
                show: false
            },
            dataLabels: {
                enabled: false
            },
            fill: {
                type: 'solid',
                opacity: 0
            },
            stroke: {
                curve: 'smooth',
                show: true,
                width: 2,
                colors: [baseColor]
            },
            xaxis: {                 
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false
                },
                labels: {
                    show: false
                },
                crosshairs: {
                    position: 'front',
                    stroke: {
                        color: baseColor,
                        width: 1,
                        dashArray: 3
                    }
                },
                tooltip: {
                    enabled: true,
                    formatter: undefined,
                    offsetY: 0,
                    style: {
                        fontSize: '12px'
                    }
                }
            },
            yaxis: {
                labels: {
                    show: false
                }
            },
            states: {
                normal: {
                    filter: {
                        type: 'none',
                        value: 0
                    }
                },
                hover: {
                    filter: {
                        type: 'none',
                        value: 0
                    }
                },
                active: {
                    allowMultipleDataPointsSelection: false,
                    filter: {
                        type: 'none',
                        value: 0
                    }
                }
            },
            tooltip: {
                style: {
                    fontSize: '12px'
                },
                x: {
                    formatter: function (val) {
                        return "Feb " + val;
                    }
                },
                y: {
                    formatter: function (val) {
                        return val * "10" + "K"
                    }
                }
            },
            colors: [lightColor],
            grid: {  
                borderColor: borderColor,                
                strokeDashArray: 4,
                padding: {
                    top: 0,
                    right: -20,
                    bottom: -20,
                    left: -20
                },
                yaxis: {
                    lines: {
                        show: true
                    }
                }
            },
            markers: {
                strokeColor: baseColor,
                strokeWidth: 2
            }
        }; 

        chart.self = new ApexCharts(element, options);

        // Set timeout to properly get the parent elements width
        setTimeout(function() {
            chart.self.render();
            chart.rendered = true;
        }, 200); 
    }

    // Public methods
    return {
        init: function () {
            initChart(chart);

            // Update chart on theme mode change
            KTThemeMode.on("kt.thememode.change", function() {                
                if (chart.rendered) {
                    chart.self.destroy();
                }

                initChart(chart);
            });
        }     
    }
}();

// Webpack support
if (typeof module !== 'undefined') {
    module.exports = KTCardWidget13;
}

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTCardWidget13.init();
});
"use strict";

// Class definition
var KTCardsWidget17 = function () {
    // Private methods
    var initChart = function() {
        var el = document.getElementById('kt_card_widget_17_chart'); 

        if (!el) {
            return;
        }

        var options = {
            size: el.getAttribute('data-kt-size') ? parseInt(el.getAttribute('data-kt-size')) : 70,
            lineWidth: el.getAttribute('data-kt-line') ? parseInt(el.getAttribute('data-kt-line')) : 11,
            rotate: el.getAttribute('data-kt-rotate') ? parseInt(el.getAttribute('data-kt-rotate')) : 145,            
            //percent:  el.getAttribute('data-kt-percent') ,
        }

        var canvas = document.createElement('canvas');
        var span = document.createElement('span'); 
            
        if (typeof(G_vmlCanvasManager) !== 'undefined') {
            G_vmlCanvasManager.initElement(canvas);
        }

        var ctx = canvas.getContext('2d');
        canvas.width = canvas.height = options.size;

        el.appendChild(span);
        el.appendChild(canvas);

        ctx.translate(options.size / 2, options.size / 2); // change center
        ctx.rotate((-1 / 2 + options.rotate / 180) * Math.PI); // rotate -90 deg

        //imd = ctx.getImageData(0, 0, 240, 240);
        var radius = (options.size - options.lineWidth) / 2;

        var drawCircle = function(color, lineWidth, percent) {
            percent = Math.min(Math.max(0, percent || 1), 1);
            ctx.beginPath();
            ctx.arc(0, 0, radius, 0, Math.PI * 2 * percent, false);
            ctx.strokeStyle = color;
            ctx.lineCap = 'round'; // butt, round or square
            ctx.lineWidth = lineWidth
            ctx.stroke();
        };

        // Init 
        drawCircle('#E4E6EF', options.lineWidth, 100 / 100); 
        drawCircle(KTUtil.getCssVariableValue('--kt-primary'), options.lineWidth, 100 / 150);
        drawCircle(KTUtil.getCssVariableValue('--kt-success'), options.lineWidth, 100 / 250);   
    }

    // Public methods
    return {
        init: function () {
            initChart();
        }   
    }
}();

// Webpack support
if (typeof module !== 'undefined') {
    module.exports = KTCardsWidget17;
}

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTCardsWidget17.init();
});
   
        
        
        
           
"use strict";

// Class definition
var KTCardsWidget19 = function () {
    // Private methods
    var initChart = function() {
        var el = document.getElementById('kt_card_widget_19_chart'); 

        if (!el) {
            return;
        }

        var options = {
            size: el.getAttribute('data-kt-size') ? parseInt(el.getAttribute('data-kt-size')) : 70,
            lineWidth: el.getAttribute('data-kt-line') ? parseInt(el.getAttribute('data-kt-line')) : 11,
            rotate: el.getAttribute('data-kt-rotate') ? parseInt(el.getAttribute('data-kt-rotate')) : 145,            
            //percent:  el.getAttribute('data-kt-percent') ,
        }

        var canvas = document.createElement('canvas');
        var span = document.createElement('span'); 
            
        if (typeof(G_vmlCanvasManager) !== 'undefined') {
            G_vmlCanvasManager.initElement(canvas);
        }

        var ctx = canvas.getContext('2d');
        canvas.width = canvas.height = options.size;

        el.appendChild(span);
        el.appendChild(canvas);

        ctx.translate(options.size / 2, options.size / 2); // change center
        ctx.rotate((-1 / 2 + options.rotate / 180) * Math.PI); // rotate -90 deg

        //imd = ctx.getImageData(0, 0, 240, 240);
        var radius = (options.size - options.lineWidth) / 2;

        var drawCircle = function(color, lineWidth, percent) {
            percent = Math.min(Math.max(0, percent || 1), 1);
            ctx.beginPath();
            ctx.arc(0, 0, radius, 0, Math.PI * 2 * percent, false);
            ctx.strokeStyle = color;
            ctx.lineCap = 'round'; // butt, round or square
            ctx.lineWidth = lineWidth
            ctx.stroke();
        };

        // Init 
        drawCircle('#E4E6EF', options.lineWidth, 100 / 100); 
        drawCircle(KTUtil.getCssVariableValue('--kt-primary'), options.lineWidth, 100 / 150);
        drawCircle(KTUtil.getCssVariableValue('--kt-success'), options.lineWidth, 100 / 250);   
    }

    // Public methods
    return {
        init: function () {
            initChart();
        }   
    }
}();

// Webpack support
if (typeof module !== 'undefined') {
    module.exports = KTCardsWidget19;
}

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTCardsWidget19.init();
});
   
        
        
        
           
"use strict";

// Class definition
var KTCardsWidget4 = function () {
    // Private methods
    var initChart = function() {
        var el = document.getElementById('kt_card_widget_4_chart'); 

        if (!el) {
            return;
        }

        var options = {
            size: el.getAttribute('data-kt-size') ? parseInt(el.getAttribute('data-kt-size')) : 70,
            lineWidth: el.getAttribute('data-kt-line') ? parseInt(el.getAttribute('data-kt-line')) : 11,
            rotate: el.getAttribute('data-kt-rotate') ? parseInt(el.getAttribute('data-kt-rotate')) : 145,            
            //percent:  el.getAttribute('data-kt-percent') ,
        }

        var canvas = document.createElement('canvas');
        var span = document.createElement('span'); 
            
        if (typeof(G_vmlCanvasManager) !== 'undefined') {
            G_vmlCanvasManager.initElement(canvas);
        }

        var ctx = canvas.getContext('2d');
        canvas.width = canvas.height = options.size;

        el.appendChild(span);
        el.appendChild(canvas);

        ctx.translate(options.size / 2, options.size / 2); // change center
        ctx.rotate((-1 / 2 + options.rotate / 180) * Math.PI); // rotate -90 deg

        //imd = ctx.getImageData(0, 0, 240, 240);
        var radius = (options.size - options.lineWidth) / 2;

        var drawCircle = function(color, lineWidth, percent) {
            percent = Math.min(Math.max(0, percent || 1), 1);
            ctx.beginPath();
            ctx.arc(0, 0, radius, 0, Math.PI * 2 * percent, false);
            ctx.strokeStyle = color;
            ctx.lineCap = 'round'; // butt, round or square
            ctx.lineWidth = lineWidth
            ctx.stroke();
        };

        // Init 
        drawCircle('#E4E6EF', options.lineWidth, 100 / 100); 
        drawCircle(KTUtil.getCssVariableValue('--kt-danger'), options.lineWidth, 100 / 150);
        drawCircle(KTUtil.getCssVariableValue('--kt-primary'), options.lineWidth, 100 / 250);   
    }

    // Public methods
    return {
        init: function () {
            initChart();
        }   
    }
}();

// Webpack support
if (typeof module !== 'undefined') {
    module.exports = KTCardsWidget4;
}

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTCardsWidget4.init();
});
   
        
        
        
           
"use strict";

// Class definition
var KTCardsWidget6 = function () {
    // Private methods
    var initChart = function() {
        var element = document.getElementById("kt_card_widget_6_chart");

        if (!element) {
            return;
        }

        var height = parseInt(KTUtil.css(element, 'height'));
        var labelColor = KTUtil.getCssVariableValue('--kt-gray-500');
        var borderColor = KTUtil.getCssVariableValue('--kt-border-dashed-color');
        var baseColor = KTUtil.getCssVariableValue('--kt-primary');
        var secondaryColor = KTUtil.getCssVariableValue('--kt-gray-300');

        var options = {
            series: [{
                name: 'Sales',
                data: [30, 60, 53, 45, 60, 75, 53]
            }, ],
            chart: {
                fontFamily: 'inherit',
                type: 'bar',
                height: height,
                toolbar: {
                    show: false
                },
                sparkline: {
                    enabled: true
                }
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: ['55%'],
                    borderRadius: 6
                }
            },
            legend: {
                show: false,
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                show: true,
                width: 9,
                colors: ['transparent']
            },
            xaxis: {                
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false,
                    tickPlacement: 'between'
                },
                labels: {
                    show: false,
                    style: {
                        colors: labelColor,
                        fontSize: '12px'
                    }
                },
                crosshairs: {
                    show: false
                }
            },
            yaxis: {
                labels: {
                    show: false,
                    style: {
                        colors: labelColor,
                        fontSize: '12px'
                    }
                }
            },
            fill: {
                type: 'solid'
            },
            states: {
                normal: {
                    filter: {
                        type: 'none',
                        value: 0
                    }
                },
                hover: {
                    filter: {
                        type: 'none',
                        value: 0
                    }
                },
                active: {
                    allowMultipleDataPointsSelection: false,
                    filter: {
                        type: 'none',
                        value: 0
                    }
                }
            },
            tooltip: {
                style: {
                    fontSize: '12px'
                },
                x: {
                    formatter: function (val) {
                        return 'Feb: ' + val;
                    }
                },
                y: {
                    formatter: function (val) {
                        return val + "%" 
                    }
                }
            },
            colors: [baseColor, secondaryColor],
            grid: {
                padding: {
                    left: 10,
                    right: 10
                },
                borderColor: borderColor,
                strokeDashArray: 4,
                yaxis: {
                    lines: {
                        show: true
                    }
                }             
            }
        }; 

        var chart = new ApexCharts(element, options);
        
        // Set timeout to properly get the parent elements width
        setTimeout(function() {
            chart.render();   
        }, 300);     
    }

    // Public methods
    return {
        init: function () {
            initChart();
        }   
    }
}();

// Webpack support
if (typeof module !== 'undefined') {
    module.exports = KTCardsWidget6;
}

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTCardsWidget6.init();
});
   
        
        
        
           
"use strict";

// Class definition
var KTCardWidget8 = function () {
    var chart = {
        self: null,
        rendered: false
    };


    // Private methods
    var initChart = function(chart) {
        var element = document.getElementById("kt_card_widget_8_chart");

        if (!element) {
            return;
        }

        var height = parseInt(KTUtil.css(element, 'height'));       
        var borderColor = KTUtil.getCssVariableValue('--kt-border-dashed-color');
        var baseColor = KTUtil.getCssVariableValue('--kt-gray-800');
        var lightColor = KTUtil.getCssVariableValue('--kt-success');

        var options = {
            series: [{
                name: 'Sales',
                data: [4.5, 5.7, 2.8, 5.9, 4.2, 5.6, 5.2, 4.5, 5.9, 4.5, 5.7, 4.8, 5.7]
            }],
            chart: {
                fontFamily: 'inherit',
                type: 'area',
                height: height,
                toolbar: {
                    show: false
                }
            },             
            legend: {
                show: false
            },
            dataLabels: {
                enabled: false
            },
            fill: {
                type: 'solid',
                opacity: 0
            },
            stroke: {
                curve: 'smooth',
                show: true,
                width: 2,
                colors: [baseColor]
            },
            xaxis: {                 
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false
                },
                labels: {
                    show: false
                },
                crosshairs: {
                    position: 'front',
                    stroke: {
                        color: baseColor,
                        width: 1,
                        dashArray: 3
                    }
                },
                tooltip: {
                    enabled: true,
                    formatter: undefined,
                    offsetY: 0,
                    style: {
                        fontSize: '12px'
                    }
                }
            },
            yaxis: {
                labels: {
                    show: false
                }
            },
            states: {
                normal: {
                    filter: {
                        type: 'none',
                        value: 0
                    }
                },
                hover: {
                    filter: {
                        type: 'none',
                        value: 0
                    }
                },
                active: {
                    allowMultipleDataPointsSelection: false,
                    filter: {
                        type: 'none',
                        value: 0
                    }
                }
            },
            tooltip: {
                style: {
                    fontSize: '12px'
                },
                x: {
                    formatter: function (val) {
                        return "Feb " + val;
                    }
                },
                y: {
                    formatter: function (val) {
                        return "$" + val + "K"
                    }
                }
            },
            colors: [lightColor],
            grid: {  
                borderColor: borderColor,               
                strokeDashArray: 4,
                padding: {
                    top: 0,
                    right: -20,
                    bottom: -20,
                    left: -20
                },
                yaxis: {
                    lines: {
                        show: true
                    }
                }
            },
            markers: {
                strokeColor: baseColor,
                strokeWidth: 2
            }
        }; 

        chart.self = new ApexCharts(element, options);

        // Set timeout to properly get the parent elements width
        setTimeout(function() {
            chart.self.render();
            chart.rendered = true;
        }, 200);   
    }

    // Public methods
    return {
        init: function () {
            initChart(chart);

            // Update chart on theme mode change
            KTThemeMode.on("kt.thememode.change", function() {                
                if (chart.rendered) {
                    chart.self.destroy();
                }

                initChart(chart);
            });
        }   
    }
}();

// Webpack support
if (typeof module !== 'undefined') {
    module.exports = KTCardWidget8;
}

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTCardWidget8.init();
});

"use strict";

// Class definition
var KTCardWidget9 = function () {
    var chart = {
        self: null,
        rendered: false
    };
    
    // Private methods
    var initChart = function(chart) {
        var element = document.getElementById("kt_card_widget_9_chart");

        if (!element) {
            return;
        }

        var height = parseInt(KTUtil.css(element, 'height'));       
        var borderColor = KTUtil.getCssVariableValue('--kt-border-dashed-color');
        var baseColor = KTUtil.getCssVariableValue('--kt-gray-800');
        var lightColor = KTUtil.getCssVariableValue('--kt-success');

        var options = {
            series: [{
                name: 'Visitors',
                data: [1.5, 2.5, 2, 3, 2, 4, 2.5, 2, 2.5, 4, 2.5, 4.5, 2.5]
            }],
            chart: {
                fontFamily: 'inherit',
                type: 'area',
                height: height,
                toolbar: {
                    show: false
                }
            },             
            legend: {
                show: false
            },
            dataLabels: {
                enabled: false
            },
            fill: {
                type: 'solid',
                opacity: 0
            },
            stroke: {
                curve: 'smooth',
                show: true,
                width: 2,
                colors: [baseColor]
            },
            xaxis: {                 
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false
                },
                labels: {
                    show: false
                },
                crosshairs: {
                    position: 'front',
                    stroke: {
                        color: baseColor,
                        width: 1,
                        dashArray: 3
                    }
                },
                tooltip: {
                    enabled: true,
                    formatter: undefined,
                    offsetY: 0,
                    style: {
                        fontSize: '12px'
                    }
                }
            },
            yaxis: {
                labels: {
                    show: false
                }
            },
            states: {
                normal: {
                    filter: {
                        type: 'none',
                        value: 0
                    }
                },
                hover: {
                    filter: {
                        type: 'none',
                        value: 0
                    }
                },
                active: {
                    allowMultipleDataPointsSelection: false,
                    filter: {
                        type: 'none',
                        value: 0
                    }
                }
            },
            tooltip: {
                style: {
                    fontSize: '12px'
                },
                x: {
                    formatter: function (val) {
                        return "Feb " + val;
                    }
                },
                y: {
                    formatter: function (val) {
                        return val + "K"
                    }
                }
            },
            colors: [lightColor],
            grid: {  
                borderColor: borderColor,               
                strokeDashArray: 4,
                padding: {
                    top: 0,
                    right: -20,
                    bottom: -20,
                    left: -20
                },
                yaxis: {
                    lines: {
                        show: true
                    }
                }
            },
            markers: {
                strokeColor: baseColor,
                strokeWidth: 2
            }
        }; 

        chart.self = new ApexCharts(element, options);

        // Set timeout to properly get the parent elements width
        setTimeout(function() {
            chart.self.render();
            chart.rendered = true;
        }, 200);   
    }

    // Public methods
    return {
        init: function () {
            initChart(chart);

            // Update chart on theme mode change
            KTThemeMode.on("kt.thememode.change", function() {                
                if (chart.rendered) {
                    chart.self.destroy();
                }

                initChart(chart);
            });
        }   
    }
}();

// Webpack support
if (typeof module !== 'undefined') {
    module.exports = KTCardWidget9;
}

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTCardWidget9.init();
});
"use strict";

// Class definition
var KTMapsWidget1 = (function () {
    // Private methods
    var initMap = function () {
        // Check if amchart library is included
        if (typeof am5 === 'undefined') {
            return;
        }

        var element = document.getElementById("kt_maps_widget_1_map");

        if (!element) {
            return;
        }

        var root;

        var init = function() {
            // Create root element
            // https://www.amcharts.com/docs/v5/getting-started/#Root_element
            root = am5.Root.new(element);

            // Set themes
            // https://www.amcharts.com/docs/v5/concepts/themes/
            root.setThemes([am5themes_Animated.new(root)]);

            // Create the map chart
            // https://www.amcharts.com/docs/v5/charts/map-chart/
            var chart = root.container.children.push(
                am5map.MapChart.new(root, {
                    panX: "translateX",
                    panY: "translateY",
                    projection: am5map.geoMercator(),
					paddingLeft: 0,
					paddingrIGHT: 0,
					paddingBottom: 0
                })
            );

            // Create main polygon series for countries
            // https://www.amcharts.com/docs/v5/charts/map-chart/map-polygon-series/
            var polygonSeries = chart.series.push(
                am5map.MapPolygonSeries.new(root, {
                    geoJSON: am5geodata_worldLow,
                    exclude: ["AQ"],
                })
            );

            polygonSeries.mapPolygons.template.setAll({
                tooltipText: "{name}",
                toggleKey: "active",
                interactive: true,
				fill: am5.color(KTUtil.getCssVariableValue('--kt-gray-300')),
            });

            polygonSeries.mapPolygons.template.states.create("hover", {
                fill: am5.color(KTUtil.getCssVariableValue('--kt-success')),
            });

            polygonSeries.mapPolygons.template.states.create("active", {
                fill: am5.color(KTUtil.getCssVariableValue('--kt-success')),
            });

            // Highlighted Series
            // Create main polygon series for countries
            // https://www.amcharts.com/docs/v5/charts/map-chart/map-polygon-series/
            var polygonSeriesHighlighted = chart.series.push(
                am5map.MapPolygonSeries.new(root, {
                    //geoJSON: am5geodata_usaLow,
					geoJSON: am5geodata_worldLow,
					include: ['US', 'BR', 'DE', 'AU', 'JP']
                })
            );

            polygonSeriesHighlighted.mapPolygons.template.setAll({
                tooltipText: "{name}",
                toggleKey: "active",
                interactive: true,
            });

            var colors = am5.ColorSet.new(root, {});

            polygonSeriesHighlighted.mapPolygons.template.set(
                "fill",
				am5.color(KTUtil.getCssVariableValue('--kt-primary')),
            );

            polygonSeriesHighlighted.mapPolygons.template.states.create("hover", {
                fill: root.interfaceColors.get("primaryButtonHover"),
            });

            polygonSeriesHighlighted.mapPolygons.template.states.create("active", {
                fill: root.interfaceColors.get("primaryButtonHover"),
            });

            // Add zoom control
            // https://www.amcharts.com/docs/v5/charts/map-chart/map-pan-zoom/#Zoom_control
            //chart.set("zoomControl", am5map.ZoomControl.new(root, {}));

            // Set clicking on "water" to zoom out
            chart.chartContainer
                .get("background")
                .events.on("click", function () {
                    chart.goHome();
                });

            // Make stuff animate on load
            chart.appear(1000, 100);
        }

        // On amchart ready
        am5.ready(function () {
            init();
        }); // end am5.ready()

        // Update chart on theme mode change
		KTThemeMode.on("kt.thememode.change", function() {     
			// Destroy chart
			root.dispose();

			// Reinit chart
			init();
		});
    };

    // Public methods
    return {
        init: function () {
            initMap();
        },
    };
})();

// Webpack support
if (typeof module !== "undefined") {
    module.exports = KTMapsWidget1;
}

// On document ready
KTUtil.onDOMContentLoaded(function () {
    KTMapsWidget1.init();
});

"use strict";

// Class definition
var KTMapsWidget2 = (function () {
    // Private methods
    var initMap = function () {
        // Check if amchart library is included
        if (typeof am5 === 'undefined') {
            return;
        }

        var element = document.getElementById("kt_maps_widget_2_map");

        if (!element) {
            return;
        }

        // Root
        var root;

        var init = function() {
            // Create root element
            // https://www.amcharts.com/docs/v5/getting-started/#Root_element
            root = am5.Root.new(element);

            // Set themes
            // https://www.amcharts.com/docs/v5/concepts/themes/
            root.setThemes([am5themes_Animated.new(root)]);

            // Create the map chart
            // https://www.amcharts.com/docs/v5/charts/map-chart/
            var chart = root.container.children.push(
                am5map.MapChart.new(root, {
                    panX: "translateX",
                    panY: "translateY",
                    projection: am5map.geoMercator(),
					paddingLeft: 0,
					paddingrIGHT: 0,
					paddingBottom: 0
                })
            );

            // Create main polygon series for countries
            // https://www.amcharts.com/docs/v5/charts/map-chart/map-polygon-series/
            var polygonSeries = chart.series.push(
                am5map.MapPolygonSeries.new(root, {
                    geoJSON: am5geodata_worldLow,
                    exclude: ["AQ"],
                })
            );

            polygonSeries.mapPolygons.template.setAll({
                tooltipText: "{name}",
                toggleKey: "active",
                interactive: true,
				fill: am5.color(KTUtil.getCssVariableValue('--kt-gray-300')),
            });

            polygonSeries.mapPolygons.template.states.create("hover", {
                fill: am5.color(KTUtil.getCssVariableValue('--kt-success')),
            });

            polygonSeries.mapPolygons.template.states.create("active", {
                fill: am5.color(KTUtil.getCssVariableValue('--kt-success')),
            });

            // Highlighted Series
            // Create main polygon series for countries
            // https://www.amcharts.com/docs/v5/charts/map-chart/map-polygon-series/
            var polygonSeriesHighlighted = chart.series.push(
                am5map.MapPolygonSeries.new(root, {
                    //geoJSON: am5geodata_usaLow,
					geoJSON: am5geodata_worldLow,
					include: ['US', 'BR', 'DE', 'AU', 'JP']
                })
            );

            polygonSeriesHighlighted.mapPolygons.template.setAll({
                tooltipText: "{name}",
                toggleKey: "active",
                interactive: true,
            });

            var colors = am5.ColorSet.new(root, {});

            polygonSeriesHighlighted.mapPolygons.template.set(
                "fill",
				am5.color(KTUtil.getCssVariableValue('--kt-primary')),
            );

            polygonSeriesHighlighted.mapPolygons.template.states.create("hover", {
                fill: root.interfaceColors.get("primaryButtonHover"),
            });

            polygonSeriesHighlighted.mapPolygons.template.states.create("active", {
                fill: root.interfaceColors.get("primaryButtonHover"),
            });

            // Add zoom control
            // https://www.amcharts.com/docs/v5/charts/map-chart/map-pan-zoom/#Zoom_control
            //chart.set("zoomControl", am5map.ZoomControl.new(root, {}));

            // Set clicking on "water" to zoom out
            chart.chartContainer
                .get("background")
                .events.on("click", function () {
                    chart.goHome();
                });

            // Make stuff animate on load
            chart.appear(1000, 100);
        }

        // On amchart ready
        am5.ready(function () {
            init();
        }); // end am5.ready()

        // Update chart on theme mode change
		KTThemeMode.on("kt.thememode.change", function() {     
			// Destroy chart
			root.dispose();

			// Reinit chart
			init();
		});
    };

    // Public methods
    return {
        init: function () {
            initMap();
        },
    };
})();

// Webpack support
if (typeof module !== "undefined") {
    module.exports = KTMapsWidget2;
}

// On document ready
KTUtil.onDOMContentLoaded(function () {
    KTMapsWidget2.init();
});

"use strict";

// Class definition
var KTTimelineWidget24 = function () {
    // Private methods
    var handleActions = function() {
        var card = document.querySelector('#kt_list_widget_24');        
        
        if ( !card ) {
            return;
        }

        // Checkbox Handler
        KTUtil.on(card, '[data-kt-element="follow"]', 'click', function (e) {
            if ( this.innerText === 'Following' ) {
                this.innerText = 'Follow';
                this.classList.add('btn-light-primary');
                this.classList.remove('btn-primary');
                this.blur();
            } else {
                this.innerText = 'Following';
                this.classList.add('btn-primary');
                this.classList.remove('btn-light-primary');
                this.blur();
            }
        });
    }

    // Public methods
    return {
        init: function () {           
            handleActions();             
        }   
    }
}();

// Webpack support
if (typeof module !== 'undefined') {
    module.exports = KTTimelineWidget24;
}

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTTimelineWidget24.init();
}); 

"use strict";

// Class definition
var KTPlayersWidget1 = function () {
    // Private methods
    var initPlayers = function() {
        // https://www.w3schools.com/jsref/dom_obj_audio.asp
        // Toggle Handler
        KTUtil.on(document.body, '[data-kt-element="list-play-button"]', 'click', function (e) {
            var currentButton = this;

            var audio = document.querySelector('[data-kt-element="audio-track-1"]');
            var playIcon = this.querySelector('[data-kt-element="list-play-icon"]');
            var pauseIcon = this.querySelector('[data-kt-element="list-pause-icon"]');

            if (pauseIcon.classList.contains('d-none')) {
                audio.play();

                playIcon.classList.add('d-none');
                pauseIcon.classList.remove('d-none');
            } else {
                audio.pause();

                playIcon.classList.remove('d-none');
                pauseIcon.classList.add('d-none');
            }
            
            var buttons = [].slice.call(document.querySelectorAll('[data-kt-element="list-play-button"]'));
            buttons.map(function (button) {
                if (button !== currentButton) {
                    var playIcon = button.querySelector('[data-kt-element="list-play-icon"]');
                    var pauseIcon = button.querySelector('[data-kt-element="list-pause-icon"]');

                    playIcon.classList.remove('d-none');
                    pauseIcon.classList.add('d-none');
                }
            });
        });
    }

    // Public methods
    return {
        init: function () {
            initPlayers();
        }   
    }
}();

// Webpack support
if (typeof module !== 'undefined') {
    module.exports = KTPlayersWidget1;
}

// Window load
window.addEventListener("load", function() {
    KTPlayersWidget1.init();
}); 
        
        
        
           
"use strict";

// Class definition
var KTPlayersWidget2 = function () {
    // Private methods
    var initPlayer = function() {
        // https://www.w3schools.com/jsref/dom_obj_audio.asp
        var element = document.getElementById("kt_player_widget_2");

        if ( !element ) {
            return;
        }

        var audio = element.querySelector('[data-kt-element="audio-track-1"]');
        var progress = element.querySelector('[data-kt-element="progress"]');        
        var currentTime = element.querySelector('[data-kt-element="current-time"]');
        var duration = element.querySelector('[data-kt-element="duration"]');
        var playButton = element.querySelector('[data-kt-element="play-button"]');
        var playIcon = element.querySelector('[data-kt-element="play-icon"]');
        var pauseIcon = element.querySelector('[data-kt-element="pause-icon"]');

        var replayButton = element.querySelector('[data-kt-element="replay-button"]');
        var shuffleButton = element.querySelector('[data-kt-element="shuffle-button"]');
        var playNextButton = element.querySelector('[data-kt-element="play-next-button"]');
        var playPrevButton = element.querySelector('[data-kt-element="play-prev-button"]');

        var formatTime = function(time) {
            var s = parseInt(time % 60);
            var m = parseInt((time / 60) % 60);

            return m + ':' + (s < 10 ? '0' : '') + s;
        }

        // Duration
        duration.innerHTML = formatTime(audio.duration); 

        // Update progress
        var setBarProgress = function() {
            progress.value = (audio.currentTime / audio.duration) * 100;
        }
        
        // Handle audio update
        var handleAudioUpdate = function() {
            currentTime.innerHTML = formatTime(audio.currentTime);

            setBarProgress();

            if (this.ended) {
                playIcon.classList.remove('d-none');
                pauseIcon.classList.add('d-none');
            }
        }

        audio.addEventListener('timeupdate', handleAudioUpdate);

        // Handle play
        playButton.addEventListener('click', function() {
            if (audio.duration > 0 && !audio.paused) {
                audio.pause();

                playIcon.classList.remove('d-none');
                pauseIcon.classList.add('d-none');
            } else if (audio.readyState >= 2) {
                audio.play();

                playIcon.classList.add('d-none');
                pauseIcon.classList.remove('d-none');
            }
        });

        // Handle replay
        replayButton.addEventListener('click', function() {
            if (audio.readyState >= 2) {
                audio.currentTime = 0;
                audio.play();

                playIcon.classList.add('d-none');
                pauseIcon.classList.remove('d-none');
            }
        });

        // Handle prev play
        playPrevButton.addEventListener('click', function() {
            if (audio.readyState >= 2) {
                audio.currentTime = 0;
                audio.play();

                playIcon.classList.add('d-none');
                pauseIcon.classList.remove('d-none');
            }
        });

        // Handle next play
        playNextButton.addEventListener('click', function() {
            if (audio.readyState >= 2) {
                audio.currentTime = 0;
                audio.play();

                playIcon.classList.add('d-none');
                pauseIcon.classList.remove('d-none');
            }
        });

        // Shuffle replay
        shuffleButton.addEventListener('click', function() {
            if (audio.readyState >= 2) {
                audio.currentTime = 0;
                audio.play();

                playIcon.classList.add('d-none');
                pauseIcon.classList.remove('d-none');
            }
        });

        // Handle track change
        progress.addEventListener('change', function() {
            audio.currentTime = progress.value;

            playIcon.classList.add('d-none');
            pauseIcon.classList.remove('d-none');
            audio.play();
        });
    }

    // Public methods
    return {
        init: function () {
            initPlayer();
        }   
    }
}();

// Webpack support
if (typeof module !== 'undefined') {
    module.exports = KTPlayersWidget2;
}

// Window load
window.addEventListener("load", function() {
    KTPlayersWidget2.init();
}); 
"use strict";

// Class definition
var KTSlidersWidget1 = function() {
    var chart1 = {
        self: null,
        rendered: false
    };

    var chart2 = {
        self: null,
        rendered: false
    };

    var chart3 = {
        self: null,
        rendered: false
    };

    // Private methods
    var initChart = function(chart, query, data) {
        var element = document.querySelector(query);

        if ( !element) {
            return;
        }              
        
        if ( chart.rendered === true && element.classList.contains("initialized") ) {
            return;
        }

        var height = parseInt(KTUtil.css(element, 'height'));
        var baseColor = KTUtil.getCssVariableValue('--kt-' + 'primary');
        var lightColor = KTUtil.getCssVariableValue('--kt-' + 'primary-light' );         

        var options = {
            series: [data],
            chart: {
                fontFamily: 'inherit',
                height: height,
                type: 'radialBar',
                sparkline: {
                    enabled: true,
                }
            },
            plotOptions: {
                radialBar: {
                    hollow: {
                        margin: 0,
                        size: "45%"
                    },
                    dataLabels: {
                        showOn: "always",
                        name: {
                            show: false                                 
                        },
                        value: {                                 
                            show: false                              
                        }
                    },
                    track: {
                        background: lightColor,
                        strokeWidth: '100%'
                    }
                }
            },
            colors: [baseColor],
            stroke: {
                lineCap: "round",
            },
            labels: ["Progress"]
        };

        chart.self = new ApexCharts(element, options);
        chart.self.render();
        chart.rendered = true;

        element.classList.add('initialized');
    }

    // Public methods
    return {
        init: function () {
            // Init default chart
            initChart(chart1, '#kt_slider_widget_1_chart_1', 76);

            var carousel = document.querySelector('#kt_sliders_widget_1_slider');
            
            if ( !carousel ) {
                return;
            }

            // Init slide charts
            carousel.addEventListener('slid.bs.carousel', function (e) {
                if (e.to === 1) {
                    // Init second chart
                    initChart(chart2, '#kt_slider_widget_1_chart_2', 55);
                }

                if (e.to === 2) {
                    // Init third chart
                    initChart(chart3, '#kt_slider_widget_1_chart_3', 25);
                }
            });

            // Update chart on theme mode change
            KTThemeMode.on("kt.thememode.change", function() {                
                if (chart1.rendered) {
                    chart1.self.destroy();
                    chart1.rendered = false;
                }

                if (chart2.rendered) {
                    chart2.self.destroy();
                    chart2.rendered = false;
                }

                if (chart3.rendered) {
                    chart3.self.destroy();
                    chart3.rendered = false;
                }

                initChart(chart1, '#kt_slider_widget_1_chart_1', 76);
                initChart(chart2, '#kt_slider_widget_1_chart_2', 55);
                initChart(chart3, '#kt_slider_widget_1_chart_3', 25);
            });
        }   
    }        
}();


// Webpack support
if (typeof module !== 'undefined') {
    module.exports = KTSlidersWidget1;
}

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTSlidersWidget1.init();
});
   
        
        
        
           
"use strict";

// Class definition
var KTSlidersWidget3 = function () {
    var chart1 = {
        self: null,
        rendered: false
    };

    var chart2 = {
        self: null,
        rendered: false
    };

    // Private methods
    var initChart = function(chart, query, color, data) {
        var element = document.querySelector(query);

        if (!element) {
            return;
        }
        
        if ( chart.rendered === true && element.classList.contains("initialized") ) {
            return;
        }

        var height = parseInt(KTUtil.css(element, 'height'));
        var labelColor = KTUtil.getCssVariableValue('--kt-gray-500');
        var borderColor = KTUtil.getCssVariableValue('--kt-border-dashed-color');
        var baseColor = KTUtil.getCssVariableValue('--kt-' + color);

        var options = {
            series: [{
                name: 'Lessons',
                data: data
            }],            
            chart: {
                fontFamily: 'inherit',
                type: 'area',
                height: height,
                toolbar: {
                    show: false
                }
            },
            plotOptions: {

            },
            legend: {
                show: false
            },
            dataLabels: {
                enabled: false
            },
            fill: {
                type: "gradient",
                gradient: {
                    shadeIntensity: 1,
                    opacityFrom: 0.4,
                    opacityTo: 0,
                    stops: [0, 80, 100]
                }
            },
            stroke: {
                curve: 'smooth',
                show: true,
                width: 3,
                colors: [baseColor]
            },
            xaxis: {
                categories: ['', 'Apr 05', 'Apr 06', 'Apr 07', 'Apr 08', 'Apr 09', 'Apr 11', 'Apr 12', 'Apr 14', 'Apr 15', 'Apr 16', 'Apr 17', 'Apr 18', ''],
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false
                },
                tickAmount: 6,
                labels: {
                    rotate: 0,
                    rotateAlways: true,
                    style: {
                        colors: labelColor,
                        fontSize: '12px'
                    }
                },
                crosshairs: {
                    position: 'front',
                    stroke: {
                        color: baseColor,
                        width: 1,
                        dashArray: 3
                    }
                },
                tooltip: {
                    enabled: true,
                    formatter: undefined,
                    offsetY: 0,
                    style: {
                        fontSize: '12px'
                    }
                }
            },
            yaxis: {
                tickAmount: 4,
                max: 24,
                min: 10,
                labels: {
                    style: {
                        colors: labelColor,
                        fontSize: '12px'
                    } 
                }
            },
            states: {
                normal: {
                    filter: {
                        type: 'none',
                        value: 0
                    }
                },
                hover: {
                    filter: {
                        type: 'none',
                        value: 0
                    }
                },
                active: {
                    allowMultipleDataPointsSelection: false,
                    filter: {
                        type: 'none',
                        value: 0
                    }
                }
            },
            tooltip: {
                style: {
                    fontSize: '12px'
                } 
            },
            colors: [baseColor],
            grid: {
                borderColor: borderColor,
                strokeDashArray: 4,
                yaxis: {
                    lines: {
                        show: true
                    }
                }
            },
            markers: {
                strokeColor: baseColor,
                strokeWidth: 3
            }
        };

        chart.self = new ApexCharts(element, options);
        chart.self.render();
        chart.rendered = true;

        element.classList.add('initialized');   
    }

    // Public methods
    return {
        init: function () {
            var data1 = [19, 21, 21, 20, 20, 18, 18, 20, 20, 22, 22, 21, 21, 22];
            var data2 = [18, 22, 22, 20, 20, 18, 18, 20, 20, 18, 18, 20, 20, 22];
            
            // Init default chart
            initChart(chart1, '#kt_sliders_widget_3_chart_1', 'danger', data1);

            var carousel = document.querySelector('#kt_sliders_widget_3_slider');

            if ( !carousel ){
                return;
            }
            
            carousel.addEventListener('slid.bs.carousel', function (e) {
                if (e.to === 1) {
                    // Init second chart
                    initChart(chart2, '#kt_sliders_widget_3_chart_2', 'primary', data2);
                }                
            });

            // Update chart on theme mode change
            KTThemeMode.on("kt.thememode.change", function() {                
                if (chart1.rendered) {
                    chart1.self.destroy();
                    chart1.rendered = false;
                }

                if (chart2.rendered) {
                    chart2.self.destroy();
                    chart2.rendered = false;
                }

                initChart(chart1, '#kt_sliders_widget_3_chart_1', 'danger', data1);
                initChart(chart2, '#kt_sliders_widget_3_chart_2', 'primary', data2);
            });
        }   
    }
}();

// Webpack support
if (typeof module !== 'undefined') {
    module.exports = KTSlidersWidget3;
}

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTSlidersWidget3.init();
});

"use strict";

// Class definition
var KTTimelineWidget1 = function () {
    // Private methods
    // Day timeline
    const initTimelineDay = () => {
        // Detect element
        const element = document.querySelector('#kt_timeline_widget_1_1');
        if (!element) {
            return;
        }

        if(element.innerHTML){
            return;
        }

        // Set variables
        var now = Date.now();
        var rootImagePath = element.getAttribute('data-kt-timeline-widget-1-image-root');

        // Build vis-timeline datasets
        var groups = new vis.DataSet([
            {
                id: "research",
                content: "Research",
                order: 1
            },
            {
                id: "qa",
                content: "Phase 2.6 QA",
                order: 2
            },
            {
                id: "ui",
                content: "UI Design",
                order: 3
            },
            {
                id: "dev",
                content: "Development",
                order: 4
            }
        ]);


        var items = new vis.DataSet([
            {
                id: 1,
                group: 'research',
                start: now,
                end: moment(now).add(1.5, 'hours'),
                content: 'Meeting',
                progress: "60%",
                color: 'primary',
                users: [
                    'avatars/300-6.jpg',
                    'avatars/300-1.jpg'
                ]
            },
            {
                id: 2,
                group: 'qa',
                start: moment(now).add(1, 'hours'),
                end: moment(now).add(2, 'hours'),
                content: 'Testing',
                progress: "47%",
                color: 'success',
                users: [
                    'avatars/300-2.jpg'
                ]
            },
            {
                id: 3,
                group: 'ui',
                start: moment(now).add(30, 'minutes'),
                end: moment(now).add(2.5, 'hours'),
                content: 'Landing page',
                progress: "55%",
                color: 'danger',
                users: [
                    'avatars/300-5.jpg',
                    'avatars/300-20.jpg'
                ]
            },
            {
                id: 4,
                group: 'dev',
                start: moment(now).add(1.5, 'hours'),
                end: moment(now).add(3, 'hours'),
                content: 'Products module',
                progress: "75%",
                color: 'info',
                users: [
                    'avatars/300-23.jpg',
                    'avatars/300-12.jpg',
                    'avatars/300-9.jpg'
                ]
            },
        ]);

        // Set vis-timeline options
        var options = {
            zoomable: false,
            moveable: false,
            selectable: false,
            // More options https://visjs.github.io/vis-timeline/docs/timeline/#Configuration_Options
            margin: {
                item: {
                    horizontal: 10,
                    vertical: 35
                }
            },

            // Remove current time line --- more info: https://visjs.github.io/vis-timeline/docs/timeline/#Configuration_Options
            showCurrentTime: false,

            // Whitelist specified tags and attributes from template --- more info: https://visjs.github.io/vis-timeline/docs/timeline/#Configuration_Options
            xss: {
                disabled: false,
                filterOptions: {
                    whiteList: {
                        div: ['class', 'style'],
                        img: ['data-kt-timeline-avatar-src', 'alt'],
                        a: ['href', 'class']
                    },
                },
            },
            // specify a template for the items
            template: function (item) {
                // Build users group
                const users = item.users;
                let userTemplate = '';
                users.forEach(user => {
                    userTemplate += `<div class="symbol symbol-circle symbol-25px"><img data-kt-timeline-avatar-src="${rootImagePath + user}" alt="" /></div>`;
                });

                return `<div class="rounded-pill bg-light-${item.color} d-flex align-items-center position-relative h-40px w-100 p-2 overflow-hidden">
                    <div class="position-absolute rounded-pill d-block bg-${item.color} start-0 top-0 h-100 z-index-1" style="width: ${item.progress};"></div>
        
                    <div class="d-flex align-items-center position-relative z-index-2">
                        <div class="symbol-group symbol-hover flex-nowrap me-3">
                            ${userTemplate}
                        </div>
        
                        <a href="#" class="fw-bold text-white text-hover-dark">${item.content}</a>
                    </div>
        
                    <div class="d-flex flex-center bg-body rounded-pill fs-7 fw-bolder ms-auto h-100 px-3 position-relative z-index-2">
                        ${item.progress}
                    </div>
                </div>        
                `;
            },

            // Remove block ui on initial draw
            onInitialDrawComplete: function () {
                handleAvatarPath();

                const target = element.closest('[data-kt-timeline-widget-1-blockui="true"]');
                const blockUI = KTBlockUI.getInstance(target);

                if (blockUI.isBlocked()) {
                    setTimeout(() => {
                        blockUI.release();
                    }, 1000);      
                }
            }
        };

        // Init vis-timeline
        const timeline = new vis.Timeline(element, items, groups, options);

        // Prevent infinite loop draws
        timeline.on("currentTimeTick", () => {            
            // After fired the first time we un-subscribed
            timeline.off("currentTimeTick");
        });
    }

    // Week timeline
    const initTimelineWeek = () => {
        // Detect element
        const element = document.querySelector('#kt_timeline_widget_1_2');
        if (!element) {
            return;
        }

        if(element.innerHTML){
            return;
        }

        // Set variables
        var now = Date.now();
        var rootImagePath = element.getAttribute('data-kt-timeline-widget-1-image-root');

        // Build vis-timeline datasets
        var groups = new vis.DataSet([
            {
                id: 1,
                content: "Research",
                order: 1
            },
            {
                id: 2,
                content: "Phase 2.6 QA",
                order: 2
            },
            {
                id: 3,
                content: "UI Design",
                order: 3
            },
            {
                id: 4,
                content: "Development",
                order: 4
            }
        ]);


        var items = new vis.DataSet([
            {
                id: 1,
                group: 1,
                start: now,
                end: moment(now).add(7, 'days'),
                content: 'Framework',
                progress: "71%",
                color: 'primary',
                users: [
                    'avatars/300-6.jpg',
                    'avatars/300-1.jpg'
                ]
            },
            {
                id: 2,
                group: 2,
                start: moment(now).add(7, 'days'),
                end: moment(now).add(14, 'days'),
                content: 'Accessibility',
                progress: "84%",
                color: 'success',
                users: [
                    'avatars/300-2.jpg'
                ]
            },
            {
                id: 3,
                group: 3,
                start: moment(now).add(3, 'days'),
                end: moment(now).add(20, 'days'),
                content: 'Microsites',
                progress: "69%",
                color: 'danger',
                users: [
                    'avatars/300-5.jpg',
                    'avatars/300-20.jpg'
                ]
            },
            {
                id: 4,
                group: 4,
                start: moment(now).add(10, 'days'),
                end: moment(now).add(21, 'days'),
                content: 'Deployment',
                progress: "74%",
                color: 'info',
                users: [
                    'avatars/300-23.jpg',
                    'avatars/300-12.jpg',
                    'avatars/300-9.jpg'
                ]
            },
        ]);

        // Set vis-timeline options
        var options = {
            zoomable: false,
            moveable: false,
            selectable: false,

            // More options https://visjs.github.io/vis-timeline/docs/timeline/#Configuration_Options
            margin: {
                item: {
                    horizontal: 10,
                    vertical: 35
                }
            },

            // Remove current time line --- more info: https://visjs.github.io/vis-timeline/docs/timeline/#Configuration_Options
            showCurrentTime: false,

            // Whitelist specified tags and attributes from template --- more info: https://visjs.github.io/vis-timeline/docs/timeline/#Configuration_Options
            xss: {
                disabled: false,
                filterOptions: {
                    whiteList: {
                        div: ['class', 'style'],
                        img: ['data-kt-timeline-avatar-src', 'alt'],
                        a: ['href', 'class']
                    },
                },
            },
            // specify a template for the items
            template: function (item) {
                // Build users group
                const users = item.users;
                let userTemplate = '';
                users.forEach(user => {
                    userTemplate += `<div class="symbol symbol-circle symbol-25px"><img data-kt-timeline-avatar-src="${rootImagePath + user}" alt="" /></div>`;
                });

                return `<div class="rounded-pill bg-light-${item.color} d-flex align-items-center position-relative h-40px w-100 p-2 overflow-hidden">
                    <div class="position-absolute rounded-pill d-block bg-${item.color} start-0 top-0 h-100 z-index-1" style="width: ${item.progress};"></div>
        
                    <div class="d-flex align-items-center position-relative z-index-2">
                        <div class="symbol-group symbol-hover flex-nowrap me-3">
                            ${userTemplate}
                        </div>
        
                        <a href="#" class="fw-bold text-white text-hover-dark">${item.content}</a>
                    </div>
        
                    <div class="d-flex flex-center bg-body rounded-pill fs-7 fw-bolder ms-auto h-100 px-3 position-relative z-index-2">
                        ${item.progress}
                    </div>
                </div>        
                `;
            },

            // Remove block ui on initial draw
            onInitialDrawComplete: function () {
                handleAvatarPath();

                const target = element.closest('[data-kt-timeline-widget-1-blockui="true"]');
                const blockUI = KTBlockUI.getInstance(target);

                if (blockUI.isBlocked()) {
                    setTimeout(() => {
                        blockUI.release();
                    }, 1000);      
                }
            }
        };

        // Init vis-timeline
        const timeline = new vis.Timeline(element, items, groups, options);

        // Prevent infinite loop draws
        timeline.on("currentTimeTick", () => {            
            // After fired the first time we un-subscribed
            timeline.off("currentTimeTick");
        });
    }

    // Month timeline
    const initTimelineMonth = () => {
        // Detect element
        const element = document.querySelector('#kt_timeline_widget_1_3');
        if (!element) {
            return;
        }

        if(element.innerHTML){
            return;
        }

        // Set variables
        var now = Date.now();
        var rootImagePath = element.getAttribute('data-kt-timeline-widget-1-image-root');

        // Build vis-timeline datasets
        var groups = new vis.DataSet([
            {
                id: "research",
                content: "Research",
                order: 1
            },
            {
                id: "qa",
                content: "Phase 2.6 QA",
                order: 2
            },
            {
                id: "ui",
                content: "UI Design",
                order: 3
            },
            {
                id: "dev",
                content: "Development",
                order: 4
            }
        ]);


        var items = new vis.DataSet([
            {
                id: 1,
                group: 'research',
                start: now,
                end: moment(now).add(2, 'months'),
                content: 'Tags',
                progress: "79%",
                color: 'primary',
                users: [
                    'avatars/300-6.jpg',
                    'avatars/300-1.jpg'
                ]
            },
            {
                id: 2,
                group: 'qa',
                start: moment(now).add(0.5, 'months'),
                end: moment(now).add(5, 'months'),
                content: 'Testing',
                progress: "64%",
                color: 'success',
                users: [
                    'avatars/300-2.jpg'
                ]
            },
            {
                id: 3,
                group: 'ui',
                start: moment(now).add(2, 'months'),
                end: moment(now).add(6.5, 'months'),
                content: 'Media',
                progress: "82%",
                color: 'danger',
                users: [
                    'avatars/300-5.jpg',
                    'avatars/300-20.jpg'
                ]
            },
            {
                id: 4,
                group: 'dev',
                start: moment(now).add(4, 'months'),
                end: moment(now).add(7, 'months'),
                content: 'Plugins',
                progress: "58%",
                color: 'info',
                users: [
                    'avatars/300-23.jpg',
                    'avatars/300-12.jpg',
                    'avatars/300-9.jpg'
                ]
            },
        ]);

        // Set vis-timeline options
        var options = {
            zoomable: false,
            moveable: false,
            selectable: false,

            // More options https://visjs.github.io/vis-timeline/docs/timeline/#Configuration_Options
            margin: {
                item: {
                    horizontal: 10,
                    vertical: 35
                }
            },

            // Remove current time line --- more info: https://visjs.github.io/vis-timeline/docs/timeline/#Configuration_Options
            showCurrentTime: false,

            // Whitelist specified tags and attributes from template --- more info: https://visjs.github.io/vis-timeline/docs/timeline/#Configuration_Options
            xss: {
                disabled: false,
                filterOptions: {
                    whiteList: {
                        div: ['class', 'style'],
                        img: ['data-kt-timeline-avatar-src', 'alt'],
                        a: ['href', 'class']
                    },
                },
            },
            // specify a template for the items
            template: function (item) {
                // Build users group
                const users = item.users;
                let userTemplate = '';
                users.forEach(user => {
                    userTemplate += `<div class="symbol symbol-circle symbol-25px"><img data-kt-timeline-avatar-src="${rootImagePath + user}" alt="" /></div>`;
                });

                return `<div class="rounded-pill bg-light-${item.color} d-flex align-items-center position-relative h-40px w-100 p-2 overflow-hidden">
                    <div class="position-absolute rounded-pill d-block bg-${item.color} start-0 top-0 h-100 z-index-1" style="width: ${item.progress};"></div>
        
                    <div class="d-flex align-items-center position-relative z-index-2">
                        <div class="symbol-group symbol-hover flex-nowrap me-3">
                            ${userTemplate}
                        </div>
        
                        <a href="#" class="fw-bold text-white text-hover-dark">${item.content}</a>
                    </div>
        
                    <div class="d-flex flex-center bg-body rounded-pill fs-7 fw-bolder ms-auto h-100 px-3 position-relative z-index-2">
                        ${item.progress}
                    </div>
                </div>        
                `;
            },

            // Remove block ui on initial draw
            onInitialDrawComplete: function () {
                handleAvatarPath();
                
                const target = element.closest('[data-kt-timeline-widget-1-blockui="true"]');
                const blockUI = KTBlockUI.getInstance(target);

                if (blockUI.isBlocked()) {
                    setTimeout(() => {
                        blockUI.release();
                    }, 1000);                    
                }
            }
        };

        // Init vis-timeline
        const timeline = new vis.Timeline(element, items, groups, options);

        // Prevent infinite loop draws
        timeline.on("currentTimeTick", () => {            
            // After fired the first time we un-subscribed
            timeline.off("currentTimeTick");
        });
    }

    // Handle BlockUI
    const handleBlockUI = () => {
        // Select block ui elements
        const elements = document.querySelectorAll('[data-kt-timeline-widget-1-blockui="true"]');

        // Init block ui
        elements.forEach(element => {
            const blockUI = new KTBlockUI(element, {
                overlayClass: "bg-body",
            });

            blockUI.block();
        });
    }

    // Handle tabs visibility
    const tabsVisibility = () => {
        const tabs = document.querySelectorAll('[data-kt-timeline-widget-1="tab"]');

        tabs.forEach(tab => {
            tab.addEventListener('shown.bs.tab', e => {
                // Week tab
                if(tab.getAttribute('href') === '#kt_timeline_widget_1_tab_week'){
                    initTimelineWeek();
                }

                // Month tab
                if(tab.getAttribute('href') === '#kt_timeline_widget_1_tab_month'){
                    initTimelineMonth();
                }
            });
        });
    }

    // Handle avatar path conflict
    const handleAvatarPath = () => {
        const avatars = document.querySelectorAll('[data-kt-timeline-avatar-src]');

        if(!avatars){
            return;
        }

        avatars.forEach(avatar => {
            avatar.setAttribute('src', avatar.getAttribute('data-kt-timeline-avatar-src'));
            avatar.removeAttribute('data-kt-timeline-avatar-src');
        });
    }

    // Public methods
    return {
        init: function () {
            initTimelineDay();
            handleBlockUI();
            tabsVisibility();
        }
    }
}();

// Webpack support
if (typeof module !== 'undefined') {
    module.exports = KTTimelineWidget1;
}

// On document ready
KTUtil.onDOMContentLoaded(function () {
    KTTimelineWidget1.init();
});

"use strict";

// Class definition
var KTTimelineWidget2 = function () {
    // Private methods
    var handleCheckbox = function() {
        var card = document.querySelector('#kt_timeline_widget_2_card');        
        
        if (!card) {
            return;
        }

        // Checkbox Handler
        KTUtil.on(card, '[data-kt-element="checkbox"]', 'change', function (e) {
            var check = this.closest('.form-check');
            var tr = this.closest('tr');
            var bullet = tr.querySelector('[data-kt-element="bullet"]');
            var status = tr.querySelector('[data-kt-element="status"]');

            if ( this.checked === true ) {
                check.classList.add('form-check-success');

                bullet.classList.remove('bg-primary');
                bullet.classList.add('bg-success');

                status.innerText = 'Done';
                status.classList.remove('badge-light-primary');
                status.classList.add('badge-light-success');
            } else {
                check.classList.remove('form-check-success');

                bullet.classList.remove('bg-success');
                bullet.classList.add('bg-primary');

                status.innerText = 'In Process';
                status.classList.remove('badge-light-success');
                status.classList.add('badge-light-primary');
            }
        });
    }

    // Public methods
    return {
        init: function () {           
            handleCheckbox();             
        }   
    }
}();

// Webpack support
if (typeof module !== 'undefined') {
    module.exports = KTTimelineWidget2;
}

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTTimelineWidget2.init();
});


 
"use strict";

// Class definition
var KTTimelineWidget4 = function () {
    // Private methods
    // Day timeline
    const initTimelineDay = () => {
        // Detect element
        const element = document.querySelector('#kt_timeline_widget_4_1');
        if (!element) {
            return;
        }

        if(element.innerHTML){
            return;
        }

        // Set variables
        var now = Date.now();
        var rootImagePath = element.getAttribute('data-kt-timeline-widget-4-image-root');

        // Build vis-timeline datasets
        var groups = new vis.DataSet([
            {
                id: "research",
                content: "Research",
                order: 1
            },
            {
                id: "qa",
                content: "Phase 2.6 QA",
                order: 2
            },
            {
                id: "ui",
                content: "UI Design",
                order: 3
            },
            {
                id: "dev",
                content: "Development",
                order: 4
            }
        ]);


        var items = new vis.DataSet([
            {
                id: 1,
                group: 'research',
                start: now,
                end: moment(now).add(1.5, 'hours'),
                content: 'Meeting',
                progress: "60%",
                color: 'primary',
                users: [
                    'avatars/300-6.jpg',
                    'avatars/300-1.jpg'
                ]
            },
            {
                id: 2,
                group: 'qa',
                start: moment(now).add(1, 'hours'),
                end: moment(now).add(2, 'hours'),
                content: 'Testing',
                progress: "47%",
                color: 'success',
                users: [
                    'avatars/300-2.jpg'
                ]
            },
            {
                id: 3,
                group: 'ui',
                start: moment(now).add(30, 'minutes'),
                end: moment(now).add(2.5, 'hours'),
                content: 'Landing page',
                progress: "55%",
                color: 'danger',
                users: [
                    'avatars/300-5.jpg',
                    'avatars/300-20.jpg'
                ]
            },
            {
                id: 4,
                group: 'dev',
                start: moment(now).add(1.5, 'hours'),
                end: moment(now).add(3, 'hours'),
                content: 'Products module',
                progress: "75%",
                color: 'info',
                users: [
                    'avatars/300-23.jpg',
                    'avatars/300-12.jpg',
                    'avatars/300-9.jpg'
                ]
            },
        ]);

        // Set vis-timeline options
        var options = {
            zoomable: false,
            moveable: false,
            selectable: false,
            // More options https://visjs.github.io/vis-timeline/docs/timeline/#Configuration_Options
            margin: {
                item: {
                    horizontal: 10,
                    vertical: 35
                }
            },

            // Remove current time line --- more info: https://visjs.github.io/vis-timeline/docs/timeline/#Configuration_Options
            showCurrentTime: false,

            // Whitelist specified tags and attributes from template --- more info: https://visjs.github.io/vis-timeline/docs/timeline/#Configuration_Options
            xss: {
                disabled: false,
                filterOptions: {
                    whiteList: {
                        div: ['class', 'style'],
                        img: ['data-kt-timeline-avatar-src', 'alt'],
                        a: ['href', 'class']
                    },
                },
            },
            // specify a template for the items
            template: function (item) {
                // Build users group
                const users = item.users;
                let userTemplate = '';
                users.forEach(user => {
                    userTemplate += `<div class="symbol symbol-circle symbol-25px"><img data-kt-timeline-avatar-src="${rootImagePath + user}" alt="" /></div>`;
                });

                return `<div class="rounded-pill bg-light-${item.color} d-flex align-items-center position-relative h-40px w-100 p-2 overflow-hidden">
                    <div class="position-absolute rounded-pill d-block bg-${item.color} start-0 top-0 h-100 z-index-1" style="width: ${item.progress};"></div>
        
                    <div class="d-flex align-items-center position-relative z-index-2">
                        <div class="symbol-group symbol-hover flex-nowrap me-3">
                            ${userTemplate}
                        </div>
        
                        <a href="#" class="fw-bold text-white text-hover-dark">${item.content}</a>
                    </div>
        
                    <div class="d-flex flex-center bg-body rounded-pill fs-7 fw-bolder ms-auto h-100 px-3 position-relative z-index-2">
                        ${item.progress}
                    </div>
                </div>        
                `;
            },

            // Remove block ui on initial draw
            onInitialDrawComplete: function () {
                handleAvatarPath();

                const target = element.closest('[data-kt-timeline-widget-4-blockui="true"]');
                const blockUI = KTBlockUI.getInstance(target);

                if (blockUI.isBlocked()) {
                    setTimeout(() => {
                        blockUI.release();
                    }, 1000);      
                }
            }
        };

        // Init vis-timeline
        const timeline = new vis.Timeline(element, items, groups, options);

        // Prevent infinite loop draws
        timeline.on("currentTimeTick", () => {            
            // After fired the first time we un-subscribed
            timeline.off("currentTimeTick");
        });
    }

    // Week timeline
    const initTimelineWeek = () => {
        // Detect element
        const element = document.querySelector('#kt_timeline_widget_4_2');
        if (!element) {
            return;
        }

        if(element.innerHTML){
            return;
        }

        // Set variables
        var now = Date.now();
        var rootImagePath = element.getAttribute('data-kt-timeline-widget-4-image-root');

        // Build vis-timeline datasets
        var groups = new vis.DataSet([
            {
                id: 1,
                content: "Research",
                order: 1
            },
            {
                id: 2,
                content: "Phase 2.6 QA",
                order: 2
            },
            {
                id: 3,
                content: "UI Design",
                order: 3
            },
            {
                id: 4,
                content: "Development",
                order: 4
            }
        ]);


        var items = new vis.DataSet([
            {
                id: 1,
                group: 1,
                start: now,
                end: moment(now).add(7, 'days'),
                content: 'Framework',
                progress: "71%",
                color: 'primary',
                users: [
                    'avatars/300-6.jpg',
                    'avatars/300-1.jpg'
                ]
            },
            {
                id: 2,
                group: 2,
                start: moment(now).add(7, 'days'),
                end: moment(now).add(14, 'days'),
                content: 'Accessibility',
                progress: "84%",
                color: 'success',
                users: [
                    'avatars/300-2.jpg'
                ]
            },
            {
                id: 3,
                group: 3,
                start: moment(now).add(3, 'days'),
                end: moment(now).add(20, 'days'),
                content: 'Microsites',
                progress: "69%",
                color: 'danger',
                users: [
                    'avatars/300-5.jpg',
                    'avatars/300-20.jpg'
                ]
            },
            {
                id: 4,
                group: 4,
                start: moment(now).add(10, 'days'),
                end: moment(now).add(21, 'days'),
                content: 'Deployment',
                progress: "74%",
                color: 'info',
                users: [
                    'avatars/300-23.jpg',
                    'avatars/300-12.jpg',
                    'avatars/300-9.jpg'
                ]
            },
        ]);

        // Set vis-timeline options
        var options = {
            zoomable: false,
            moveable: false,
            selectable: false,

            // More options https://visjs.github.io/vis-timeline/docs/timeline/#Configuration_Options
            margin: {
                item: {
                    horizontal: 10,
                    vertical: 35
                }
            },

            // Remove current time line --- more info: https://visjs.github.io/vis-timeline/docs/timeline/#Configuration_Options
            showCurrentTime: false,

            // Whitelist specified tags and attributes from template --- more info: https://visjs.github.io/vis-timeline/docs/timeline/#Configuration_Options
            xss: {
                disabled: false,
                filterOptions: {
                    whiteList: {
                        div: ['class', 'style'],
                        img: ['data-kt-timeline-avatar-src', 'alt'],
                        a: ['href', 'class']
                    },
                },
            },
            // specify a template for the items
            template: function (item) {
                // Build users group
                const users = item.users;
                let userTemplate = '';
                users.forEach(user => {
                    userTemplate += `<div class="symbol symbol-circle symbol-25px"><img data-kt-timeline-avatar-src="${rootImagePath + user}" alt="" /></div>`;
                });

                return `<div class="rounded-pill bg-light-${item.color} d-flex align-items-center position-relative h-40px w-100 p-2 overflow-hidden">
                    <div class="position-absolute rounded-pill d-block bg-${item.color} start-0 top-0 h-100 z-index-1" style="width: ${item.progress};"></div>
        
                    <div class="d-flex align-items-center position-relative z-index-2">
                        <div class="symbol-group symbol-hover flex-nowrap me-3">
                            ${userTemplate}
                        </div>
        
                        <a href="#" class="fw-bold text-white text-hover-dark">${item.content}</a>
                    </div>
        
                    <div class="d-flex flex-center bg-body rounded-pill fs-7 fw-bolder ms-auto h-100 px-3 position-relative z-index-2">
                        ${item.progress}
                    </div>
                </div>        
                `;
            },

            // Remove block ui on initial draw
            onInitialDrawComplete: function () {
                handleAvatarPath();

                const target = element.closest('[data-kt-timeline-widget-4-blockui="true"]');
                const blockUI = KTBlockUI.getInstance(target);

                if (blockUI.isBlocked()) {
                    setTimeout(() => {
                        blockUI.release();
                    }, 1000);      
                }
            }
        };

        // Init vis-timeline
        const timeline = new vis.Timeline(element, items, groups, options);

        // Prevent infinite loop draws
        timeline.on("currentTimeTick", () => {            
            // After fired the first time we un-subscribed
            timeline.off("currentTimeTick");
        });
    }

    // Month timeline
    const initTimelineMonth = () => {
        // Detect element
        const element = document.querySelector('#kt_timeline_widget_4_3');
        if (!element) {
            return;
        }

        if(element.innerHTML){
            return;
        }

        // Set variables
        var now = Date.now();
        var rootImagePath = element.getAttribute('data-kt-timeline-widget-4-image-root');

        // Build vis-timeline datasets
        var groups = new vis.DataSet([
            {
                id: "research",
                content: "Research",
                order: 1
            },
            {
                id: "qa",
                content: "Phase 2.6 QA",
                order: 2
            },
            {
                id: "ui",
                content: "UI Design",
                order: 3
            },
            {
                id: "dev",
                content: "Development",
                order: 4
            }
        ]);


        var items = new vis.DataSet([
            {
                id: 1,
                group: 'research',
                start: now,
                end: moment(now).add(2, 'months'),
                content: 'Tags',
                progress: "79%",
                color: 'primary',
                users: [
                    'avatars/300-6.jpg',
                    'avatars/300-1.jpg'
                ]
            },
            {
                id: 2,
                group: 'qa',
                start: moment(now).add(0.5, 'months'),
                end: moment(now).add(5, 'months'),
                content: 'Testing',
                progress: "64%",
                color: 'success',
                users: [
                    'avatars/300-2.jpg'
                ]
            },
            {
                id: 3,
                group: 'ui',
                start: moment(now).add(2, 'months'),
                end: moment(now).add(6.5, 'months'),
                content: 'Media',
                progress: "82%",
                color: 'danger',
                users: [
                    'avatars/300-5.jpg',
                    'avatars/300-20.jpg'
                ]
            },
            {
                id: 4,
                group: 'dev',
                start: moment(now).add(4, 'months'),
                end: moment(now).add(7, 'months'),
                content: 'Plugins',
                progress: "58%",
                color: 'info',
                users: [
                    'avatars/300-23.jpg',
                    'avatars/300-12.jpg',
                    'avatars/300-9.jpg'
                ]
            },
        ]);

        // Set vis-timeline options
        var options = {
            zoomable: false,
            moveable: false,
            selectable: false,

            // More options https://visjs.github.io/vis-timeline/docs/timeline/#Configuration_Options
            margin: {
                item: {
                    horizontal: 10,
                    vertical: 35
                }
            },

            // Remove current time line --- more info: https://visjs.github.io/vis-timeline/docs/timeline/#Configuration_Options
            showCurrentTime: false,

            // Whitelist specified tags and attributes from template --- more info: https://visjs.github.io/vis-timeline/docs/timeline/#Configuration_Options
            xss: {
                disabled: false,
                filterOptions: {
                    whiteList: {
                        div: ['class', 'style'],
                        img: ['data-kt-timeline-avatar-src', 'alt'],
                        a: ['href', 'class']
                    },
                },
            },
            // specify a template for the items
            template: function (item) {
                // Build users group
                const users = item.users;
                let userTemplate = '';
                users.forEach(user => {
                    userTemplate += `<div class="symbol symbol-circle symbol-25px"><img data-kt-timeline-avatar-src="${rootImagePath + user}" alt="" /></div>`;
                });

                return `<div class="rounded-pill bg-light-${item.color} d-flex align-items-center position-relative h-40px w-100 p-2 overflow-hidden">
                    <div class="position-absolute rounded-pill d-block bg-${item.color} start-0 top-0 h-100 z-index-1" style="width: ${item.progress};"></div>
        
                    <div class="d-flex align-items-center position-relative z-index-2">
                        <div class="symbol-group symbol-hover flex-nowrap me-3">
                            ${userTemplate}
                        </div>
        
                        <a href="#" class="fw-bold text-white text-hover-dark">${item.content}</a>
                    </div>
        
                    <div class="d-flex flex-center bg-body rounded-pill fs-7 fw-bolder ms-auto h-100 px-3 position-relative z-index-2">
                        ${item.progress}
                    </div>
                </div>        
                `;
            },

            // Remove block ui on initial draw
            onInitialDrawComplete: function () {
                handleAvatarPath();
                
                const target = element.closest('[data-kt-timeline-widget-4-blockui="true"]');
                const blockUI = KTBlockUI.getInstance(target);

                if (blockUI.isBlocked()) {
                    setTimeout(() => {
                        blockUI.release();
                    }, 1000);                    
                }
            }
        };

        // Init vis-timeline
        const timeline = new vis.Timeline(element, items, groups, options);

        // Prevent infinite loop draws
        timeline.on("currentTimeTick", () => {            
            // After fired the first time we un-subscribed
            timeline.off("currentTimeTick");
        });
    }
    
    // 2022 timeline
    const initTimeline2022 = () => {
        // Detect element
        const element = document.querySelector('#kt_timeline_widget_4_4');
        if (!element) {
            return;
        }

        if(element.innerHTML){
            return;
        }

        // Set variables
        var now = Date.now();
        var rootImagePath = element.getAttribute('data-kt-timeline-widget-4-image-root');

        // Build vis-timeline datasets
        var groups = new vis.DataSet([
            {
                id: "research",
                content: "Research",
                order: 1
            },
            {
                id: "qa",
                content: "Phase 2.6 QA",
                order: 2
            },
            {
                id: "ui",
                content: "UI Design",
                order: 3
            },
            {
                id: "dev",
                content: "Development",
                order: 4
            }
        ]);


        var items = new vis.DataSet([
            {
                id: 1,
                group: 'research',
                start: now,
                end: moment(now).add(2, 'months'),
                content: 'Tags',
                progress: "51%",
                color: 'primary',
                users: [
                    'avatars/300-7.jpg',
                    'avatars/300-2.jpg'
                ]
            },
            {
                id: 2,
                group: 'qa',
                start: moment(now).add(0.5, 'months'),
                end: moment(now).add(5, 'months'),
                content: 'Testing',
                progress: "64%",
                color: 'success',
                users: [
                    'avatars/300-2.jpg'
                ]
            },
            {
                id: 3,
                group: 'ui',
                start: moment(now).add(2, 'months'),
                end: moment(now).add(6.5, 'months'),
                content: 'Media',
                progress: "54%",
                color: 'danger',
                users: [
                    'avatars/300-5.jpg',
                    'avatars/300-21.jpg'
                ]
            },
            {
                id: 4,
                group: 'dev',
                start: moment(now).add(4, 'months'),
                end: moment(now).add(7, 'months'),
                content: 'Plugins',
                progress: "348%",
                color: 'info',
                users: [
                    'avatars/300-3.jpg',
                    'avatars/300-11.jpg',
                    'avatars/300-13.jpg'
                ]
            },
        ]);

        // Set vis-timeline options
        var options = {
            zoomable: false,
            moveable: false,
            selectable: false,

            // More options https://visjs.github.io/vis-timeline/docs/timeline/#Configuration_Options
            margin: {
                item: {
                    horizontal: 10,
                    vertical: 35
                }
            },

            // Remove current time line --- more info: https://visjs.github.io/vis-timeline/docs/timeline/#Configuration_Options
            showCurrentTime: false,

            // Whitelist specified tags and attributes from template --- more info: https://visjs.github.io/vis-timeline/docs/timeline/#Configuration_Options
            xss: {
                disabled: false,
                filterOptions: {
                    whiteList: {
                        div: ['class', 'style'],
                        img: ['data-kt-timeline-avatar-src', 'alt'],
                        a: ['href', 'class']
                    },
                },
            },
            // specify a template for the items
            template: function (item) {
                // Build users group
                const users = item.users;
                let userTemplate = '';
                users.forEach(user => {
                    userTemplate += `<div class="symbol symbol-circle symbol-25px"><img data-kt-timeline-avatar-src="${rootImagePath + user}" alt="" /></div>`;
                });

                return `<div class="rounded-pill bg-light-${item.color} d-flex align-items-center position-relative h-40px w-100 p-2 overflow-hidden">
                    <div class="position-absolute rounded-pill d-block bg-${item.color} start-0 top-0 h-100 z-index-1" style="width: ${item.progress};"></div>
        
                    <div class="d-flex align-items-center position-relative z-index-2">
                        <div class="symbol-group symbol-hover flex-nowrap me-3">
                            ${userTemplate}
                        </div>
        
                        <a href="#" class="fw-bold text-white text-hover-dark">${item.content}</a>
                    </div>
        
                    <div class="d-flex flex-center bg-body rounded-pill fs-7 fw-bolder ms-auto h-100 px-3 position-relative z-index-2">
                        ${item.progress}
                    </div>
                </div>        
                `;
            },

            // Remove block ui on initial draw
            onInitialDrawComplete: function () {
                handleAvatarPath();
                
                const target = element.closest('[data-kt-timeline-widget-4-blockui="true"]');
                const blockUI = KTBlockUI.getInstance(target);

                if (blockUI.isBlocked()) {
                    setTimeout(() => {
                        blockUI.release();
                    }, 1000);                    
                }
            }
        };

        // Init vis-timeline
        const timeline = new vis.Timeline(element, items, groups, options);

        // Prevent infinite loop draws
        timeline.on("currentTimeTick", () => {            
            // After fired the first time we un-subscribed
            timeline.off("currentTimeTick");
        });
    }
    // Handle BlockUI
    const handleBlockUI = () => {
        // Select block ui elements
        const elements = document.querySelectorAll('[data-kt-timeline-widget-4-blockui="true"]');

        // Init block ui
        elements.forEach(element => {
            const blockUI = new KTBlockUI(element, {
                overlayClass: "bg-body",
            });

            blockUI.block();
        });
    }

    // Handle tabs visibility
    const tabsVisibility = () => {
        const tabs = document.querySelectorAll('[data-kt-timeline-widget-4="tab"]');

        tabs.forEach(tab => {
            tab.addEventListener('shown.bs.tab', e => {
                // Week tab
                if(tab.getAttribute('href') === '#kt_timeline_widget_4_tab_week'){
                    initTimelineWeek();
                }

                // Month tab
                if(tab.getAttribute('href') === '#kt_timeline_widget_4_tab_month'){
                    initTimelineMonth();
                }

                // 2022 tab
                if(tab.getAttribute('href') === '#kt_timeline_widget_4_tab_2022'){
                    initTimeline2022();
                }
            });
        });
    }

    // Handle avatar path conflict
    const handleAvatarPath = () => {
        const avatars = document.querySelectorAll('[data-kt-timeline-avatar-src]');

        if(!avatars){
            return;
        }

        avatars.forEach(avatar => {
            avatar.setAttribute('src', avatar.getAttribute('data-kt-timeline-avatar-src'));
            avatar.removeAttribute('data-kt-timeline-avatar-src');
        });
    }

    // Public methods
    return {
        init: function () {
            initTimelineDay();
            handleBlockUI();
            tabsVisibility();
        }
    }
}();

// Webpack support
if (typeof module !== 'undefined') {
    module.exports = KTTimelineWidget4;
}

// On document ready
KTUtil.onDOMContentLoaded(function () {
    KTTimelineWidget4.init();
});

"use strict";

// Class definition
var KTTablesWidget14 = function () {
    var chart1 = {
        self: null,
        rendered: false
    };

    var chart2 = {
        self: null,
        rendered: false
    };

    var chart3 = {
        self: null,
        rendered: false
    };

    var chart4 = {
        self: null,
        rendered: false
    };

    var chart5 = {
        self: null,
        rendered: false
    };

    // Private methods
    var initChart = function(chart, chartSelector, data, initByDefault) {
        var element = document.querySelector(chartSelector);

        if (!element) {
            return;
        }
        
        var height = parseInt(KTUtil.css(element, 'height'));
        var color = element.getAttribute('data-kt-chart-color');
       
        var strokeColor = KTUtil.getCssVariableValue('--kt-' + 'gray-300');
        var baseColor = KTUtil.getCssVariableValue('--kt-' + color);
        var lightColor = KTUtil.getCssVariableValue('--kt-body-bg');

        var options = {
            series: [{
                name: 'Net Profit',
                data: data
            }],
            chart: {
                fontFamily: 'inherit',
                type: 'area',
                height: height,
                toolbar: {
                    show: false
                },
                zoom: {
                    enabled: false
                },
                sparkline: {
                    enabled: true
                }
            },
            plotOptions: {},
            legend: {
                show: false
            },
            dataLabels: {
                enabled: false
            },
            fill: {
                type: 'solid',
                opacity: 1
            },
            stroke: {
                curve: 'smooth',
                show: true,
                width: 2,
                colors: [baseColor]
            },
            xaxis: {                 
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false
                },
                labels: {
                    show: false                   
                },
                crosshairs: {
                    show: false,
                    position: 'front',
                    stroke: {
                        color: strokeColor,
                        width: 1,
                        dashArray: 3
                    }
                },
                tooltip: {
                    enabled: false
                }
            },
            yaxis: {
                min: 0,
                max: 60,
                labels: {
                    show: false                     
                }
            },
            states: {
                normal: {
                    filter: {
                        type: 'none',
                        value: 0
                    }
                },
                hover: {
                    filter: {
                        type: 'none',
                        value: 0
                    }
                },
                active: {
                    allowMultipleDataPointsSelection: false,
                    filter: {
                        type: 'none',
                        value: 0
                    }
                }
            },
            tooltip: {
                enabled: false
            },
            colors: [lightColor],
            markers: {
                colors: [lightColor],
                strokeColor: [baseColor],
                strokeWidth: 3
            }
        };

        chart.self = new ApexCharts(element, options);          
        
        if (initByDefault === true) {
            // Set timeout to properly get the parent elements width
            setTimeout(function() {
                chart.self.render();  
                chart.rendered = true;
            }, 200);
        }            
    }

    // Public methods
    return {
        init: function () { 
            var chart1Data = [7, 10, 5, 21, 6, 11, 5, 23, 5, 11, 18, 7, 21,13];            
            initChart(chart1, '#kt_table_widget_14_chart_1', chart1Data, true);

            var chart2Data = [17, 5, 23, 2, 21, 9, 17, 23, 4, 24, 9, 17, 21,7];            
            initChart(chart2, '#kt_table_widget_14_chart_2', chart2Data, true);

            var chart3Data = [2, 24, 5, 17, 7, 2, 12, 24, 5, 24, 2, 8, 12,7];            
            initChart(chart3, '#kt_table_widget_14_chart_3', chart3Data, true);

            var chart4Data = [24, 3, 5, 19, 3, 7, 25, 14, 5, 14, 2, 8, 5,17];            
            initChart(chart4, '#kt_table_widget_14_chart_4', chart4Data, true);

            var chart5Data = [3, 23, 1, 19, 3, 17, 3, 9, 25, 4, 2, 18, 25,3];            
            initChart(chart5, '#kt_table_widget_14_chart_5', chart5Data, true); 

            // Update chart on theme mode change
            KTThemeMode.on("kt.thememode.change", function() {
                if (chart1.rendered) {
                    chart1.self.destroy();
                }

                if (chart2.rendered) {
                    chart2.self.destroy();
                }

                if (chart3.rendered) {
                    chart3.self.destroy();
                }

                if (chart4.rendered) {
                    chart4.self.destroy();
                }

                if (chart5.rendered) {
                    chart5.self.destroy();
                }

                initChart(chart1, '#kt_table_widget_14_chart_1', chart1Data, chart1.rendered);
                initChart(chart2, '#kt_table_widget_14_chart_2', chart2Data, chart2.rendered);  
                initChart(chart3, '#kt_table_widget_14_chart_3', chart3Data, chart3.rendered);
                initChart(chart4, '#kt_table_widget_14_chart_4', chart4Data, chart4.rendered); 
                initChart(chart5, '#kt_table_widget_14_chart_5', chart5Data, chart5.rendered); 
            });
        }   
    }
}();

// Webpack support
if (typeof module !== 'undefined') {
    module.exports = KTTablesWidget14;
}

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTTablesWidget14.init();
});


 
"use strict";

// Class definition
var KTTablesWidget15 = function () {
    var chart1 = {
        self: null,
        rendered: false
    };

    var chart2 = {
        self: null,
        rendered: false
    };

    var chart3 = {
        self: null,
        rendered: false
    };

    var chart4 = {
        self: null,
        rendered: false
    };

    var chart5 = {
        self: null,
        rendered: false
    };

    // Private methods
    var initChart = function(chart, chartSelector, data, initByDefault) {
        var element = document.querySelector(chartSelector);

        if (!element) {
            return;
        }
        
        var height = parseInt(KTUtil.css(element, 'height'));
        var color = element.getAttribute('data-kt-chart-color');
         
        var strokeColor = KTUtil.getCssVariableValue('--kt-' + 'gray-300');
        var baseColor = KTUtil.getCssVariableValue('--kt-' + color);
        var lightColor = KTUtil.getCssVariableValue('--kt-body-bg');

        var options = {
            series: [{
                name: 'Net Profit',
                data: data
            }],
            chart: {
                fontFamily: 'inherit',
                type: 'area',
                height: height,
                toolbar: {
                    show: false
                },
                zoom: {
                    enabled: false
                },
                sparkline: {
                    enabled: true
                }
            },
            plotOptions: {},
            legend: {
                show: false
            },
            dataLabels: {
                enabled: false
            },
            fill: {
                type: 'solid',
                opacity: 1
            },
            stroke: {
                curve: 'smooth',
                show: true,
                width: 2,
                colors: [baseColor]
            },
            xaxis: {                
                axisBorder: {
                    show: false
                },
                axisTicks: {
                    show: false
                },
                labels: {
                    show: false                    
                },
                crosshairs: {
                    show: false,
                    position: 'front',
                    stroke: {
                        color: strokeColor,
                        width: 1,
                        dashArray: 3
                    }
                },
                tooltip: {
                    enabled: false
                }
            },
            yaxis: {
                min: 0,
                max: 60,
                labels: {
                    show: false,
                    ontSize: '12px'                   
                }
            },
            states: {
                normal: {
                    filter: {
                        type: 'none',
                        value: 0
                    }
                },
                hover: {
                    filter: {
                        type: 'none',
                        value: 0
                    }
                },
                active: {
                    allowMultipleDataPointsSelection: false,
                    filter: {
                        type: 'none',
                        value: 0
                    }
                }
            },
            tooltip: {
                enabled: false
            },
            colors: [lightColor],
            markers: {
                colors: [lightColor],
                strokeColor: [baseColor],
                strokeWidth: 3
            }
        };

        chart.self = new ApexCharts(element, options);          
        
        if (initByDefault === true) {
            // Set timeout to properly get the parent elements width
            setTimeout(function() {
                chart.self.render();  
                chart.rendered = true;
            }, 200);
        }              
    }

    // Public methods
    return {
        init: function () { 
            var chart1Data = [7, 10, 5, 21, 6, 11, 5, 23, 5, 11, 18, 7, 21,13];            
            initChart(chart1, '#kt_table_widget_15_chart_1', chart1Data, true);

            var chart2Data = [17, 5, 23, 2, 21, 9, 17, 23, 4, 24, 9, 17, 21,7];            
            initChart(chart2, '#kt_table_widget_15_chart_2', chart2Data, true);

            var chart3Data = [2, 24, 5, 17, 7, 2, 12, 24, 5, 24, 2, 8, 12,7];            
            initChart(chart3, '#kt_table_widget_15_chart_3', chart3Data, true);

            var chart4Data = [24, 3, 5, 19, 3, 7, 25, 14, 5, 14, 2, 8, 5,17];            
            initChart(chart4, '#kt_table_widget_15_chart_4', chart4Data, true);

            var chart5Data = [3, 23, 1, 19, 3, 17, 3, 9, 25, 4, 2, 18, 25,3];            
            initChart(chart5, '#kt_table_widget_15_chart_5', chart5Data, true);
            
            // Update chart on theme mode change
            KTThemeMode.on("kt.thememode.change", function() {
                if (chart1.rendered) {
                    chart1.self.destroy();
                }

                if (chart2.rendered) {
                    chart2.self.destroy();
                }

                if (chart3.rendered) {
                    chart3.self.destroy();
                }

                if (chart4.rendered) {
                    chart4.self.destroy();
                }

                if (chart5.rendered) {
                    chart5.self.destroy();
                }

                initChart(chart1, '#kt_table_widget_15_chart_1', chart1Data, chart1.rendered);
                initChart(chart2, '#kt_table_widget_15_chart_2', chart2Data, chart2.rendered);  
                initChart(chart3, '#kt_table_widget_15_chart_3', chart3Data, chart3.rendered);
                initChart(chart4, '#kt_table_widget_15_chart_4', chart4Data, chart4.rendered); 
                initChart(chart5, '#kt_table_widget_15_chart_5', chart5Data, chart5.rendered); 
            });
        }   
    }
}();

// Webpack support
if (typeof module !== 'undefined') {
    module.exports = KTTablesWidget15;
}

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTTablesWidget15.init();
});


 
"use strict";

// Class definition
var KTTablesWidget16 = function () {
    var chart1 = {
        self: null,
        rendered: false
    }; 

    var chart2 = {
        self: null,
        rendered: false
    };

    var chart3 = {
        self: null,
        rendered: false
    };

    var chart4 = {
        self: null,
        rendered: false
    };

    var chart5 = {
        self: null,
        rendered: false
    };

    var chart6 = {
        self: null,
        rendered: false
    }; 

    var chart7 = {
        self: null,
        rendered: false
    };

    var chart8 = {
        self: null,
        rendered: false
    };

    var chart9 = {
        self: null,
        rendered: false
    };

    var chart10 = {
        self: null,
        rendered: false
    };

    var chart11 = {
        self: null,
        rendered: false
    }; 

    var chart12 = {
        self: null,
        rendered: false
    };

    var chart13 = {
        self: null,
        rendered: false
    };

    var chart14 = {
        self: null,
        rendered: false
    };

    var chart15 = {
        self: null,
        rendered: false
    };

    var chart16 = {
        self: null,
        rendered: false
    }; 

    var chart17 = {
        self: null,
        rendered: false
    };

    var chart18 = {
        self: null,
        rendered: false
    };

    var chart19 = {
        self: null,
        rendered: false
    };

    var chart20 = {
        self: null,
        rendered: false
    };

    // Private methods
    var initChart = function(chart, toggle, selector, data, initByDefault) {
        var element = document.querySelector(selector);

        if ( !element ) {
            return;
        }
        
        var height = parseInt(KTUtil.css(element, 'height'));
        var color = element.getAttribute('data-kt-chart-color');
        var labelColor = KTUtil.getCssVariableValue('--kt-gray-800');
        var strokeColor = KTUtil.getCssVariableValue('--kt-gray-300');
        var baseColor = KTUtil.getCssVariableValue('--kt-' + color);
        var lightColor = KTUtil.getCssVariableValue('--kt-body-bg');

        var options = {
            series: [{
                name: 'Net Profit',
                data: data
            }],
            chart: {
                fontFamily: 'inherit',
                type: 'area',
                height: height,
                toolbar: {
                    show: false
                },
                zoom: {
                    enabled: false
                },
                sparkline: {
                    enabled: true
                }
            },
            plotOptions: {},
            legend: {
                show: false
            },
            dataLabels: {
                enabled: false
            },
            fill: {
                type: 'solid',
                opacity: 1
            },
            stroke: {
                curve: 'smooth',
                show: true,
                width: 2,
                colors: [baseColor]
            },
            xaxis: {                
                axisBorder: {
                    show: false
                },
                axisTicks: {
                    show: false
                },
                labels: {
                    show: false                    
                },
                crosshairs: {
                    show: false,
                    position: 'front',
                    stroke: {
                        color: strokeColor,
                        width: 1,
                        dashArray: 3
                    }
                },
                tooltip: {
                    enabled: false
                }
            },
            yaxis: {
                min: 0,
                max: 60,
                labels: {
                    show: false,
                    ontSize: '12px'                   
                }
            },
            states: {
                normal: {
                    filter: {
                        type: 'none',
                        value: 0
                    }
                },
                hover: {
                    filter: {
                        type: 'none',
                        value: 0
                    }
                },
                active: {
                    allowMultipleDataPointsSelection: false,
                    filter: {
                        type: 'none',
                        value: 0
                    }
                }
            },
            tooltip: {
                enabled: false
            },
            colors: [lightColor],
            markers: {
                colors: [lightColor],
                strokeColor: [baseColor],
                strokeWidth: 3
            }
        };

        chart.self = new ApexCharts(element, options);        
        var tab = document.querySelector(toggle);
        
        if (initByDefault === true) {
            // Set timeout to properly get the parent elements width
            setTimeout(function() {
                chart.self.render();  
                chart.rendered = true;
            }, 200);
        }        

        tab.addEventListener('shown.bs.tab', function (event) {
            if (chart.rendered === false) {
                chart.self.render();  
                chart.rendered = true;
            }
        });
    }

    // Public methods
    return {
        init: function () {  
            var chart1Data = [16, 10, 15, 21, 6, 11, 5, 23, 5, 11, 18, 7, 21, 13];  
            initChart(chart1, '#kt_stats_widget_16_tab_link_1', '#kt_table_widget_16_chart_1_1', chart1Data, true);        
             
            var chart2Data = [8, 5, 16, 3, 23, 16, 11, 15, 3, 11, 15, 7, 17, 9];  
            initChart(chart2, '#kt_stats_widget_16_tab_link_1', '#kt_table_widget_16_chart_1_2', chart2Data, true);    
            
            var chart3Data = [8, 6, 16, 3, 23, 16, 11, 14, 3, 11, 15, 8, 17, 9];  
            initChart(chart3, '#kt_stats_widget_16_tab_link_1', '#kt_table_widget_16_chart_1_3', chart3Data, true);  
            
            var chart4Data = [12, 5, 23, 12, 21, 9, 17, 20, 4, 24, 9, 13, 18, 9];  
            initChart(chart4, '#kt_stats_widget_16_tab_link_1', '#kt_table_widget_16_chart_1_4', chart4Data, true); 


            var chart5Data = [13, 10, 15, 21, 6, 11, 5, 21, 5, 12, 18, 7, 21, 13];  
            initChart(chart5, '#kt_stats_widget_16_tab_link_2', '#kt_table_widget_16_chart_2_1', chart5Data, false);        
             
            var chart6Data = [13, 5, 21, 12, 21, 9, 17, 20, 4, 23, 9, 17, 21, 7];  
            initChart(chart6, '#kt_stats_widget_16_tab_link_2', '#kt_table_widget_16_chart_2_2', chart6Data, false);    
            
            var chart7Data = [8, 10, 14, 21, 6, 31, 5, 21, 5, 11, 15, 7, 23, 13];  
            initChart(chart7, '#kt_stats_widget_16_tab_link_2', '#kt_table_widget_16_chart_2_3', chart7Data, false);  
            
            var chart8Data = [6, 10, 12, 21, 6, 11, 7, 23, 5, 12, 18, 7, 21, 15];  
            initChart(chart8, '#kt_stats_widget_16_tab_link_2', '#kt_table_widget_16_chart_2_4', chart8Data, false); 


            var chart9Data = [7, 10, 5, 21, 6, 11, 5, 23, 5, 11, 18, 7, 21,13];  
            initChart(chart9, '#kt_stats_widget_16_tab_link_3', '#kt_table_widget_16_chart_3_1', chart9Data, false);        
             
            var chart10Data = [8, 5, 16, 2, 19, 9, 17, 21, 4, 24, 4, 13, 21,5];  
            initChart(chart10, '#kt_stats_widget_16_tab_link_3', '#kt_table_widget_16_chart_3_2', chart10Data, false);    
            
            var chart11Data = [15, 10, 12, 21, 6, 11, 23, 11, 5, 12, 18, 7, 21, 15];  
            initChart(chart11, '#kt_stats_widget_16_tab_link_3', '#kt_table_widget_16_chart_3_3', chart11Data, false);  
            
            var chart12Data = [3, 9, 12, 23, 6, 11, 7, 23, 5, 12, 14, 7, 21, 8];  
            initChart(chart12, '#kt_stats_widget_16_tab_link_3', '#kt_table_widget_16_chart_3_4', chart12Data, false);


            var chart13Data = [9, 14, 15, 21, 8, 11, 5, 23, 5, 11, 18, 5, 23, 8];  
            initChart(chart13, '#kt_stats_widget_16_tab_link_4', '#kt_table_widget_16_chart_4_1', chart13Data, false);        
             
            var chart14Data = [7, 5, 23, 12, 21, 9, 17, 15, 4, 24, 9, 17, 21, 7];  
            initChart(chart14, '#kt_stats_widget_16_tab_link_4', '#kt_table_widget_16_chart_4_2', chart14Data, false);    
            
            var chart15Data = [8, 10, 14, 21, 6, 31, 8, 23, 5, 3, 14, 7, 21, 12];  
            initChart(chart15, '#kt_stats_widget_16_tab_link_4', '#kt_table_widget_16_chart_4_3', chart15Data, false);  
            
            var chart16Data = [6, 12, 12, 19, 6, 11, 7, 23, 5, 12, 18, 7, 21, 15];  
            initChart(chart16, '#kt_stats_widget_16_tab_link_4', '#kt_table_widget_16_chart_4_4', chart16Data, false);


            var chart17Data = [5, 10, 15, 21, 6, 11, 5, 23, 5, 11, 17, 7, 21, 13];  
            initChart(chart17, '#kt_stats_widget_16_tab_link_5', '#kt_table_widget_16_chart_5_1', chart17Data, false);        
             
            var chart18Data = [4, 5, 23, 12, 21, 9, 17, 15, 4, 24, 9, 17, 21, 7];  
            initChart(chart18, '#kt_stats_widget_16_tab_link_5', '#kt_table_widget_16_chart_5_2', chart18Data, false);    
            
            var chart19Data = [7, 10, 14, 21, 6, 31, 5, 23, 5, 11, 15, 7, 21, 17];  
            initChart(chart19, '#kt_stats_widget_16_tab_link_5', '#kt_table_widget_16_chart_5_3', chart19Data, false);  
            
            var chart20Data = [3, 10, 12, 23, 6, 11, 7, 22, 5, 12, 18, 7, 21, 14];  
            initChart(chart20, '#kt_stats_widget_16_tab_link_5', '#kt_table_widget_16_chart_5_4', chart20Data, false);

            // Update chart on theme mode change
            KTThemeMode.on("kt.thememode.change", function() {
                if (chart1.rendered) {
                    chart1.self.destroy();
                }

                if (chart2.rendered) {
                    chart2.self.destroy();
                }

                if (chart3.rendered) {
                    chart3.self.destroy();
                }

                if (chart4.rendered) {
                    chart4.self.destroy();
                }

                if (chart5.rendered) {
                    chart5.self.destroy();
                }

                if (chart6.rendered) {
                    chart6.self.destroy();
                }

                if (chart7.rendered) {
                    chart7.self.destroy();
                }

                if (chart8.rendered) {
                    chart8.self.destroy();
                }

                if (chart9.rendered) {
                    chart9.self.destroy();
                }

                if (chart10.rendered) {
                    chart10.self.destroy();
                }

                if (chart11.rendered) {
                    chart11.self.destroy();
                }

                if (chart12.rendered) {
                    chart12.self.destroy();
                }

                if (chart13.rendered) {
                    chart13.self.destroy();
                }

                if (chart14.rendered) {
                    chart14.self.destroy();
                }

                if (chart15.rendered) {
                    chart15.self.destroy();
                }

                if (chart16.rendered) {
                    chart16.self.destroy();
                }

                if (chart17.rendered) {
                    chart17.self.destroy();
                }

                if (chart18.rendered) {
                    chart18.self.destroy();
                }

                if (chart19.rendered) {
                    chart19.self.destroy();
                }

                if (chart20.rendered) {
                    chart20.self.destroy();
                }                

                initChart(chart1, '#kt_stats_widget_16_tab_link_1', '#kt_table_widget_16_chart_1_1', chart1Data, chart1.rendered);
                initChart(chart2, '#kt_stats_widget_16_tab_link_1', '#kt_table_widget_16_chart_1_2', chart2Data, chart2.rendered);  
                initChart(chart3, '#kt_stats_widget_16_tab_link_1', '#kt_table_widget_16_chart_1_3', chart3Data, chart3.rendered);
                initChart(chart4, '#kt_stats_widget_16_tab_link_1', '#kt_table_widget_16_chart_1_4', chart4Data, chart4.rendered); 

                initChart(chart5, '#kt_stats_widget_16_tab_link_2', '#kt_table_widget_16_chart_2_1', chart5Data, chart5.rendered);
                initChart(chart6, '#kt_stats_widget_16_tab_link_2', '#kt_table_widget_16_chart_2_2', chart6Data, chart6.rendered);  
                initChart(chart7, '#kt_stats_widget_16_tab_link_2', '#kt_table_widget_16_chart_2_3', chart7Data, chart7.rendered);
                initChart(chart8, '#kt_stats_widget_16_tab_link_2', '#kt_table_widget_16_chart_2_4', chart8Data, chart8.rendered); 

                initChart(chart9, '#kt_stats_widget_16_tab_link_3', '#kt_table_widget_16_chart_3_1', chart9Data, chart9.rendered);
                initChart(chart10, '#kt_stats_widget_16_tab_link_3', '#kt_table_widget_16_chart_3_2', chart10Data, chart10.rendered);  
                initChart(chart11, '#kt_stats_widget_16_tab_link_3', '#kt_table_widget_16_chart_3_3', chart11Data, chart11.rendered);
                initChart(chart12, '#kt_stats_widget_16_tab_link_3', '#kt_table_widget_16_chart_3_4', chart12Data, chart12.rendered); 

                initChart(chart13, '#kt_stats_widget_16_tab_link_4', '#kt_table_widget_16_chart_4_1', chart13Data, chart13.rendered);
                initChart(chart14, '#kt_stats_widget_16_tab_link_4', '#kt_table_widget_16_chart_4_2', chart14Data, chart14.rendered);  
                initChart(chart15, '#kt_stats_widget_16_tab_link_4', '#kt_table_widget_16_chart_4_3', chart15Data, chart15.rendered);
                initChart(chart16, '#kt_stats_widget_16_tab_link_4', '#kt_table_widget_16_chart_4_4', chart16Data, chart16.rendered); 

                initChart(chart17, '#kt_stats_widget_16_tab_link_5', '#kt_table_widget_16_chart_5_1', chart17Data, chart17.rendered);
                initChart(chart18, '#kt_stats_widget_16_tab_link_5', '#kt_table_widget_16_chart_5_2', chart18Data, chart18.rendered);  
                initChart(chart19, '#kt_stats_widget_16_tab_link_5', '#kt_table_widget_16_chart_5_3', chart19Data, chart19.rendered);
                initChart(chart20, '#kt_stats_widget_16_tab_link_5', '#kt_table_widget_16_chart_5_4', chart20Data, chart20.rendered);                 
            });            
        }   
    }
}();

// Webpack support
if (typeof module !== 'undefined') {
    module.exports = KTTablesWidget16;
}

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTTablesWidget16.init();
});


 
"use strict";

// Class definition
var KTTablesWidget3 = function () {
    var table;
    var datatable;

    // Private methods
    const initDatatable = () => {
        // Init datatable --- more info on datatables: https://datatables.net/manual/
        datatable = $(table).DataTable({
            "info": false,
            'order': [],
            'paging': false,
            'pageLength': false,
        });
    }

    const handleTabStates = () => {
        const tabs = document.querySelector('[data-kt-table-widget-3="tabs_nav"]');
        const tabButtons = tabs.querySelectorAll('[data-kt-table-widget-3="tab"]');
        const tabClasses = ['border-bottom', 'border-3', 'border-primary'];

        tabButtons.forEach(tab => {
            tab.addEventListener('click', e => {
                // Get datatable filter value
                const value = tab.getAttribute('data-kt-table-widget-3-value');
                tabButtons.forEach(t => {
                    t.classList.remove(...tabClasses);
                    t.classList.add('text-muted');
                });

                tab.classList.remove('text-muted');
                tab.classList.add(...tabClasses);

                // Filter datatable
                if (value === 'Show All') {
                    datatable.search('').draw();
                } else {
                    datatable.search(value).draw();
                }
            });
        });
    }

    // Handle status filter dropdown
    const handleStatusFilter = () => {
        const select = document.querySelector('[data-kt-table-widget-3="filter_status"]');

        $(select).on('select2:select', function (e) {
            const value = $(this).val();
            if (value === 'Show All') {
                datatable.search('').draw();
            } else {
                datatable.search(value).draw();
            }
        });
    }

    // Public methods
    return {
        init: function () {
            table = document.querySelector('#kt_widget_table_3');

            if (!table) {
                return;
            }

            initDatatable();
            handleTabStates();
            handleStatusFilter();
        }
    }
}();

// Webpack support
if (typeof module !== 'undefined') {
    module.exports = KTTablesWidget3;
}

// On document ready
KTUtil.onDOMContentLoaded(function () {
    KTTablesWidget3.init();
});

"use strict";

// Class definition
var KTTablesWidget4 = function () {
    var table;
    var datatable;
    var template;

    // Private methods
    const initDatatable = () => {
        // Get subtable template
        const subtable = document.querySelector('[data-kt-table-widget-4="subtable_template"]');
        template = subtable.cloneNode(true);
        template.classList.remove('d-none');

        // Remove subtable template
        subtable.parentNode.removeChild(subtable);

        // Init datatable --- more info on datatables: https://datatables.net/manual/
        datatable = $(table).DataTable({
            "info": false,
            'order': [],
            "lengthChange": false,
            'pageLength': 6,
            'ordering': false,
            'paging': false,
            'columnDefs': [
                { orderable: false, targets: 0 }, // Disable ordering on column 0 (checkbox)
                { orderable: false, targets: 6 }, // Disable ordering on column 6 (actions)
            ]
        });

        // Re-init functions on every table re-draw -- more info: https://datatables.net/reference/event/draw
        datatable.on('draw', function () {
            resetSubtable();
            handleActionButton();
        });
    }

    // Search Datatable --- official docs reference: https://datatables.net/reference/api/search()
    var handleSearchDatatable = () => {
        const filterSearch = document.querySelector('[data-kt-table-widget-4="search"]');
        filterSearch.addEventListener('keyup', function (e) {
            datatable.search(e.target.value).draw();
        });
    }

    // Handle status filter
    const handleStatusFilter = () => {
        const select = document.querySelector('[data-kt-table-widget-4="filter_status"]');

        $(select).on('select2:select', function (e) {
            const value = $(this).val();
            if (value === 'Show All') {
                datatable.search('').draw();
            } else {
                datatable.search(value).draw();
            }
        });
    }

    // Subtable data sample
    const data = [
        {
            image: '76',
            name: 'Go Pro 8',
            description: 'Latest  version of Go Pro.',
            cost: '500.00',
            qty: '1',
            total: '500.00',
            stock: '12'
        },
        {
            image: '60',
            name: 'Bose Earbuds',
            description: 'Top quality earbuds from Bose.',
            cost: '300.00',
            qty: '1',
            total: '300.00',
            stock: '8'
        },
        {
            image: '211',
            name: 'Dry-fit Sports T-shirt',
            description: 'Comfortable sportswear.',
            cost: '89.00',
            qty: '1',
            total: '89.00',
            stock: '18'
        },
        {
            image: '21',
            name: 'Apple Airpod 3',
            description: 'Apple\'s latest earbuds.',
            cost: '200.00',
            qty: '2',
            total: '400.00',
            stock: '32'
        },
        {
            image: '83',
            name: 'Nike Pumps',
            description: 'Apple\'s latest headphones.',
            cost: '200.00',
            qty: '1',
            total: '200.00',
            stock: '8'
        }
    ];

    // Handle action button
    const handleActionButton = () => {
        const buttons = document.querySelectorAll('[data-kt-table-widget-4="expand_row"]');

        // Sample row items counter --- for demo purpose only, remove this variable in your project
        const rowItems = [3, 1, 3, 1, 2, 1];

        buttons.forEach((button, index) => {
            button.addEventListener('click', e => {
                e.stopImmediatePropagation();
                e.preventDefault();

                const row = button.closest('tr');
                const rowClasses = ['isOpen', 'border-bottom-0'];

                // Get total number of items to generate --- for demo purpose only, remove this code snippet in your project
                const demoData = [];
                for (var j = 0; j < rowItems[index]; j++) {
                    demoData.push(data[j]);
                }
                // End of generating demo data

                // Handle subtable expanded state
                if (row.classList.contains('isOpen')) {
                    // Remove all subtables from current order row
                    while (row.nextSibling && row.nextSibling.getAttribute('data-kt-table-widget-4') === 'subtable_template') {
                        row.nextSibling.parentNode.removeChild(row.nextSibling);
                    }
                    row.classList.remove(...rowClasses);
                    button.classList.remove('active');
                } else {
                    populateTemplate(demoData, row);
                    row.classList.add(...rowClasses);
                    button.classList.add('active');
                }
            });
        });
    }

    // Populate template with content/data -- content/data can be replaced with relevant data from database or API
    const populateTemplate = (data, target) => {
        data.forEach((d, index) => {
            // Clone template node
            const newTemplate = template.cloneNode(true);

            // Stock badges
            const lowStock = `<div class="badge badge-light-warning">Low Stock</div>`;
            const inStock = `<div class="badge badge-light-success">In Stock</div>`;

            // Select data elements
            const image = newTemplate.querySelector('[data-kt-table-widget-4="template_image"]');
            const name = newTemplate.querySelector('[data-kt-table-widget-4="template_name"]');
            const description = newTemplate.querySelector('[data-kt-table-widget-4="template_description"]');
            const cost = newTemplate.querySelector('[data-kt-table-widget-4="template_cost"]');
            const qty = newTemplate.querySelector('[data-kt-table-widget-4="template_qty"]');
            const total = newTemplate.querySelector('[data-kt-table-widget-4="template_total"]');
            const stock = newTemplate.querySelector('[data-kt-table-widget-4="template_stock"]');

            // Populate elements with data
            const imageSrc = image.getAttribute('data-kt-src-path');
            image.setAttribute('src', imageSrc + d.image + '.gif');
            name.innerText = d.name;
            description.innerText = d.description;
            cost.innerText = d.cost;
            qty.innerText = d.qty;
            total.innerText = d.total;
            if (d.stock > 10) {
                stock.innerHTML = inStock;
            } else {
                stock.innerHTML = lowStock;
            }

            // New template border controller
            // When only 1 row is available
            if (data.length === 1) {
                //let borderClasses = ['rounded', 'rounded-end-0'];
                //newTemplate.querySelectorAll('td')[0].classList.add(...borderClasses);
                //borderClasses = ['rounded', 'rounded-start-0'];
                //newTemplate.querySelectorAll('td')[4].classList.add(...borderClasses);

                // Remove bottom border
                //newTemplate.classList.add('border-bottom-0');
            } else {
                // When multiple rows detected
                if (index === (data.length - 1)) { // first row
                    //let borderClasses = ['rounded-start', 'rounded-bottom-0'];
                   // newTemplate.querySelectorAll('td')[0].classList.add(...borderClasses);
                    //borderClasses = ['rounded-end', 'rounded-bottom-0'];
                    //newTemplate.querySelectorAll('td')[4].classList.add(...borderClasses);
                }
                if (index === 0) { // last row
                    //let borderClasses = ['rounded-start', 'rounded-top-0'];
                    //newTemplate.querySelectorAll('td')[0].classList.add(...borderClasses);
                    //borderClasses = ['rounded-end', 'rounded-top-0'];
                    //newTemplate.querySelectorAll('td')[4].classList.add(...borderClasses);

                    // Remove bottom border on last row
                    //newTemplate.classList.add('border-bottom-0');
                }
            }

            // Insert new template into table
            const tbody = table.querySelector('tbody');
            tbody.insertBefore(newTemplate, target.nextSibling);
        });
    }

    // Reset subtable
    const resetSubtable = () => {
        const subtables = document.querySelectorAll('[data-kt-table-widget-4="subtable_template"]');
        subtables.forEach(st => {
            st.parentNode.removeChild(st);
        });

        const rows = table.querySelectorAll('tbody tr');
        rows.forEach(r => {
            r.classList.remove('isOpen');
            if (r.querySelector('[data-kt-table-widget-4="expand_row"]')) {
                r.querySelector('[data-kt-table-widget-4="expand_row"]').classList.remove('active');
            }
        });
    }

    // Public methods
    return {
        init: function () {
            table = document.querySelector('#kt_table_widget_4_table');

            if (!table) {
                return;
            }

            initDatatable();
            handleSearchDatatable();
            handleStatusFilter();
            handleActionButton();
        }
    }
}();

// Webpack support
if (typeof module !== 'undefined') {
    module.exports = KTTablesWidget4;
}

// On document ready
KTUtil.onDOMContentLoaded(function () {
    KTTablesWidget4.init();
});

"use strict";

// Class definition
var KTTablesWidget5 = function () {
    var table;
    var datatable;

    // Private methods
    const initDatatable = () => {
        // Set date data order
        const tableRows = table.querySelectorAll('tbody tr');

        tableRows.forEach(row => {
            const dateRow = row.querySelectorAll('td');
            const realDate = moment(dateRow[2].innerHTML, "MMM DD, YYYY").format(); // select date from 3rd column in table
            dateRow[2].setAttribute('data-order', realDate);
        });

        // Init datatable --- more info on datatables: https://datatables.net/manual/
        datatable = $(table).DataTable({
            "info": false,
            'order': [],
            "lengthChange": false,
            'pageLength': 6,
            'paging': false,
            'columnDefs': [
                { orderable: false, targets: 1 }, // Disable ordering on column 1 (product id)
            ]
        });
    }

    // Handle status filter
    const handleStatusFilter = () => {
        const select = document.querySelector('[data-kt-table-widget-5="filter_status"]');

        $(select).on('select2:select', function (e) {
            const value = $(this).val();
            if (value === 'Show All') {
                datatable.search('').draw();
            } else {
                datatable.search(value).draw();
            }
        });
    }

    // Public methods
    return {
        init: function () {
            table = document.querySelector('#kt_table_widget_5_table');

            if (!table) {
                return;
            }

            initDatatable();
            handleStatusFilter();
        }
    }
}();

// Webpack support
if (typeof module !== 'undefined') {
    module.exports = KTTablesWidget5;
}

// On document ready
KTUtil.onDOMContentLoaded(function () {
    KTTablesWidget5.init();
});

"use strict";

// Class definition
var KTChartsWidget1 = function () {
    var chart = {
        self: null,
        rendered: false
    };

    // Private methods
    var initChart = function() {
        var element = document.getElementById("kt_charts_widget_1");

        if (!element) {
            return;
        }

        var negativeColor = element.hasAttribute('data-kt-negative-color') ? element.getAttribute('data-kt-negative-color') : KTUtil.getCssVariableValue('--kt-success');

        var height = parseInt(KTUtil.css(element, 'height'));
        var labelColor = KTUtil.getCssVariableValue('--kt-gray-500');
        var borderColor = KTUtil.getCssVariableValue('--kt-border-dashed-color');

        var baseColor = KTUtil.getCssVariableValue('--kt-primary');

        var options = {
            series: [{
                name: 'Subscribed',
                data: [20, 30, 20, 40, 60, 75, 65, 18, 10, 5, 15, 40, 60, 18, 35, 55, 20]
            }, {
                name: 'Unsubscribed',
                data: [-20, -15, -5, -20, -30, -15, -10, -8, -5, -5, -10, -25, -15, -5, -10, -5, -15]
            }],
            chart: {
                fontFamily: 'inherit',
                type: 'bar',
                stacked: true,
                height: height,
                toolbar: {
                    show: false
                }
            },
            plotOptions: {
                bar: {
                    //horizontal: false,
                    columnWidth: "35%",
                    barHeight: "70%",
                    borderRadius: [6, 6]
                }
            },
            legend: {
                show: false
            },
            dataLabels: {
                enabled: false
            },
            xaxis: {
                categories: ['Jan 5', 'Jan 7', 'Jan 9', 'Jan 11', 'Jan 13', 'Jan 15', 'Jan 17', 'Jan 19', 'Jan 20', 'Jan 21', 'Jan 23', 'Jan 24', 'Jan 25', 'Jan 26', 'Jan 24', 'Jan 28', 'Jan 29'],
                axisBorder: {
                    show: false
                },
                axisTicks: {
                    show: false
                },
                tickAmount: 10,
                labels: {
                    //rotate: -45,
                    //rotateAlways: true,
                    style: {
                        colors: [labelColor],
                        fontSize: '12px'
                    }
                },
                crosshairs: {
                    show: false
                }
            },
            yaxis: {
                min: -50,
                max: 80,
                tickAmount: 6,
                labels: {
                    style: {
                        colors: [labelColor],
                        fontSize: '12px'
                    },
                    formatter: function (val) {
                        return parseInt(val) + "K"
                    }
                }
            },
            fill: {
                opacity: 1
            },
            states: {
                normal: {
                    filter: {
                        type: 'none',
                        value: 0
                    }
                },
                hover: {
                    filter: {
                        type: 'none',
                        value: 0
                    }
                },
                active: {
                    allowMultipleDataPointsSelection: false,
                    filter: {
                        type: 'none',
                        value: 0
                    }
                }
            },
            tooltip: {
                style: {
                    fontSize: '12px',
                    borderRadius: 4
                },
                y: {
                    formatter: function (val) {
                        if (val > 0) {
                            return val + 'K';
                        } else {
                            return Math.abs(val) + 'K';
                        }
                    }
                }
            },
            colors: [baseColor, negativeColor],
            grid: {
                borderColor: borderColor,
                strokeDashArray: 4,               
                yaxis: {
                    lines: {
                        show: true
                    }
                }
            }
        };

        chart.self = new ApexCharts(element, options);

        // Set timeout to properly get the parent elements width
        setTimeout(function() {
            chart.self.render();
            chart.rendered = true;
        }, 200); 
    }

    // Public methods
    return {
        init: function () {
            initChart();

            // Update chart on theme mode change
            KTThemeMode.on("kt.thememode.change", function() {                
                if (chart.rendered) {
                    chart.self.destroy();
                }

                initChart(chart);
            });
        }   
    }
}();

// Webpack support
if (typeof module !== 'undefined') {
    module.exports = KTChartsWidget1;
}

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTChartsWidget1.init();
});

"use strict";

// Class definition
var KTChartsWidget10 = function () {
    var chart1 = {
        self: null,
        rendered: false
    }; 

    var chart2 = {
        self: null,
        rendered: false
    };

    var chart3 = {
        self: null,
        rendered: false
    };

    var chart4 = {
        self: null,
        rendered: false
    };   

    // Private methods
    var initChart = function(chart, toggle, chartSelector, data, initByDefault) {
        var element = document.querySelector(chartSelector);

        if (!element) {
            return;
        }
        
        var height = parseInt(KTUtil.css(element, 'height'));
        var labelColor = KTUtil.getCssVariableValue('--kt-gray-900');
        var borderColor = KTUtil.getCssVariableValue('--kt-border-dashed-color');    

        var options = {
            series: [{
                name: 'Achieved Target',
                data: data
            }],
            chart: {
                fontFamily: 'inherit',
                type: 'bar',
                height: height,
                toolbar: {
                    show: false
                }              
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: ['22%'],
                    borderRadius: 5,                     
                    dataLabels: {
                        position: "top" // top, center, bottom
                    },
                    startingShape: 'flat'
                },
            },
            legend: {
                show: false
            },
            dataLabels: {
                enabled: true, 
                offsetY: -30,                                             
                style: {
                    fontSize: '13px',
                    colors: [labelColor]
                },
                formatter: function(val) {
                    return val + "K";
                }          
            },
            stroke: {
                show: true,
                width: 2,
                colors: ['transparent']
            },
            xaxis: {
                categories: ['Metals', 'Energy', 'Agro', 'Machines', 'Transport', 'Textile', 'Wood'],
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false
                },
                labels: {
                    style: {
                        colors: KTUtil.getCssVariableValue('--kt-gray-500'),
                        fontSize: '13px'
                    }                    
                },
                crosshairs: {
                    fill: {         
                        gradient: {         
                            opacityFrom: 0,
                            opacityTo: 0
                        }
                    }
                }
            },
            yaxis: {
                labels: {
                    style: {
                        colors: KTUtil.getCssVariableValue('--kt-gray-500'),
                        fontSize: '13px'
                    },
                    formatter: function (val) {
                        return parseInt(val) + "K"
                    }
                }
            },
            fill: {
                opacity: 1
            },
            states: {
                normal: {
                    filter: {
                        type: 'none',
                        value: 0
                    }
                },
                hover: {
                    filter: {
                        type: 'none',
                        value: 0
                    }
                },
                active: {
                    allowMultipleDataPointsSelection: false,
                    filter: {
                        type: 'none',
                        value: 0
                    }
                }
            },
            tooltip: {
                style: {
                    fontSize: '12px'
                },
                y: {
                    formatter: function (val) {
                        return + val + "K"
                    }
                }
            },
            colors: [KTUtil.getCssVariableValue('--kt-primary'), KTUtil.getCssVariableValue('--kt-primary-light')],
            grid: {
                borderColor: borderColor,
                strokeDashArray: 4,
                yaxis: {
                    lines: {
                        show: true
                    }
                }
            }
        };

        chart.self = new ApexCharts(element, options);        
        var tab = document.querySelector(toggle);
        
        if (initByDefault === true) {
            // Set timeout to properly get the parent elements width
            setTimeout(function() {
                chart.self.render();  
                chart.rendered = true;
            }, 200);
        }        

        tab.addEventListener('shown.bs.tab', function (event) {
            if (chart.rendered === false) {
                chart.self.render();  
                chart.rendered = true;
            }
        });
    }

    // Public methods
    return {
        init: function () {  
            var chart1Data = [30, 18, 43, 70, 13, 37, 23];
            initChart(chart1, '#kt_charts_widget_10_tab_1', '#kt_charts_widget_10_chart_1', chart1Data, true);

            var chart2Data = [25, 55, 35, 50, 45, 20, 31];
            initChart(chart2, '#kt_charts_widget_10_tab_2', '#kt_charts_widget_10_chart_2', chart2Data, false);

            var chart3Data = [45, 15, 35, 70, 45, 50, 21];
            initChart(chart3, '#kt_charts_widget_10_tab_3', '#kt_charts_widget_10_chart_3', chart3Data, false);

            var chart4Data = [15, 55, 25, 50, 25, 60, 31];
            initChart(chart4, '#kt_charts_widget_10_tab_4', '#kt_charts_widget_10_chart_4', chart4Data, false);


            // Update chart on theme mode change
            KTThemeMode.on("kt.thememode.change", function() {
                if (chart1.rendered) {
                    chart1.self.destroy();
                }

                if (chart2.rendered) {
                    chart2.self.destroy();
                }

                if (chart3.rendered) {
                    chart3.self.destroy();
                }

                if (chart4.rendered) {
                    chart4.self.destroy();
                }
                
                initChart(chart1, '#kt_charts_widget_10_tab_1', '#kt_charts_widget_10_chart_1', chart1Data, chart1.rendered);
                initChart(chart2, '#kt_charts_widget_10_tab_2', '#kt_charts_widget_10_chart_2', chart2Data, chart2.rendered);  
                initChart(chart3, '#kt_charts_widget_10_tab_3', '#kt_charts_widget_10_chart_3', chart3Data, chart3.rendered);
                initChart(chart4, '#kt_charts_widget_10_tab_4', '#kt_charts_widget_10_chart_4', chart4Data, chart4.rendered);                  
            });      
        }   
    }
}();

// Webpack support
if (typeof module !== 'undefined') {
    module.exports = KTChartsWidget10;
}

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTChartsWidget10.init();
});


 
"use strict";

// Class definition
var KTChartsWidget11 = function () {
    var chart1 = {
        self: null,
        rendered: false
    }; 

    var chart2 = {
        self: null,
        rendered: false
    };

    var chart3 = {
        self: null,
        rendered: false
    };

    // Private methods
    var initChart = function(chart, toggle, chartSelector, data, initByDefault) {
        var element = document.querySelector(chartSelector);  
        var height = parseInt(KTUtil.css(element, 'height'));

        if (!element) {
            return;
        }        
        
        var labelColor = KTUtil.getCssVariableValue('--kt-gray-500');
        var borderColor = KTUtil.getCssVariableValue('--kt-border-dashed-color');
        var baseColor = KTUtil.getCssVariableValue('--kt-success');         

        var options = {
            series: [{
                name: 'Deliveries',
                data: data
            }],            
            chart: {
                fontFamily: 'inherit',
                type: 'area',
                height: height,
                toolbar: {
                    show: false
                }
            },             
            legend: {
                show: false
            },
            dataLabels: {
                enabled: false
            },
            fill: {
                type: "gradient",
                gradient: {
                    shadeIntensity: 1,
                    opacityFrom: 0.4,
                    opacityTo: 0,
                    stops: [0, 80, 100]
                }
            },
            stroke: {
                curve: 'smooth',
                show: true,
                width: 3,
                colors: [baseColor]
            },
            xaxis: {
                categories: ['', 'Apr 02', 'Apr 06', 'Apr 06', 'Apr 05', 'Apr 06', 'Apr 10', 'Apr 08', 'Apr 09', 'Apr 14', 'Apr 10', 'Apr 12', 'Apr 18', 'Apr 14', 
                    'Apr 15', 'Apr 14', 'Apr 17', 'Apr 18', 'Apr 02', 'Apr 06', 'Apr 18', 'Apr 05', 'Apr 06', 'Apr 10', 'Apr 08', 'Apr 22', 'Apr 14', 'Apr 11', 'Apr 12', ''
                ],
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false
                },
                tickAmount: 5,
                labels: {
                    rotate: 0,
                    rotateAlways: true,
                    style: {
                        colors: labelColor,
                        fontSize: '13px'
                    }
                },
                crosshairs: {
                    position: 'front',
                    stroke: {
                        color: baseColor,
                        width: 1,
                        dashArray: 3
                    }
                },
                tooltip: {
                    enabled: true,
                    formatter: undefined,
                    offsetY: 0,
                    style: {
                        fontSize: '13px'
                    }
                }
            },
            yaxis: {
                tickAmount: 4,
                max: 24,
                min: 10,
                labels: {
                    style: {
                        colors: labelColor,
                        fontSize: '13px'
                    }                     
                }
            },
            states: {
                normal: {
                    filter: {
                        type: 'none',
                        value: 0
                    }
                },
                hover: {
                    filter: {
                        type: 'none',
                        value: 0
                    }
                },
                active: {
                    allowMultipleDataPointsSelection: false,
                    filter: {
                        type: 'none',
                        value: 0
                    }
                }
            },
            tooltip: {
                style: {
                    fontSize: '12px'
                },
                y: {
                    formatter: function (val) {
                        return + val  
                    }
                }
            },
            colors: [baseColor],
            grid: {
                borderColor: borderColor,
                strokeDashArray: 3,
                yaxis: {
                    lines: {
                        show: true
                    }
                }
            },
            markers: {
                strokeColor: baseColor,
                strokeWidth: 3
            }
        };

        chart.self = new ApexCharts(element, options);        
        var tab = document.querySelector(toggle);
        
        if (initByDefault === true) {
            // Set timeout to properly get the parent elements width
            setTimeout(function() {
                chart.self.render();  
                chart.rendered = true;
            }, 200);
        }        

        tab.addEventListener('shown.bs.tab', function (event) {
            if (chart.rendered === false) {
                chart.self.render();  
                chart.rendered = true;
            }
        });
    }

    // Public methods
    return {
        init: function () { 
            var chart1Data = [16, 19, 19, 16, 16, 14, 15, 15, 17, 17, 19, 19, 18, 18, 20, 20, 18, 18, 22, 22, 20, 20, 18, 18, 20, 20, 18, 20, 20, 22];
            initChart(chart1, '#kt_charts_widget_11_tab_1', '#kt_charts_widget_11_chart_1', chart1Data, false);

            var chart2Data = [18, 18, 20, 20, 18, 18, 22, 22, 20, 20, 18, 18, 20, 20, 18, 18, 20, 20, 22, 15, 18, 18, 17, 17, 15, 15, 17, 17, 19, 17];
            initChart(chart2, '#kt_charts_widget_11_tab_2', '#kt_charts_widget_11_chart_2', chart2Data, false);

            var chart3Data = [17, 20, 20, 19, 19, 17, 17, 19, 19, 21, 21, 19, 19, 21, 21, 18, 18, 16, 17, 17, 19, 19, 21, 21, 19, 19, 17, 17, 18, 18];
            initChart(chart3, '#kt_charts_widget_11_tab_3', '#kt_charts_widget_11_chart_3', chart3Data, true);
           
            // Update chart on theme mode change
            KTThemeMode.on("kt.thememode.change", function() {
                if (chart1.rendered) {
                    chart1.self.destroy();
                }

                if (chart2.rendered) {
                    chart2.self.destroy();
                }

                if (chart3.rendered) {
                    chart3.self.destroy();
                } 
                
                initChart(chart1, '#kt_charts_widget_11_tab_1', '#kt_charts_widget_11_chart_1', chart1Data, chart1.rendered);
                initChart(chart2, '#kt_charts_widget_11_tab_2', '#kt_charts_widget_11_chart_2', chart2Data, chart2.rendered);  
                initChart(chart3, '#kt_charts_widget_11_tab_3', '#kt_charts_widget_11_chart_3', chart3Data, chart3.rendered);                                           
            });             
        }   
    }
}();

// Webpack support
if (typeof module !== 'undefined') {
    module.exports = KTChartsWidget11;
}

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTChartsWidget11.init();
});

"use strict";

// Class definition
var KTChartsWidget12 = function () {
    // Private methods
    var initChart = function(tabSelector, chartSelector, data, initByDefault) {
        var element = document.querySelector(chartSelector);

        if (!element) {
            return;
        }
        
        var height = parseInt(KTUtil.css(element, 'height'));
        var labelColor = KTUtil.getCssVariableValue('--kt-gray-900');

        var borderColor = KTUtil.getCssVariableValue('--kt-border-dashed-color');    

        var options = {
            series: [{
                name: 'Deliveries',
                data: data
            }],
            chart: {
                fontFamily: 'inherit',
                type: 'bar',
                height: height,
                toolbar: {
                    show: false
                }              
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: ['22%'],
                    borderRadius: 5,                     
                    dataLabels: {
                        position: "top" // top, center, bottom
                    },
                    startingShape: 'flat'
                },
            },
            legend: {
                show: false
            },
            dataLabels: {
                enabled: true, 
                offsetY: -28,                                             
                style: {
                    fontSize: '13px',
                    colors: labelColor
                }, 
                
                formatter: function(val) {
                    return val + "K";
                } 
            },
            stroke: {
                show: true,
                width: 2,
                colors: ['transparent']
            },
            xaxis: {
                categories: ['Grossey', 'Pet Food', 'Flowers', 'Restaurant', 'Kids Toys', 'Clothing', 'Still Water'],
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false
                },
                labels: {
                    style: {
                        colors: KTUtil.getCssVariableValue('--kt-gray-500'),
                        fontSize: '13px'
                    }                    
                },
                crosshairs: {
                    fill: {         
                        gradient: {         
                            opacityFrom: 0,
                            opacityTo: 0
                        }
                    }
                }
            },
            yaxis: {
                labels: {
                    style: {
                        colors: KTUtil.getCssVariableValue('--kt-gray-500'),
                        fontSize: '13px'
                    },
                    
                    formatter: function(val) {
                        return val + "K";
                    } 
                }
            },
            fill: {
                opacity: 1
            },
            states: {
                normal: {
                    filter: {
                        type: 'none',
                        value: 0
                    }
                },
                hover: {
                    filter: {
                        type: 'none',
                        value: 0
                    }
                },
                active: {
                    allowMultipleDataPointsSelection: false,
                    filter: {
                        type: 'none',
                        value: 0
                    }
                }
            },
            tooltip: {
                style: {
                    fontSize: '12px'
                },
                y: {
                    formatter: function (val) {
                        return  + val + 'K' 
                    }
                }
            },
            colors: [KTUtil.getCssVariableValue('--kt-primary'), KTUtil.getCssVariableValue('--kt-primary-light')],
            grid: {
                borderColor: borderColor,
                strokeDashArray: 4,
                yaxis: {
                    lines: {
                        show: true
                    }
                }
            }
        };

        var chart = new ApexCharts(element, options);

        var init = false;
        var tab = document.querySelector(tabSelector);
        
        if (initByDefault === true) {
            chart.render();
            init = true;
        }        

        tab.addEventListener('shown.bs.tab', function (event) {
            if (init == false) {
                chart.render();
                init = true;
            }
        })
    }

    // Public methods
    return {
        init: function () {   
            initChart('#kt_charts_widget_12_tab_1', '#kt_charts_widget_12_chart_1', [54, 42, 75, 110, 23, 87, 50], true);
            initChart('#kt_charts_widget_12_tab_2', '#kt_charts_widget_12_chart_2', [25, 55, 35, 50, 45, 20, 31], false); 
            initChart('#kt_charts_widget_12_tab_3', '#kt_charts_widget_12_chart_3', [45, 15, 35, 70, 45, 50, 21], false); 
        }        
    }
}();

// Webpack support
if (typeof module !== 'undefined') {
    module.exports = KTChartsWidget12;
}

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTChartsWidget12.init();
});


 
"use strict";

// Class definition
var KTChartsWidget13 = (function () {
    // Private methods
    var initChart = function () {
        // Check if amchart library is included
        if (typeof am5 === "undefined") {
            return;
        }

        var element = document.getElementById("kt_charts_widget_13_chart");

        if (!element) {
            return;
        }

        var root;

        var init = function() {
            // Create root element
            // https://www.amcharts.com/docs/v5/getting-started/#Root_element
            root = am5.Root.new(element);

            // Set themes
            // https://www.amcharts.com/docs/v5/concepts/themes/
            root.setThemes([am5themes_Animated.new(root)]);

            // Create chart
            // https://www.amcharts.com/docs/v5/charts/xy-chart/
            var chart = root.container.children.push(
                am5xy.XYChart.new(root, {
                    panX: true,
                    panY: true,
                    wheelX: "panX",
                    wheelY: "zoomX",
                })
            );

            // Add cursor
            // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
            var cursor = chart.set(
                "cursor",
                am5xy.XYCursor.new(root, {
                    behavior: "none"
                })
            );

            cursor.lineY.set("visible", false);

            // The data
            var data = [
                {
                    year: "2003",
                    cars: 1587,
                    motorcycles: 650,
                    bicycles: 121,
                },
                {
                    year: "2004",
                    cars: 1567,
                    motorcycles: 683,
                    bicycles: 146,
                },
                {
                    year: "2005",
                    cars: 1617,
                    motorcycles: 691,
                    bicycles: 138,
                },
                {
                    year: "2006",
                    cars: 1630,
                    motorcycles: 642,
                    bicycles: 127,
                },
                {
                    year: "2007",
                    cars: 1660,
                    motorcycles: 699,
                    bicycles: 105,
                },
                {
                    year: "2008",
                    cars: 1683,
                    motorcycles: 721,
                    bicycles: 109,
                },
                {
                    year: "2009",
                    cars: 1691,
                    motorcycles: 737,
                    bicycles: 112,
                },
                {
                    year: "2010",
                    cars: 1298,
                    motorcycles: 680,
                    bicycles: 101,
                },
                {
                    year: "2011",
                    cars: 1275,
                    motorcycles: 664,
                    bicycles: 97,
                },
                {
                    year: "2012",
                    cars: 1246,
                    motorcycles: 648,
                    bicycles: 93,
                },
                {
                    year: "2013",
                    cars: 1318,
                    motorcycles: 697,
                    bicycles: 111,
                },
                {
                    year: "2014",
                    cars: 1213,
                    motorcycles: 633,
                    bicycles: 87,
                },
                {
                    year: "2015",
                    cars: 1199,
                    motorcycles: 621,
                    bicycles: 79,
                },
                {
                    year: "2016",
                    cars: 1110,
                    motorcycles: 210,
                    bicycles: 81,
                },
                {
                    year: "2017",
                    cars: 1165,
                    motorcycles: 232,
                    bicycles: 75,
                },
                {
                    year: "2018",
                    cars: 1145,
                    motorcycles: 219,
                    bicycles: 88,
                },
                {
                    year: "2019",
                    cars: 1163,
                    motorcycles: 201,
                    bicycles: 82,
                },
                {
                    year: "2020",
                    cars: 1180,
                    motorcycles: 285,
                    bicycles: 87,
                },
                {
                    year: "2021",
                    cars: 1159,
                    motorcycles: 277,
                    bicycles: 71,
                },
            ];

            // Create axes
            // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
            var xAxis = chart.xAxes.push(
                am5xy.CategoryAxis.new(root, {
                    categoryField: "year",
                    startLocation: 0.5,
                    endLocation: 0.5,
                    renderer: am5xy.AxisRendererX.new(root, {}),
                    tooltip: am5.Tooltip.new(root, {}),
                })
            );

            xAxis.get("renderer").grid.template.setAll({
                disabled: true,
                strokeOpacity: 0
            });

            xAxis.get("renderer").labels.template.setAll({
                fontWeight: "400",
                fontSize: 13,
                fill: am5.color(KTUtil.getCssVariableValue('--kt-gray-500'))
            });

            xAxis.data.setAll(data);

            var yAxis = chart.yAxes.push(
                am5xy.ValueAxis.new(root, {
                    renderer: am5xy.AxisRendererY.new(root, {}),
                })
            );

            yAxis.get("renderer").grid.template.setAll({
                stroke: am5.color(KTUtil.getCssVariableValue('--kt-gray-300')),
                strokeWidth: 1,
                strokeOpacity: 1,
                strokeDasharray: [3]
            });

            yAxis.get("renderer").labels.template.setAll({
                fontWeight: "400",
                fontSize: 13,
                fill: am5.color(KTUtil.getCssVariableValue('--kt-gray-500'))
            });

            // Add series
            // https://www.amcharts.com/docs/v5/charts/xy-chart/series/

            function createSeries(name, field, color) {
                var series = chart.series.push(
                    am5xy.LineSeries.new(root, {
                        name: name,
                        xAxis: xAxis,
                        yAxis: yAxis,
                        stacked: true,
                        valueYField: field,
                        categoryXField: "year",
                        fill: am5.color(color),
                        tooltip: am5.Tooltip.new(root, {
                            pointerOrientation: "horizontal",
                            labelText: "[bold]{name}[/]\n{categoryX}: {valueY}",
                        }),
                    })
                );

                

                series.fills.template.setAll({
                    fillOpacity: 0.5,
                    visible: true,
                });

                series.data.setAll(data);
                series.appear(1000);
            }

            createSeries("Cars", "cars", KTUtil.getCssVariableValue('--kt-primary'));
            createSeries("Motorcycles", "motorcycles", KTUtil.getCssVariableValue('--kt-success'));
            createSeries("Bicycles", "bicycles", KTUtil.getCssVariableValue('--kt-warning'));

            // Add scrollbar
            // https://www.amcharts.com/docs/v5/charts/xy-chart/scrollbars/
            var scrollbarX = chart.set(
                "scrollbarX",
                am5.Scrollbar.new(root, {
                    orientation: "horizontal",
                    marginBottom: 25,
                    height: 8
                })
            );

            // Create axis ranges
            // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/axis-ranges/
            var rangeDataItem = xAxis.makeDataItem({
                category: "2016",
                endCategory: "2021",
            });

            var range = xAxis.createAxisRange(rangeDataItem);

            rangeDataItem.get("grid").setAll({
                stroke: am5.color(KTUtil.getCssVariableValue('--kt-gray-200')),
                strokeOpacity: 0.5,
                strokeDasharray: [3],
            });

            rangeDataItem.get("axisFill").setAll({
                fill: am5.color(KTUtil.getCssVariableValue('--kt-gray-200')),
                fillOpacity: 0.1,
            });

            rangeDataItem.get("label").setAll({
                inside: true,
                text: "Fines increased",
                rotation: 90,
                centerX: am5.p100,
                centerY: am5.p100,
                location: 0,
                paddingBottom: 10,
                paddingRight: 15,
            });

            var rangeDataItem2 = xAxis.makeDataItem({
                category: "2021",
            });

            var range2 = xAxis.createAxisRange(rangeDataItem2);

            rangeDataItem2.get("grid").setAll({
                stroke: am5.color(KTUtil.getCssVariableValue('--kt-danger')),
                strokeOpacity: 1,
                strokeDasharray: [3],
            });

            rangeDataItem2.get("label").setAll({
                inside: true,
                text: "Fee introduced",
                rotation: 90,
                centerX: am5.p100,
                centerY: am5.p100,
                location: 0,
                paddingBottom: 10,
                paddingRight: 15,
            });

            // Make stuff animate on load
            // https://www.amcharts.com/docs/v5/concepts/animations/
            chart.appear(1000, 100);
        }

        am5.ready(function () {
            init();
        }); // end am5.ready()

        // Update chart on theme mode change
		KTThemeMode.on("kt.thememode.change", function() {     
			// Destroy chart
			root.dispose();

			// Reinit chart
			init();
		});
    };

    // Public methods
    return {
        init: function () {
            initChart();
        },
    };
})();

// Webpack support
if (typeof module !== "undefined") {
    module.exports = KTChartsWidget13;
}

// On document ready
KTUtil.onDOMContentLoaded(function () {
    KTChartsWidget13.init();
});

"use strict";

// Class definition
var KTChartsWidget14 = (function () {
    // Private methods
    var initChart = function () {
        // Check if amchart library is included
        if (typeof am5 === "undefined") {
            return;
        }

        var element = document.getElementById("kt_charts_widget_14_chart");

        if (!element) {
            return;
        }

        am5.ready(function () {
            // Create root element
            // https://www.amcharts.com/docs/v5/getting-started/#Root_element
            var root = am5.Root.new(element);

            // Set themes
            // https://www.amcharts.com/docs/v5/concepts/themes/
            root.setThemes([am5themes_Animated.new(root)]);

            // Create chart
            // https://www.amcharts.com/docs/v5/charts/radar-chart/
            var chart = root.container.children.push(
                am5radar.RadarChart.new(root, {
                    panX: false,
                    panY: false,
                    wheelX: "panX",
                    wheelY: "zoomX",
                    innerRadius: am5.percent(20),
                    startAngle: -90,
                    endAngle: 180,
                })
            );

            // Data
            var data = [
                {
                    category: "Research",
                    value: 80,
                    full: 100,
                    columnSettings: {
                        fillOpacity: 1,
                        fill: am5.color(KTUtil.getCssVariableValue('--kt-info')),
                    },
                },
                {
                    category: "Marketing",
                    value: 35,
                    full: 100,
                    columnSettings: {
                        fillOpacity: 1,
                        fill: am5.color(KTUtil.getCssVariableValue('--kt-danger')),
                    },
                },
                {
                    category: "Distribution",
                    value: 92,
                    full: 100,
                    columnSettings: {
                        fillOpacity: 1,
                        fill: am5.color(KTUtil.getCssVariableValue('--kt-primary')),
                    },
                },
                {
                    category: "Human Resources",
                    value: 68,
                    full: 100,
                    columnSettings: {
                        fillOpacity: 1,
                        fill: am5.color(KTUtil.getCssVariableValue('--kt-success')),
                    },
                },
            ];

            // Add cursor
            // https://www.amcharts.com/docs/v5/charts/radar-chart/#Cursor
            var cursor = chart.set(
                "cursor",
                am5radar.RadarCursor.new(root, {
                    behavior: "zoomX",
                })
            );

            cursor.lineY.set("visible", false);

            // Create axes and their renderers
            // https://www.amcharts.com/docs/v5/charts/radar-chart/#Adding_axes
            var xRenderer = am5radar.AxisRendererCircular.new(root, {
                //minGridDistance: 50
            });

            xRenderer.labels.template.setAll({
                radius: 10
            });

            xRenderer.grid.template.setAll({
                forceHidden: true,
            });

            var xAxis = chart.xAxes.push(
                am5xy.ValueAxis.new(root, {
                    renderer: xRenderer,
                    min: 0,
                    max: 100,
                    strictMinMax: true,
                    numberFormat: "#'%'",
                    tooltip: am5.Tooltip.new(root, {})
                })
            );

            xAxis.get("renderer").labels.template.setAll({
                fill: am5.color(KTUtil.getCssVariableValue('--kt-gray-500')),
                fontWeight: "500",
                fontSize: 16,
            });

            var yRenderer = am5radar.AxisRendererRadial.new(root, {
                minGridDistance: 20,
            });

            yRenderer.labels.template.setAll({
                centerX: am5.p100,
                fontWeight: "500",
                fontSize: 18,
                fill: am5.color(KTUtil.getCssVariableValue('--kt-gray-500')),
                templateField: "columnSettings",
            });

            yRenderer.grid.template.setAll({
                forceHidden: true,
            });

            var yAxis = chart.yAxes.push(
                am5xy.CategoryAxis.new(root, {
                    categoryField: "category",
                    renderer: yRenderer,
                })
            );

            yAxis.data.setAll(data);

            // Create series
            // https://www.amcharts.com/docs/v5/charts/radar-chart/#Adding_series
            var series1 = chart.series.push(
                am5radar.RadarColumnSeries.new(root, {
                    xAxis: xAxis,
                    yAxis: yAxis,
                    clustered: false,
                    valueXField: "full",
                    categoryYField: "category",
                    fill: root.interfaceColors.get("alternativeBackground"),
                })
            );

            series1.columns.template.setAll({
                width: am5.p100,
                fillOpacity: 0.08,
                strokeOpacity: 0,
                cornerRadius: 20,
            });

            series1.data.setAll(data);

            var series2 = chart.series.push(
                am5radar.RadarColumnSeries.new(root, {
                    xAxis: xAxis,
                    yAxis: yAxis,
                    clustered: false,
                    valueXField: "value",
                    categoryYField: "category",
                })
            );

            series2.columns.template.setAll({
                width: am5.p100,
                strokeOpacity: 0,
                tooltipText: "{category}: {valueX}%",
                cornerRadius: 20,
                templateField: "columnSettings",
            });

            series2.data.setAll(data);

            // Animate chart and series in
            // https://www.amcharts.com/docs/v5/concepts/animations/#Initial_animation
            series1.appear(1000);
            series2.appear(1000);
            chart.appear(1000, 100);
        });
    };

    // Public methods
    return {
        init: function () {
            initChart();
        },
    };
})();

// Webpack support
if (typeof module !== "undefined") {
    module.exports = KTChartsWidget14;
}

// On document ready
KTUtil.onDOMContentLoaded(function () {
    KTChartsWidget14.init();
});

"use strict";

// Class definition
var KTChartsWidget15 = (function () {
    // Private methods
    var initChart = function () {
        // Check if amchart library is included
        if (typeof am5 === "undefined") {
            return;
        }

        var element = document.getElementById("kt_charts_widget_15_chart");

        if (!element) {
            return;
        }

        var root;

        var init = function() {
            // Create root element
            // https://www.amcharts.com/docs/v5/getting-started/#Root_element
            root = am5.Root.new(element);

            // Set themes
            // https://www.amcharts.com/docs/v5/concepts/themes/
            root.setThemes([am5themes_Animated.new(root)]);

            // Create chart
            // https://www.amcharts.com/docs/v5/charts/xy-chart/
            var chart = root.container.children.push(
                am5xy.XYChart.new(root, {
                    panX: false,
                    panY: false,
                    //wheelX: "panX",
                    //wheelY: "zoomX",
                    layout: root.verticalLayout,
                })
            );

            // Data
            var colors = chart.get("colors");

            var data = [
                {
                    country: "US",
                    visits: 725,
                    icon: "https://www.amcharts.com/wp-content/uploads/flags/united-states.svg",
                    columnSettings: { 
                        fill: am5.color(KTUtil.getCssVariableValue('--kt-primary'))        
                    }
                },
                {
                    country: "UK",
                    visits: 625,
                    icon: "https://www.amcharts.com/wp-content/uploads/flags/united-kingdom.svg",
                    columnSettings: { 
                        fill: am5.color(KTUtil.getCssVariableValue('--kt-primary'))        
                    }
                },
                {
                    country: "China",
                    visits: 602,
                    icon: "https://www.amcharts.com/wp-content/uploads/flags/china.svg",
                    columnSettings: { 
                        fill: am5.color(KTUtil.getCssVariableValue('--kt-primary'))        
                    }
                },
                {
                    country: "Japan",
                    visits: 509,
                    icon: "https://www.amcharts.com/wp-content/uploads/flags/japan.svg",
                    columnSettings: { 
                        fill: am5.color(KTUtil.getCssVariableValue('--kt-primary'))        
                    }
                },
                {
                    country: "Germany",
                    visits: 322,
                    icon: "https://www.amcharts.com/wp-content/uploads/flags/germany.svg",
                    columnSettings: { 
                        fill: am5.color(KTUtil.getCssVariableValue('--kt-primary'))        
                    }
                },
                {
                    country: "France",
                    visits: 214,
                    icon: "https://www.amcharts.com/wp-content/uploads/flags/france.svg",
                    columnSettings: { 
                        fill: am5.color(KTUtil.getCssVariableValue('--kt-primary'))        
                    }
                },
                {
                    country: "India",
                    visits: 204,
                    icon: "https://www.amcharts.com/wp-content/uploads/flags/india.svg",
                    columnSettings: { 
                        fill: am5.color(KTUtil.getCssVariableValue('--kt-primary')),        
                    }
                },
                {
                    country: "Spain",
                    visits: 200,
                    icon: "https://www.amcharts.com/wp-content/uploads/flags/spain.svg",
                    columnSettings: { 
                        fill: am5.color(KTUtil.getCssVariableValue('--kt-primary'))        
                    }
                },
                {
                    country: "Italy",
                    visits: 165,
                    icon: "https://www.amcharts.com/wp-content/uploads/flags/italy.svg",
                    columnSettings: { 
                        fill: am5.color(KTUtil.getCssVariableValue('--kt-primary'))        
                    }
                },
                {
                    country: "Russia",
                    visits: 152,
                    icon: "https://www.amcharts.com/wp-content/uploads/flags/russia.svg",
                    columnSettings: { 
                        fill: am5.color(KTUtil.getCssVariableValue('--kt-primary'))        
                    }
                },
                {
                    country: "Norway",
                    visits: 125,
                    icon: "https://www.amcharts.com/wp-content/uploads/flags/norway.svg",
                    columnSettings: { 
                        fill: am5.color(KTUtil.getCssVariableValue('--kt-primary'))        
                    }
                },
                {
                    country: "Canada",
                    visits: 99,
                    icon: "https://www.amcharts.com/wp-content/uploads/flags/canada.svg",
                   columnSettings: { 
                        fill: am5.color(KTUtil.getCssVariableValue('--kt-primary'))        
                    }
                },
            ];

            // Create axes
            // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
            var xAxis = chart.xAxes.push(
                am5xy.CategoryAxis.new(root, {
                    categoryField: "country",
                    renderer: am5xy.AxisRendererX.new(root, {
                        minGridDistance: 30,
                    }),
                    bullet: function (root, axis, dataItem) {
                        return am5xy.AxisBullet.new(root, {
                            location: 0.5,
                            sprite: am5.Picture.new(root, {
                                width: 24,
                                height: 24,
                                centerY: am5.p50,
                                centerX: am5.p50,
                                src: dataItem.dataContext.icon,
                            }),
                        });
                    },
                })
            );

            xAxis.get("renderer").labels.template.setAll({
                paddingTop: 20,                
                fontWeight: "400",
                fontSize: 10,
                fill: am5.color(KTUtil.getCssVariableValue('--kt-gray-500'))
            });
            
            xAxis.get("renderer").grid.template.setAll({
                disabled: true,
                strokeOpacity: 0
            });

            xAxis.data.setAll(data);

            var yAxis = chart.yAxes.push(
                am5xy.ValueAxis.new(root, {
                    renderer: am5xy.AxisRendererY.new(root, {}),
                })
            );

            yAxis.get("renderer").grid.template.setAll({
                stroke: am5.color(KTUtil.getCssVariableValue('--kt-gray-300')),
                strokeWidth: 1,
                strokeOpacity: 1,
                strokeDasharray: [3]
            });

            yAxis.get("renderer").labels.template.setAll({
                fontWeight: "400",
                fontSize: 10,
                fill: am5.color(KTUtil.getCssVariableValue('--kt-gray-500'))
            });

            // Add series
            // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
            var series = chart.series.push(
                am5xy.ColumnSeries.new(root, {
                    xAxis: xAxis,
                    yAxis: yAxis,
                    valueYField: "visits",
                    categoryXField: "country"
                })
            );

            series.columns.template.setAll({
                tooltipText: "{categoryX}: {valueY}",
                tooltipY: 0,
                strokeOpacity: 0,
                templateField: "columnSettings",
            });

            series.columns.template.setAll({
                strokeOpacity: 0,
                cornerRadiusBR: 0,
                cornerRadiusTR: 6,
                cornerRadiusBL: 0,
                cornerRadiusTL: 6,
            });

            series.data.setAll(data);

            // Make stuff animate on load
            // https://www.amcharts.com/docs/v5/concepts/animations/
            series.appear();
            chart.appear(1000, 100);
        }

        am5.ready(function () {
            init();
        });

        // Update chart on theme mode change
		KTThemeMode.on("kt.thememode.change", function() {     
			// Destroy chart
			root.dispose();

			// Reinit chart
			init();
		});
    };

    // Public methods
    return {
        init: function () {
            initChart();
        },
    };
})();

// Webpack support
if (typeof module !== "undefined") {
    module.exports = KTChartsWidget15;
}

// On document ready
KTUtil.onDOMContentLoaded(function () {
    KTChartsWidget15.init();
});

"use strict";

// Class definition
var KTChartsWidget16 = (function () {
    // Private methods
    var initChart = function () {
        // Check if amchart library is included
        if (typeof am5 === "undefined") {
            return;
        }

        var element = document.getElementById("kt_charts_widget_16_chart");

        if (!element) {
            return;
        }

        var root;

        var init = function() {
            // Create root element
            // https://www.amcharts.com/docs/v5/getting-started/#Root_element
            root = am5.Root.new(element);

            // Set themes
            // https://www.amcharts.com/docs/v5/concepts/themes/
            root.setThemes([am5themes_Animated.new(root)]);

            // Create chart
            // https://www.amcharts.com/docs/v5/charts/xy-chart/
            var chart = root.container.children.push(
                am5xy.XYChart.new(root, {
                    panX: false,
                    panY: false,
                    wheelX: "panX",
                    wheelY: "zoomX",
                    layout: root.verticalLayout,
                })
            );

            var colors = chart.get("colors");

            var data = [
                {
                    country: "US",
                    visits: 725,
                },
                {
                    country: "UK",
                    visits: 625,
                },
                {
                    country: "China",
                    visits: 602,
                },
                {
                    country: "Japan",
                    visits: 509,
                },
                {
                    country: "Germany",
                    visits: 322,
                },
                {
                    country: "France",
                    visits: 214,
                },
                {
                    country: "India",
                    visits: 204,
                },
                {
                    country: "Spain",
                    visits: 198,
                },
                {
                    country: "Italy",
                    visits: 165,
                },
                {
                    country: "Russia",
                    visits: 130,
                },
                {
                    country: "Norway",
                    visits: 93,
                },
                {
                    country: "Canada",
                    visits: 41,
                },
            ];

            prepareParetoData();

            function prepareParetoData() {
                var total = 0;

                for (var i = 0; i < data.length; i++) {
                    var value = data[i].visits;
                    total += value;
                }

                var sum = 0;
                for (var i = 0; i < data.length; i++) {
                    var value = data[i].visits;
                    sum += value;
                    data[i].pareto = (sum / total) * 100;
                }
            }

            // Create axes
            // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
            var xAxis = chart.xAxes.push(
                am5xy.CategoryAxis.new(root, {
                    categoryField: "country",
                    renderer: am5xy.AxisRendererX.new(root, {
                        minGridDistance: 30,
                    }),
                })
            );

            xAxis.get("renderer").labels.template.setAll({
                paddingTop: 10,
                fontWeight: "400",
                fontSize: 13,
                fill: am5.color(KTUtil.getCssVariableValue('--kt-gray-500'))
            });

            xAxis.get("renderer").grid.template.setAll({
                disabled: true,
                strokeOpacity: 0
            });

            xAxis.data.setAll(data);

            var yAxis = chart.yAxes.push(
                am5xy.ValueAxis.new(root, {
                    renderer: am5xy.AxisRendererY.new(root, {}),
                })
            );

            yAxis.get("renderer").labels.template.setAll({
                paddingLeft: 10,
                fontWeight: "400",
                fontSize: 13,
                fill: am5.color(KTUtil.getCssVariableValue('--kt-gray-500'))
            });

            yAxis.get("renderer").grid.template.setAll({
                stroke: am5.color(KTUtil.getCssVariableValue('--kt-gray-300')),
                strokeWidth: 1,
                strokeOpacity: 1,
                strokeDasharray: [3]
            });

            var paretoAxisRenderer = am5xy.AxisRendererY.new(root, {
                opposite: true,
            });

            var paretoAxis = chart.yAxes.push(
                am5xy.ValueAxis.new(root, {
                    renderer: paretoAxisRenderer,
                    min: 0,
                    max: 100,
                    strictMinMax: true,
                })
            );
            
            paretoAxis.get("renderer").labels.template.setAll({
                fontWeight: "400",
                fontSize: 13,
                fill: am5.color(KTUtil.getCssVariableValue('--kt-gray-500'))
            });

            paretoAxisRenderer.grid.template.set("forceHidden", true);
            paretoAxis.set("numberFormat", "#'%");

            // Add series
            // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
            var series = chart.series.push(
                am5xy.ColumnSeries.new(root, {
                    xAxis: xAxis,
                    yAxis: yAxis,
                    valueYField: "visits",
                    categoryXField: "country",
                })
            );

            series.columns.template.setAll({
                tooltipText: "{categoryX}: {valueY}",
                tooltipY: 0,
                strokeOpacity: 0,
                cornerRadiusTL: 6,
                cornerRadiusTR: 6,
            });

            series.columns.template.adapters.add(
                "fill",
                function (fill, target) {
                    return chart
                        .get("colors")
                        .getIndex(series.dataItems.indexOf(target.dataItem));
                }
            );

            // pareto series
            var paretoSeries = chart.series.push(
                am5xy.LineSeries.new(root, {
                    xAxis: xAxis,
                    yAxis: paretoAxis,
                    valueYField: "pareto",
                    categoryXField: "country",
                    stroke: am5.color(KTUtil.getCssVariableValue('--kt-dark')),
                    maskBullets: false,
                })
            );

            paretoSeries.bullets.push(function () {
                return am5.Bullet.new(root, {
                    locationY: 1,
                    sprite: am5.Circle.new(root, {
                        radius: 5,
                        fill: am5.color(KTUtil.getCssVariableValue('--kt-primary')),
                        stroke: am5.color(KTUtil.getCssVariableValue('--kt-dark'))
                    }),
                });
            });

            series.data.setAll(data);
            paretoSeries.data.setAll(data);

            // Make stuff animate on load
            // https://www.amcharts.com/docs/v5/concepts/animations/
            series.appear();
            chart.appear(1000, 100);
        }

        am5.ready(function () {
            init();
        });

        // Update chart on theme mode change
		KTThemeMode.on("kt.thememode.change", function() {     
			// Destroy chart
			root.dispose();

			// Reinit chart
			init();
		});
    };

    // Public methods
    return {
        init: function () {
            initChart();
        },
    };
})();

// Webpack support
if (typeof module !== "undefined") {
    module.exports = KTChartsWidget16;
}

// On document ready
KTUtil.onDOMContentLoaded(function () {
    KTChartsWidget16.init();
});

"use strict";

// Class definition
var KTChartsWidget17 = (function () {
    // Private methods
    var initChart = function () {
        // Check if amchart library is included
        if (typeof am5 === "undefined") {
            return;
        }

        var element = document.getElementById("kt_charts_widget_17_chart");

        if (!element) {
            return;
        }

        var root;

        var init = function() {
            // Create root element
            // https://www.amcharts.com/docs/v5/getting-started/#Root_element
            root = am5.Root.new(element);

            // Set themes
            // https://www.amcharts.com/docs/v5/concepts/themes/
            root.setThemes([am5themes_Animated.new(root)]);

            // Create chart
            // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/
            // start and end angle must be set both for chart and series
            var chart = root.container.children.push(
                am5percent.PieChart.new(root, {
                    startAngle: 180,
                    endAngle: 360,
                    layout: root.verticalLayout,
                    innerRadius: am5.percent(50),
                })
            );

            // Create series
            // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Series
            // start and end angle must be set both for chart and series
            var series = chart.series.push(
                am5percent.PieSeries.new(root, {
                    startAngle: 180,
                    endAngle: 360,
                    valueField: "value",
                    categoryField: "category",
                    alignLabels: false,
                })
            );

            series.labels.template.setAll({
                fontWeight: "400",
                fontSize: 13,
                fill: am5.color(KTUtil.getCssVariableValue('--kt-gray-500'))
            });

            series.states.create("hidden", {
                startAngle: 180,
                endAngle: 180,
            });

            series.slices.template.setAll({
                cornerRadius: 5,
            });

            series.ticks.template.setAll({
                forceHidden: true,
            });

            // Set data
            // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Setting_data
            series.data.setAll([
                { value: 10, category: "One", fill: am5.color(KTUtil.getCssVariableValue('--kt-primary')) },
                { value: 9, category: "Two", fill: am5.color(KTUtil.getCssVariableValue('--kt-success')) },
                { value: 6, category: "Three", fill: am5.color(KTUtil.getCssVariableValue('--kt-danger')) },
                { value: 5, category: "Four", fill: am5.color(KTUtil.getCssVariableValue('--kt-warning')) },
                { value: 4, category: "Five", fill: am5.color(KTUtil.getCssVariableValue('--kt-info')) },
                { value: 3, category: "Six", fill: am5.color(KTUtil.getCssVariableValue('--kt-secondary')) }
            ]);

            series.appear(1000, 100);
        }

        am5.ready(function () {
            init();
        });

        // Update chart on theme mode change
		KTThemeMode.on("kt.thememode.change", function() {     
			// Destroy chart
			root.dispose();

			// Reinit chart
			init();
		});
    };

    // Public methods
    return {
        init: function () {
            initChart();
        },
    };
})();

// Webpack support
if (typeof module !== "undefined") {
    module.exports = KTChartsWidget17;
}

// On document ready
KTUtil.onDOMContentLoaded(function () {
    KTChartsWidget17.init();
});

"use strict";

// Class definition
var KTChartsWidget18 = function () {
    var chart = {
        self: null,
        rendered: false
    };

    // Private methods
    var initChart = function(chart) {
        var element = document.getElementById("kt_charts_widget_18_chart");

        if (!element) {
            return;
        }
        
        var height = parseInt(KTUtil.css(element, 'height'));
        var labelColor = KTUtil.getCssVariableValue('--kt-gray-900');
        var borderColor = KTUtil.getCssVariableValue('--kt-border-dashed-color');    

        var options = {
            series: [{
                name: 'Spent time',
                data: [54, 42, 75, 110, 23, 87, 50]
            }],
            chart: {
                fontFamily: 'inherit',
                type: 'bar',
                height: height,
                toolbar: {
                    show: false
                }              
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: ['28%'],
                    borderRadius: 5,                     
                    dataLabels: {
                        position: "top" // top, center, bottom
                    },
                    startingShape: 'flat'
                },
            },
            legend: {
                show: false
            },
            dataLabels: {
                enabled: true, 
                offsetY: -28,                                             
                style: {
                    fontSize: '13px',
                    colors: [labelColor]
                },
                    formatter: function(val) {
                        return val;// + "H";
                    }                           
            },
            stroke: {
                show: true,
                width: 2,
                colors: ['transparent']
            },
            xaxis: {
                categories: ['QA Analysis', 'Marketing', 'Web Dev', 'Maths', 'Front-end Dev', 'Physics', 'Phylosophy'],
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false
                },
                labels: {
                    style: {
                        colors: KTUtil.getCssVariableValue('--kt-gray-500'),
                        fontSize: '13px'
                    }                  
                },
                crosshairs: {
                    fill: {         
                        gradient: {         
                            opacityFrom: 0,
                            opacityTo: 0
                        }
                    }
                }
            },
            yaxis: {
                labels: {
                    style: {
                        colors: KTUtil.getCssVariableValue('--kt-gray-500'),
                        fontSize: '13px'
                    },
                    formatter: function(val) {
                        return val + "H";
                    } 
                }
            },
            fill: {
                opacity: 1
            },
            states: {
                normal: {
                    filter: {
                        type: 'none',
                        value: 0
                    }
                },
                hover: {
                    filter: {
                        type: 'none',
                        value: 0
                    }
                },
                active: {
                    allowMultipleDataPointsSelection: false,
                    filter: {
                        type: 'none',
                        value: 0
                    }
                }
            },
            tooltip: {
                style: {
                    fontSize: '12px'
                },
                y: {
                    formatter: function (val) {
                        return  + val + ' hours' 
                    }
                } 
            },
            colors: [KTUtil.getCssVariableValue('--kt-primary'), KTUtil.getCssVariableValue('--kt-primary-light')],
            grid: {
                borderColor: borderColor,
                strokeDashArray: 4,
                yaxis: {
                    lines: {
                        show: true
                    }
                }
            }
        };

        chart.self = new ApexCharts(element, options);

        // Set timeout to properly get the parent elements width
        setTimeout(function() {
            chart.self.render();
            chart.rendered = true;
        }, 200);           
    }

    // Public methods
    return {
        init: function () {
            initChart(chart);

            // Update chart on theme mode change
            KTThemeMode.on("kt.thememode.change", function() {                
                if (chart.rendered) {
                    chart.self.destroy();
                }

                initChart(chart);
            });
        }         
    }
}();

// Webpack support
if (typeof module !== 'undefined') {
    module.exports = KTChartsWidget18;
}

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTChartsWidget18.init();
});


 
"use strict";

// Class definition
var KTChartsWidget19 = (function () {
    // Private methods
    var initChart1 = function () {
        // Check if amchart library is included
        if (typeof am5 === "undefined") {
            return;
        }

        var element = document.getElementById("kt_charts_widget_19_chart_1");

        if (!element) {
            return;
        }

        var root;

        var init = function() {
            // Create root element
            // https://www.amcharts.com/docs/v5/getting-started/#Root_element
            root = am5.Root.new(element);

            // Set themes
            // https://www.amcharts.com/docs/v5/concepts/themes/
            root.setThemes([am5themes_Animated.new(root)]);

            // Create chart
            // https://www.amcharts.com/docs/v5/charts/radar-chart/
            var chart = root.container.children.push(
                am5radar.RadarChart.new(root, {
                    panX: false,
                    panY: false,
                    wheelX: "panX",
                    wheelY: "zoomX",
                    innerRadius: am5.percent(20),
                    startAngle: -90,
                    endAngle: 180,
                })
            );

            // Data
            var data = [
                {
                    category: "Research",
                    value: 80,
                    full: 100,
                    columnSettings: {
                        fillOpacity: 1,
                        fill: am5.color(KTUtil.getCssVariableValue('--kt-info')),
                    },
                },
                {
                    category: "Marketing",
                    value: 35,
                    full: 100,
                    columnSettings: {
                        fillOpacity: 1,
                        fill: am5.color(KTUtil.getCssVariableValue('--kt-danger')),
                    },
                },
                {
                    category: "Distribution",
                    value: 92,
                    full: 100,
                    columnSettings: {
                        fillOpacity: 1,
                        fill: am5.color(KTUtil.getCssVariableValue('--kt-primary')),
                    },
                },
                {
                    category: "Human Resources",
                    value: 68,
                    full: 100,
                    columnSettings: {
                        fillOpacity: 1,
                        fill: am5.color(KTUtil.getCssVariableValue('--kt-success')),
                    },
                },
            ];

            // Add cursor
            // https://www.amcharts.com/docs/v5/charts/radar-chart/#Cursor
            var cursor = chart.set(
                "cursor",
                am5radar.RadarCursor.new(root, {
                    behavior: "zoomX",
                })
            );

            cursor.lineY.set("visible", false);

            // Create axes and their renderers
            // https://www.amcharts.com/docs/v5/charts/radar-chart/#Adding_axes
            var xRenderer = am5radar.AxisRendererCircular.new(root, {
                //minGridDistance: 50
            });

            xRenderer.labels.template.setAll({
                radius: 10
            });

            xRenderer.grid.template.setAll({
                forceHidden: true,
            });

            var xAxis = chart.xAxes.push(
                am5xy.ValueAxis.new(root, {
                    renderer: xRenderer,
                    min: 0,
                    max: 100,
                    strictMinMax: true,
                    numberFormat: "#'%'",
                    tooltip: am5.Tooltip.new(root, {}),
                })
            );

            xAxis.get("renderer").labels.template.setAll({
                fill: am5.color(KTUtil.getCssVariableValue('--kt-gray-500')),
                fontWeight: "500",
                fontSize: 16,
            });

            var yRenderer = am5radar.AxisRendererRadial.new(root, {
                minGridDistance: 20,
            });

            yRenderer.labels.template.setAll({
                centerX: am5.p100,
                fontWeight: "500",
                fontSize: 18,
                fill: am5.color(KTUtil.getCssVariableValue('--kt-gray-500')),
                templateField: "columnSettings",
            });

            yRenderer.grid.template.setAll({
                forceHidden: true,
            });

            var yAxis = chart.yAxes.push(
                am5xy.CategoryAxis.new(root, {
                    categoryField: "category",
                    renderer: yRenderer,
                })
            );

            yAxis.data.setAll(data);

            // Create series
            // https://www.amcharts.com/docs/v5/charts/radar-chart/#Adding_series
            var series1 = chart.series.push(
                am5radar.RadarColumnSeries.new(root, {
                    xAxis: xAxis,
                    yAxis: yAxis,
                    clustered: false,
                    valueXField: "full",
                    categoryYField: "category",
                    fill: root.interfaceColors.get("alternativeBackground"),
                })
            );

            series1.columns.template.setAll({
                width: am5.p100,
                fillOpacity: 0.08,
                strokeOpacity: 0,
                cornerRadius: 20,
            });

            series1.data.setAll(data);

            var series2 = chart.series.push(
                am5radar.RadarColumnSeries.new(root, {
                    xAxis: xAxis,
                    yAxis: yAxis,
                    clustered: false,
                    valueXField: "value",
                    categoryYField: "category",
                })
            );

            series2.columns.template.setAll({
                width: am5.p100,
                strokeOpacity: 0,
                tooltipText: "{category}: {valueX}%",
                cornerRadius: 20,
                templateField: "columnSettings",
            });

            series2.data.setAll(data);

            // Animate chart and series in
            // https://www.amcharts.com/docs/v5/concepts/animations/#Initial_animation
            series1.appear(1000);
            series2.appear(1000);
            chart.appear(1000, 100);
        }

        am5.ready(function () {
            init();
        });

        // Update chart on theme mode change
		KTThemeMode.on("kt.thememode.change", function() {     
			// Destroy chart
			root.dispose();

			// Reinit chart
			init();
		});
    };

    var initChart2 = function () {
        // Check if amchart library is included
        if (typeof am5 === "undefined") {
            return;
        }

        var element = document.getElementById("kt_charts_widget_19_chart_2");

        var root;

        if (!element) {
            return;
        }

        var init = function() {
            // Create root element
            // https://www.amcharts.com/docs/v5/getting-started/#Root_element
            root = am5.Root.new(element);

            // Set themes
            // https://www.amcharts.com/docs/v5/concepts/themes/
            root.setThemes([am5themes_Animated.new(root)]);

            // Create chart
            // https://www.amcharts.com/docs/v5/charts/radar-chart/
            var chart = root.container.children.push(
                am5radar.RadarChart.new(root, {
                    panX: false,
                    panY: false,
                    wheelX: "panX",
                    wheelY: "zoomX",
                    innerRadius: am5.percent(20),
                    startAngle: -90,
                    endAngle: 180,
                })
            );

            // Data
            var data = [
                {
                    category: "Research",
                    value: 40,
                    full: 100,
                    columnSettings: {
                        fillOpacity: 1,
                        fill: am5.color(KTUtil.getCssVariableValue('--kt-info')),
                    },
                },
                {
                    category: "Marketing",
                    value: 50,
                    full: 100,
                    columnSettings: {
                        fillOpacity: 1,
                        fill: am5.color(KTUtil.getCssVariableValue('--kt-danger')),
                    },
                },
                {
                    category: "Distribution",
                    value: 80,
                    full: 100,
                    columnSettings: {
                        fillOpacity: 1,
                        fill: am5.color(KTUtil.getCssVariableValue('--kt-primary')),
                    },
                },
                {
                    category: "Human Resources",
                    value: 70,
                    full: 100,
                    columnSettings: {
                        fillOpacity: 1,
                        fill: am5.color(KTUtil.getCssVariableValue('--kt-success')),
                    },
                },
            ];

            // Add cursor
            // https://www.amcharts.com/docs/v5/charts/radar-chart/#Cursor
            var cursor = chart.set(
                "cursor",
                am5radar.RadarCursor.new(root, {
                    behavior: "zoomX",
                })
            );

            cursor.lineY.set("visible", false);

            // Create axes and their renderers
            // https://www.amcharts.com/docs/v5/charts/radar-chart/#Adding_axes
            var xRenderer = am5radar.AxisRendererCircular.new(root, {
                //minGridDistance: 50
            });

            xRenderer.labels.template.setAll({
                radius: 10
            });

            xRenderer.grid.template.setAll({
                forceHidden: true,
            });

            var xAxis = chart.xAxes.push(
                am5xy.ValueAxis.new(root, {
                    renderer: xRenderer,
                    min: 0,
                    max: 100,
                    strictMinMax: true,
                    numberFormat: "#'%'",
                    tooltip: am5.Tooltip.new(root, {}),
                })
            );

            var yRenderer = am5radar.AxisRendererRadial.new(root, {
                minGridDistance: 20,
            });

            yRenderer.labels.template.setAll({
                centerX: am5.p100,
                fontWeight: "500",
                fontSize: 18,
                fill: am5.color(KTUtil.getCssVariableValue('--kt-gray-500')),
                templateField: "columnSettings",
            });

            yRenderer.grid.template.setAll({
                forceHidden: true,
            });

            var yAxis = chart.yAxes.push(
                am5xy.CategoryAxis.new(root, {
                    categoryField: "category",
                    renderer: yRenderer,
                })
            );

            yAxis.data.setAll(data);

            // Create series
            // https://www.amcharts.com/docs/v5/charts/radar-chart/#Adding_series
            var series1 = chart.series.push(
                am5radar.RadarColumnSeries.new(root, {
                    xAxis: xAxis,
                    yAxis: yAxis,
                    clustered: false,
                    valueXField: "full",
                    categoryYField: "category",
                    fill: root.interfaceColors.get("alternativeBackground"),
                })
            );

            series1.columns.template.setAll({
                width: am5.p100,
                fillOpacity: 0.08,
                strokeOpacity: 0,
                cornerRadius: 20,
            });

            series1.data.setAll(data);

            var series2 = chart.series.push(
                am5radar.RadarColumnSeries.new(root, {
                    xAxis: xAxis,
                    yAxis: yAxis,
                    clustered: false,
                    valueXField: "value",
                    categoryYField: "category",
                })
            );

            series2.columns.template.setAll({
                width: am5.p100,
                strokeOpacity: 0,
                tooltipText: "{category}: {valueX}%",
                cornerRadius: 20,
                templateField: "columnSettings",
            });

            series2.data.setAll(data);

            // Animate chart and series in
            // https://www.amcharts.com/docs/v5/concepts/animations/#Initial_animation
            series1.appear(1000);
            series2.appear(1000);
            chart.appear(1000, 100);
        }

        am5.ready(function () {
            init();
        });

        // Update chart on theme mode change
		KTThemeMode.on("kt.thememode.change", function() {     
			// Destroy chart
			root.dispose();

			// Reinit chart
			init();
		});
    };

    // Public methods
    return {
        init: function () {
            initChart1();
            initChart2();
        },
    };
})();

// Webpack support
if (typeof module !== "undefined") {
    module.exports = KTChartsWidget19;
}

// On document ready
KTUtil.onDOMContentLoaded(function () {
    KTChartsWidget19.init();
});

"use strict";

// Class definition
var KTChartsWidget2 = function () {
    var chart = {
        self: null,
        rendered: false
    };

    // Private methods
    var initChart = function() {
        var element = document.getElementById("kt_charts_widget_2");

        if (!element) {
            return;
        }

        var color = element.getAttribute('data-kt-chart-color');
        var height = parseInt(KTUtil.css(element, 'height'));
        var labelColor = KTUtil.getCssVariableValue('--kt-gray-800');
        var strokeColor = KTUtil.getCssVariableValue('--kt-border-dashed-color');
        var baseColor = KTUtil.getCssVariableValue('--kt-' + color);
        var lightColor = KTUtil.getCssVariableValue('--kt-' + color + '-light');

        var options = {
            series: [{
                name: 'Overview',
                data: [15, 15, 45, 45, 25, 25, 55, 55, 20, 20, 37]
            }],
            chart: {
                fontFamily: 'inherit',
                type: 'area',
                height: height,
                toolbar: {
                    show: false
                },
                zoom: {
                    enabled: false
                },
                sparkline: {
                    enabled: true
                }
            },
            plotOptions: {},
            legend: {
                show: false
            },
            dataLabels: {
                enabled: false
            },
            fill: {
                type: 'solid',
                opacity: 1
            },
            stroke: {
                curve: 'smooth',
                show: true,
                width: 3,
                colors: [baseColor]
            },
            xaxis: {
                categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false
                },
                labels: {
                    show: false,
                    style: {
                        colors: labelColor,
                        fontSize: '12px'
                    }
                },
                crosshairs: {
                    show: false,
                    position: 'front',
                    stroke: {
                        color: strokeColor,
                        width: 1,
                        dashArray: 3
                    }
                },
                tooltip: {
                    enabled: true,
                    formatter: undefined,
                    offsetY: 0,
                    style: {
                        fontSize: '12px'
                    }
                }
            },
            yaxis: {
                min: 0,
                max: 60,
                labels: {
                    show: false,
                    style: {
                        colors: labelColor,
                        fontSize: '12px'
                    }
                }
            },
            states: {
                normal: {
                    filter: {
                        type: 'none',
                        value: 0
                    }
                },
                hover: {
                    filter: {
                        type: 'none',
                        value: 0
                    }
                },
                active: {
                    allowMultipleDataPointsSelection: false,
                    filter: {
                        type: 'none',
                        value: 0
                    }
                }
            },
            tooltip: {
                style: {
                    fontSize: '12px'
                },
                y: {
                    formatter: function (val) {
                        return val
                    }
                }
            },
            colors: [lightColor],
            markers: {
                colors: lightColor,
                strokeColor: baseColor,
                strokeWidth: 3
            }
        }; 

        chart.self = new ApexCharts(element, options);

        // Set timeout to properly get the parent elements width
        setTimeout(function() {
            chart.self.render();
            chart.rendered = true;
        }, 200); 
    }

    // Public methods
    return {
        init: function () {
            initChart();

            // Update chart on theme mode change
            KTThemeMode.on("kt.thememode.change", function() {                
                if (chart.rendered) {
                    chart.self.destroy();
                }

                initChart();
            });
        }   
    }
}();

// Webpack support
if (typeof module !== 'undefined') {
    module.exports = KTChartsWidget2;
}

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTChartsWidget2.init();
});

"use strict";

// Class definition
var KTChartsWidget20 = function () {
    var chart = {
        self: null,
        rendered: false
    };
    
    // Private methods
    var initChart = function(chart) {
        var element = document.getElementById("kt_charts_widget_20");

        if (!element) {
            return;
        }
        
        var height = parseInt(KTUtil.css(element, 'height'));
        var labelColor = KTUtil.getCssVariableValue('--kt-gray-500');
        var borderColor = KTUtil.getCssVariableValue('--kt-border-dashed-color');
        var baseColor = KTUtil.getCssVariableValue('--kt-danger');
        var lightColor = KTUtil.getCssVariableValue('--kt-danger');
        var chartInfo = element.getAttribute('data-kt-chart-info');

        var options = {
            series: [{
                name: chartInfo,
                data: [34.5,34.5,35,35,35.5,35.5,35,35,35.5,35.5,35,35,34.5,34.5,35,35,35.4,35.4,35]
            }],
            chart: {
                fontFamily: 'inherit',
                type: 'area',
                height: height,
                toolbar: {
                    show: false
                }
            },
            plotOptions: {

            },
            legend: {
                show: false
            },
            dataLabels: {
                enabled: false
            },
            fill: {
                type: "gradient",
                gradient: {
                    shadeIntensity: 1,
                    opacityFrom: 0.4,
                    opacityTo: 0,
                    stops: [0, 80, 100]
                }
            },
            stroke: {
                curve: 'smooth',
                show: true,
                width: 3,
                colors: [baseColor]
            },
            xaxis: {
                categories: ['', 'Apr 02', 'Apr 03', 'Apr 04', 'Apr 05', 'Apr 06', 'Apr 07', 'Apr 08', 'Apr 09', 'Apr 10', 'Apr 11', 'Apr 12', 'Apr 13', 'Apr 14', 'Apr 17', 'Apr 18', 'Apr 19', 'Apr 21', ''],
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false
                },
                tickAmount: 6,
                labels: {
                    rotate: 0,
                    rotateAlways: true,
                    style: {
                        colors: labelColor,
                        fontSize: '12px'
                    }
                },
                crosshairs: {
                    position: 'front',
                    stroke: {
                        color: baseColor,
                        width: 1,
                        dashArray: 3
                    }
                },
                tooltip: {
                    enabled: true,
                    formatter: undefined,
                    offsetY: 0,
                    style: {
                        fontSize: '12px'
                    }
                }
            },
            yaxis: {
                max: 36.3,
                min: 33,
                tickAmount: 6,
                labels: {
                    style: {
                        colors: labelColor,
                        fontSize: '12px'
                    },
                    formatter: function (val) {
                        return '$' + parseInt(10 * val)
                    }
                }
            },
            states: {
                normal: {
                    filter: {
                        type: 'none',
                        value: 0
                    }
                },
                hover: {
                    filter: {
                        type: 'none',
                        value: 0
                    }
                },
                active: {
                    allowMultipleDataPointsSelection: false,
                    filter: {
                        type: 'none',
                        value: 0
                    }
                }
            },
            tooltip: {
                style: {
                    fontSize: '12px'
                },
                y: {
                    formatter: function (val) {
                        return '$' + parseInt(10 * val)
                    }
                }
            },
            colors: [lightColor],
            grid: {
                borderColor: borderColor,
                strokeDashArray: 4,
                yaxis: {
                    lines: {
                        show: true
                    }
                }
            },
            markers: {
                strokeColor: baseColor,
                strokeWidth: 3
            }
        };

        chart.self = new ApexCharts(element, options);

        // Set timeout to properly get the parent elements width
        setTimeout(function() {
            chart.self.render();
            chart.rendered = true;
        }, 200);           
    }

    // Public methods
    return {
        init: function () {
            initChart(chart);

            // Update chart on theme mode change
            KTThemeMode.on("kt.thememode.change", function() {                
                if (chart.rendered) {
                    chart.self.destroy();
                }

                initChart(chart);
            });
        }   
    }
}();

// Webpack support
if (typeof module !== 'undefined') {
    module.exports = KTChartsWidget20;
}

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTChartsWidget20.init();
});

"use strict";

// Class definition
var KTChartsWidget21 = (function () {
    // Private methods
    var initChart = function() {
        var element = document.getElementById("kt_charts_widget_21");

        if (!element) {
            return;
        }

        var options = {
            "type": "serial",
            "theme": "light",
            "legend": {
                "equalWidths": false,
                "useGraphSettings": true,
                "valueAlign": "left",
                "valueWidth": 120
            },
            "dataProvider": [{
                "date": "2012-01-01",
                "distance": 227,
                "townName": "New York",
                "townName2": "New York",
                "townSize": 25,
                "latitude": 40.71,
                "duration": 408
            }, {
                "date": "2012-01-02",
                "distance": 371,
                "townName": "Washington",
                "townSize": 14,
                "latitude": 38.89,
                "duration": 482
            }, {
                "date": "2012-01-03",
                "distance": 433,
                "townName": "Wilmington",
                "townSize": 6,
                "latitude": 34.22,
                "duration": 562
            }, {
                "date": "2012-01-04",
                "distance": 345,
                "townName": "Jacksonville",
                "townSize": 7,
                "latitude": 30.35,
                "duration": 379
            }, {
                "date": "2012-01-05",
                "distance": 480,
                "townName": "Miami",
                "townName2": "Miami",
                "townSize": 10,
                "latitude": 25.83,
                "duration": 501
            }, {
                "date": "2012-01-06",
                "distance": 386,
                "townName": "Tallahassee",
                "townSize": 7,
                "latitude": 30.46,
                "duration": 443
            }, {
                "date": "2012-01-07",
                "distance": 348,
                "townName": "New Orleans",
                "townSize": 10,
                "latitude": 29.94,
                "duration": 405
            }, {
                "date": "2012-01-08",
                "distance": 238,
                "townName": "Houston",
                "townName2": "Houston",
                "townSize": 16,
                "latitude": 29.76,
                "duration": 309
            }, {
                "date": "2012-01-09",
                "distance": 218,
                "townName": "Dalas",
                "townSize": 17,
                "latitude": 32.8,
                "duration": 287
            }, {
                "date": "2012-01-10",
                "distance": 349,
                "townName": "Oklahoma City",
                "townSize": 11,
                "latitude": 35.49,
                "duration": 485
            }, {
                "date": "2012-01-11",
                "distance": 603,
                "townName": "Kansas City",
                "townSize": 10,
                "latitude": 39.1,
                "duration": 890
            }, {
                "date": "2012-01-12",
                "distance": 534,
                "townName": "Denver",
                "townName2": "Denver",
                "townSize": 18,
                "latitude": 39.74,
                "duration": 810
            }, {
                "date": "2012-01-13",
                "townName": "Salt Lake City",
                "townSize": 12,
                "distance": 425,
                "duration": 670,
                "latitude": 40.75,
                "dashLength": 8,
                "alpha": 0.4
            }, {
                "date": "2012-01-14",
                "latitude": 36.1,
                "duration": 470,
                "townName": "Las Vegas",
                "townName2": "Las Vegas"
            }, {
                "date": "2012-01-15"
            }, {
                "date": "2012-01-16"
            }, {
                "date": "2012-01-17"
            }, {
                "date": "2012-01-18"
            }, {
                "date": "2012-01-19"
            }],
            "valueAxes": [{
                "id": "distanceAxis",
                "axisAlpha": 0,
                "gridAlpha": 0,
                "position": "left",
                "title": "distance"
            }, {
                "id": "latitudeAxis",
                "axisAlpha": 0,
                "gridAlpha": 0,
                "labelsEnabled": false,
                "position": "right"
            }, {
                "id": "durationAxis",
                "duration": "mm",
                "durationUnits": {
                    "hh": "h ",
                    "mm": "min"
                },
                "axisAlpha": 0,
                "gridAlpha": 0,
                "inside": true,
                "position": "right",
                "title": "duration"
            }],
            "graphs": [{
                "alphaField": "alpha",
                "balloonText": "[[value]] miles",
                "dashLengthField": "dashLength",
                "fillAlphas": 0.7,
                "legendPeriodValueText": "total: [[value.sum]] mi",
                "legendValueText": "[[value]] mi",
                "title": "distance",
                "type": "column",
                "valueField": "distance",
                "valueAxis": "distanceAxis"
            }, {
                "balloonText": "latitude:[[value]]",
                "bullet": "round",
                "bulletBorderAlpha": 1,
                "useLineColorForBulletBorder": true,
                "bulletColor": "#FFFFFF",
                "bulletSizeField": "townSize",
                "dashLengthField": "dashLength",
                "descriptionField": "townName",
                "labelPosition": "right",
                "labelText": "[[townName2]]",
                "legendValueText": "[[value]]/[[description]]",
                "title": "latitude/city",
                "fillAlphas": 0,
                "valueField": "latitude",
                "valueAxis": "latitudeAxis"
            }, {
                "bullet": "square",
                "bulletBorderAlpha": 1,
                "bulletBorderThickness": 1,
                "dashLengthField": "dashLength",
                "legendValueText": "[[value]]",
                "title": "duration",
                "fillAlphas": 0,
                "valueField": "duration",
                "valueAxis": "durationAxis"
            }],
            "chartCursor": {
                "categoryBalloonDateFormat": "DD",
                "cursorAlpha": 0.1,
                "cursorColor": "#000000",
                "fullWidth": true,
                "valueBalloonsEnabled": false,
                "zoomable": false
            },
            "dataDateFormat": "YYYY-MM-DD",
            "categoryField": "date",
            "categoryAxis": {
                "dateFormats": [{
                    "period": "DD",
                    "format": "DD"
                }, {
                    "period": "WW",
                    "format": "MMM DD"
                }, {
                    "period": "MM",
                    "format": "MMM"
                }, {
                    "period": "YYYY",
                    "format": "YYYY"
                }],
                "parseDates": true,
                "autoGridCount": false,
                "axisColor": "#555555",
                "gridAlpha": 0.1,
                "gridColor": "#FFFFFF",
                "gridCount": 50
            },
            "export": {
                "enabled": true
            }
        };

        var chart = new ApexCharts(element, options);

        // Set timeout to properly get the parent elements width
        setTimeout(function() {
            chart.render();
        }, 200);  
    }

    // Public methods
    return {
        init: function () {
            initChart();
        },
    };
})();

// Webpack support
if (typeof module !== "undefined") {
    module.exports = KTChartsWidget21;
}

// On document ready
KTUtil.onDOMContentLoaded(function () {
    KTChartsWidget21.init();
});

"use strict";

// Class definition
var KTChartsWidget22 = function () {
    // Private methods
    var initChart = function(tabSelector, chartSelector, data, initByDefault) {
        var element = document.querySelector(chartSelector);        

        if (!element) {
            return;
        }  
          
        var height = parseInt(KTUtil.css(element, 'height'));
        
        var options = {
            series: data,                 
            chart: {           
                fontFamily: 'inherit', 
                type: 'donut',
                width: 250,
            },
            plotOptions: {
                pie: {
                    donut: {
                        size: '50%',
                        labels: {
                            value: {
                                fontSize: '10px'
                            }
                        }                        
                    }
                }
            },
            colors: [
                KTUtil.getCssVariableValue('--kt-info'), 
                KTUtil.getCssVariableValue('--kt-success'), 
                KTUtil.getCssVariableValue('--kt-primary'), 
                KTUtil.getCssVariableValue('--kt-danger') 
            ],           
            stroke: {
              width: 0
            },
            labels: ['Sales', 'Sales', 'Sales', 'Sales'],
            legend: {
                show: false,
            },
            fill: {
                type: 'false',          
            }     
        };                     

        var chart = new ApexCharts(element, options);

        var init = false;

        var tab = document.querySelector(tabSelector);
        
        if (initByDefault === true) {
            chart.render();
            init = true;
        }        

        tab.addEventListener('shown.bs.tab', function (event) {
            if (init == false) {
                chart.render();
                init = true;
            }
        })
    }

    // Public methods
    return {
        init: function () {           
            initChart('#kt_chart_widgets_22_tab_1', '#kt_chart_widgets_22_chart_1', [20, 100, 15, 25], true);
            initChart('#kt_chart_widgets_22_tab_2', '#kt_chart_widgets_22_chart_2', [70, 13, 11, 2], false);              
        }   
    }
}();

// Webpack support
if (typeof module !== 'undefined') {
    module.exports = KTChartsWidget22;
}

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTChartsWidget22.init();
});
// Class definition
var KTChartsWidget23 = (function () {
	// Private methods
	var initChart = function () {
		// Check if amchart library is included
		if (typeof am5 === "undefined") {
			return;
		}

		var element = document.getElementById("kt_charts_widget_23");

		if (!element) {
			return;
		}

		var root;

		var init = function() {
			// Create root element
			// https://www.amcharts.com/docs/v5/getting-started/#Root_element
			root = am5.Root.new(element);

			// Set themes
			// https://www.amcharts.com/docs/v5/concepts/themes/
			root.setThemes([am5themes_Animated.new(root)]);

			// Create chart
			// https://www.amcharts.com/docs/v5/charts/xy-chart/
			var chart = root.container.children.push(
				am5xy.XYChart.new(root, {
					panX: false,
					panY: false,
					layout: root.verticalLayout,
				})
			);

			var data = [
				{
					year: "2016",
					income: 23.5,
					expenses: 21.1,
					columnSettings: {
						fill: am5.color(KTUtil.getCssVariableValue("--kt-primary")),
					},
				},
				{
					year: "2017",
					income: 26.2,
					expenses: 30.5,
					columnSettings: {
						fill: am5.color(KTUtil.getCssVariableValue("--kt-primary")),
					},
				},
				{
					year: "2018",
					income: 30.1,
					expenses: 34.9,
					columnSettings: {
						fill: am5.color(KTUtil.getCssVariableValue("--kt-primary")),
					},
				},
				{
					year: "2019",
					income: 29.5,
					expenses: 31.1,
					columnSettings: {
						fill: am5.color(KTUtil.getCssVariableValue("--kt-primary")),
					},
				},
				{
					year: "2020",
					income: 30.6,
					expenses: 28.2,
					strokeSettings: {
						strokeWidth: 3,
						strokeDasharray: [5, 5],
					},
					columnSettings: {
						fill: am5.color(KTUtil.getCssVariableValue("--kt-primary")),
					},
				},
				{
					year: "2021",
					income: 40.6,
					expenses: 28.2,
					strokeSettings: {
						strokeWidth: 3,
						strokeDasharray: [5, 5],
					},
					columnSettings: {
						fill: am5.color(KTUtil.getCssVariableValue("--kt-primary")),
					},
				},
				{
					year: "2022",
					income: 34.1,
					expenses: 32.9,
					strokeSettings: {
						strokeWidth: 3,
						strokeDasharray: [5, 5],
					},
					columnSettings: {
						fill: am5.color(KTUtil.getCssVariableValue("--kt-primary")),
					},
				},
			];

			// Create axes
			// https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
			var xAxis = chart.xAxes.push(
				am5xy.CategoryAxis.new(root, {
					categoryField: "year",
					renderer: am5xy.AxisRendererX.new(root, {}),
					//tooltip: am5.Tooltip.new(root, {}),
				})
			);

			xAxis.data.setAll(data);

			xAxis.get("renderer").labels.template.setAll({
				paddingTop: 20,
				fontWeight: "400",
				fontSize: 11,
				fill: am5.color(KTUtil.getCssVariableValue("--kt-gray-500")),
			});

			xAxis.get("renderer").grid.template.setAll({
				disabled: true,
				strokeOpacity: 0,
			});

			var yAxis = chart.yAxes.push(
				am5xy.ValueAxis.new(root, {
					min: 0,
					extraMax: 0.1,
					renderer: am5xy.AxisRendererY.new(root, {}),
				})
			);

			yAxis.get("renderer").labels.template.setAll({
				paddingTop: 0,
				fontWeight: "400",
				fontSize: 11,
				fill: am5.color(KTUtil.getCssVariableValue("--kt-gray-500")),
			});

			yAxis.get("renderer").grid.template.setAll({
				stroke: am5.color(KTUtil.getCssVariableValue("--kt-gray-300")),
				strokeWidth: 1,
				strokeOpacity: 1,
				strokeDasharray: [3],
			});

			// Add series
			// https://www.amcharts.com/docs/v5/charts/xy-chart/series/
			var series1 = chart.series.push(
				am5xy.ColumnSeries.new(root, {
					name: "Income",
					xAxis: xAxis,
					yAxis: yAxis,
					valueYField: "income",
					categoryXField: "year",
					tooltip: am5.Tooltip.new(root, {
						pointerOrientation: "horizontal",
						labelText: "{name} in {categoryX}: {valueY} {info}",
					}),
				})
			);

			series1.columns.template.setAll({
				tooltipY: am5.percent(10),
				templateField: "columnSettings",
			});

			series1.data.setAll(data);

			var series2 = chart.series.push(
				am5xy.LineSeries.new(root, {
					name: "Expenses",
					xAxis: xAxis,
					yAxis: yAxis,
					valueYField: "expenses",
					categoryXField: "year",
					fill: am5.color(KTUtil.getCssVariableValue("--kt-success")),
					stroke: am5.color(KTUtil.getCssVariableValue("--kt-success")),
					tooltip: am5.Tooltip.new(root, {
						pointerOrientation: "horizontal",
						labelText: "{name} in {categoryX}: {valueY} {info}",
					}),
				})
			);

			series2.strokes.template.setAll({
				stroke: am5.color(KTUtil.getCssVariableValue("--kt-success")),
			});

			series2.strokes.template.setAll({
				strokeWidth: 3,
				templateField: "strokeSettings",
			});

			series2.data.setAll(data);

			series2.bullets.push(function () {
				return am5.Bullet.new(root, {
					sprite: am5.Circle.new(root, {
						strokeWidth: 3,
						stroke: am5.color(KTUtil.getCssVariableValue("--kt-success")),
						radius: 5,
						fill: am5.color(KTUtil.getCssVariableValue("--kt-success-light")),
					}),
				});
			});

			series1.columns.template.setAll({
				strokeOpacity: 0,
				cornerRadiusBR: 0,
				cornerRadiusTR: 6,
				cornerRadiusBL: 0,
				cornerRadiusTL: 6,
			});

			chart.set("cursor", am5xy.XYCursor.new(root, {}));

			chart.get("cursor").lineX.setAll({ visible: false });
			chart.get("cursor").lineY.setAll({ visible: false });

			// Add legend
			// https://www.amcharts.com/docs/v5/charts/xy-chart/legend-xy-series/
			var legend = chart.children.push(
				am5.Legend.new(root, {
					centerX: am5.p50,
					x: am5.p50,
				})
			);
			legend.data.setAll(chart.series.values);

			legend.labels.template.setAll({
				fontWeight: "600",
				fontSize: 14,
				fill: am5.color(KTUtil.getCssVariableValue("--kt-gray-700")),
			});

			// Make stuff animate on load
			// https://www.amcharts.com/docs/v5/concepts/animations/
			chart.appear(1000, 100);
			series1.appear();
		}

		am5.ready(function () {
			init();
		}); // end am5.ready()

		// Update chart on theme mode change
		KTThemeMode.on("kt.thememode.change", function() {     
			// Destroy chart
			root.dispose();

			// Reinit chart
			init();
		});
	};

	// Public methods
	return {
		init: function () {
			initChart();
		},
	};
})();

// Webpack support
if (typeof module !== "undefined") {
	module.exports = KTChartsWidget23;
}

// On document ready
KTUtil.onDOMContentLoaded(function () {
	KTChartsWidget23.init();
});

// Class definition
var KTChartsWidget24 = (function () {
	// Private methods
	var initChart = function () {
		// Check if amchart library is included
		if (typeof am5 === 'undefined') {
			return;
		}

		var element = document.getElementById("kt_charts_widget_24");

		if (!element) {
			return;
		}

		var root;

		var init = function() {
		    var usData = [];
			var stateData = [];
			
			function aggregateData(list) {
				var maleTotal = 0;
				var femaleTotal = 0;

				for(var i = 0; i < list.length; i++) {
					var row = list[i];
					maleTotal += row.male;
					femaleTotal += row.female;
				}

				for(var i = 0; i < list.length; i++) {
					var row = list[i];
					row.malePercent = -1 * Math.round((row.male / maleTotal) * 10000) / 100;
					row.femalePercent = Math.round((row.female / femaleTotal) * 10000) / 100;
				}

				return list;
			}
			
			// usData = aggregateData(usData);
			
			// ===========================================================
			// Root and wrapper container
			// ===========================================================
			
			// Create root and chart
			root = am5.Root.new(element);
			
			// Set themes
			root.setThemes([
				am5themes_Animated.new(root)
			]);
			
			// Create wrapper container
			var container = root.container.children.push(am5.Container.new(root, {
				layout: root.horizontalLayout,
				width: am5.p100,
				height: am5.p100
			}))
			
			// Set up formats
			root.numberFormatter.setAll({
				numberFormat: "#.##as"
			});			
			
			// ===========================================================
			// XY chart
			// ===========================================================
			
			// Create chart
			var chart = container.children.push(am5xy.XYChart.new(root, {
				panX: false,
				panY: false,
				wheelX: "none",
				wheelY: "none",
				layout: root.verticalLayout,
				width: am5.percent(60)
			}));
			
			// Create axes
			var yAxis1 = chart.yAxes.push(am5xy.CategoryAxis.new(root, {
				categoryField: "age",
				renderer: am5xy.AxisRendererY.new(root, {})
			}));

			yAxis1.get("renderer").labels.template.setAll({
				paddingTop: 0,
				fontWeight: "400",
				fontSize: 11,
				fill: am5.color(KTUtil.getCssVariableValue("--kt-gray-500")),
			});

			yAxis1.get("renderer").grid.template.setAll({
				stroke: am5.color(KTUtil.getCssVariableValue("--kt-gray-300")),
				strokeWidth: 1,
				strokeOpacity: 1,
				strokeDasharray: [3],
			});

			// yAxis1.data.setAll(usData);
			
			var yAxis2 = chart.yAxes.push(am5xy.CategoryAxis.new(root, {
				categoryField: "age",
				renderer: am5xy.AxisRendererY.new(root, {
					opposite: true
				})
			}));

			yAxis2.get("renderer").grid.template.setAll({
				stroke: am5.color(KTUtil.getCssVariableValue("--kt-gray-300")),
				strokeWidth: 1,
				strokeOpacity: 1,
				strokeDasharray: [3],
			});

			yAxis2.get("renderer").labels.template.setAll({
				paddingTop: 0,
				fontWeight: "400",
				fontSize: 11,
				fill: am5.color(KTUtil.getCssVariableValue("--kt-gray-500")),
			});

			// yAxis2.data.setAll(usData);
			
			var xAxis = chart.xAxes.push(am5xy.ValueAxis.new(root, {
				// min: -10,
				// max: 10,
				// numberFormat: "#.s'%'",
				renderer: am5xy.AxisRendererX.new(root, {
					minGridDistance: 40
				})
			}));

			xAxis.get("renderer").labels.template.setAll({
				paddingTop: 20,
				fontWeight: "400",
				fontSize: 11,
				fill: am5.color(KTUtil.getCssVariableValue("--kt-gray-500")),
			});

			xAxis.get("renderer").grid.template.setAll({
				disabled: true,
				strokeOpacity: 0,
			});
			
			// Create series
			var maleSeries = chart.series.push(am5xy.ColumnSeries.new(root, {
				name: "Males",
				xAxis: xAxis,
				yAxis: yAxis1,
				valueXField: "malePercent",
				categoryYField: "age",
				fill: am5.color(KTUtil.getCssVariableValue("--kt-success")),
				clustered: false,
			}));
			
			maleSeries.columns.template.setAll({
				tooltipText: "Males, age {categoryY}: {male} ({malePercent.formatNumber('#.0s')}%)",
				// tooltipX: am5.p100,
				cornerRadiusBR: 4,
				cornerRadiusTR: 4,
				cornerRadiusBL: 0,
				cornerRadiusTL: 0,
			});
			
			// maleSeries.data.setAll(usData);
			
			var femaleSeries = chart.series.push(am5xy.ColumnSeries.new(root, {
				name: "Males",
				xAxis: xAxis,
				yAxis: yAxis1,
				valueXField: "femalePercent",
				categoryYField: "age",
				fill: am5.color(KTUtil.getCssVariableValue("--kt-primary")),
				clustered: false,
			}));
			
			femaleSeries.columns.template.setAll({
				tooltipText: "Males, age {categoryY}: {female} ({femalePercent.formatNumber('#.0s')}%)",
				tooltipX: am5.p100,
				cornerRadiusBR: 4,
				cornerRadiusTR: 4,
				cornerRadiusBL: 0,
				cornerRadiusTL: 0,
			});
			
			femaleSeries.data.setAll(usData);
			
			// Add labels
			// var maleLabel = chart.plotContainer.children.push(am5.Label.new(root, {
			// 	text: "Males",
			// 	fontSize: 13,
			// 	fontWeight: '500',
			// 	y: 5,
			// 	x: 5,
			// 	//centerX: am5.p50,
			// 	fill: maleSeries.get("fill")
			// }));
			
			// var femaleLabel = chart.plotContainer.children.push(am5.Label.new(root, {
			// 	text: "Females",
			// 	fontSize: 13,
			// 	fontWeight: '500',
			// 	y: 5,
			// 	x: am5.p100,
			// 	centerX: am5.p100,
			// 	dx: -5,
			// 	fill: femaleSeries.get("fill")
			// }));
			//
			// ===========================================================
			// Map chart
			// ===========================================================
			
			// Create chart
			var map = container.children.push(
				am5map.MapChart.new(root, {
					panX: "none",
					panY: "none",
					wheelY: "none",
					projection: am5map.geoAlbersUsa(),
					width: am5.percent(40)
				})
			);
			
			chart.getTooltip().set("autoTextColor", false);
			
			// Title
			var title = map.children.push(am5.Label.new(root, {
				text: "All project",
				fontSize: 14,
				fontWeight: '500',
				fill: am5.color(KTUtil.getCssVariableValue('--kt-gray-800')),
				y: 20,
				x: am5.p50,
				centerX: am5.p50
			}));
			
			// Create polygon series
			var polygonSeries = map.series.push(
				am5map.MapPolygonSeries.new(root, {
					fill: am5.color(KTUtil.getCssVariableValue('--kt-gray-300')),
					geoJSON: am5geodata_usaLow
				})
			);
			
			polygonSeries.mapPolygons.template.setAll({
				tooltipText: "{name}",
				interactive: true
			});

			polygonSeries.mapPolygons.template.states.create("hover", {
				fill: am5.color(KTUtil.getCssVariableValue('--kt-success')),
			});

			polygonSeries.mapPolygons.template.states.create("active", {
					fill: am5.color(KTUtil.getCssVariableValue('--kt-success')),
			});
			
			var activePolygon;
			polygonSeries.mapPolygons.template.events.on("click", function(ev) {
				if (activePolygon) {
					activePolygon.set("active", false);
				}
				activePolygon = ev.target;
				activePolygon.set("active", true);
				var state  = ev.target.dataItem.dataContext.id.split("-").pop();
				var data = aggregateData(stateData[state]);
				
				for(var i = 0; i < data.length; i++){
					maleSeries.data.setIndex(i, data[i]);
					femaleSeries.data.setIndex(i, data[i]);
				}            
			
				title.set("text", ev.target.dataItem.dataContext.name);
			}); 
		}

		// On amchart ready
		am5.ready(function() {      
			// Init chart      
			init();
		});

		// Update chart on theme mode change
		KTThemeMode.on("kt.thememode.change", function() {     
			// Destroy chart
			root.dispose();

			// Reinit chart
			init();
		});
	};

	// Public methods
	return {
		init: function () {
			initChart();
		},
	};
})();

// Webpack support
if (typeof module !== "undefined") {
		module.exports = KTChartsWidget24;
}

// On document ready
KTUtil.onDOMContentLoaded(function () {
		KTChartsWidget24.init();
});

 
"use strict";

// Class definition
var KTChartsWidget25 = (function () {
	// Private methods
	var initChart1 = function () {
		// Check if amchart library is included
		if (typeof am5 === "undefined") {
			return;
		}

		var element = document.getElementById("kt_charts_widget_25_chart_1");

		if ( !element ) {
			return;
		}

		var root;

		var init = function() {
			// Create root element
			// https://www.amcharts.com/docs/v5/getting-started/#Root_element
			root = am5.Root.new(element);

			// Set themes
			// https://www.amcharts.com/docs/v5/concepts/themes/
			root.setThemes([am5themes_Animated.new(root)]);

			// Create chart
			// https://www.amcharts.com/docs/v5/charts/radar-chart/
			var chart = root.container.children.push(
				am5radar.RadarChart.new(root, {
					panX: false,
					panY: false,
					wheelX: "panX",
					wheelY: "zoomX",
					innerRadius: am5.percent(40),
					radius: am5.percent(70),
					arrangeTooltips: false,
				})
			);

			var cursor = chart.set(
				"cursor",
				am5radar.RadarCursor.new(root, {
					behavior: "zoomX",
				})
			);

			cursor.lineY.set("visible", false);

			// Create axes and their renderers
			// https://www.amcharts.com/docs/v5/charts/radar-chart/#Adding_axes
			var xRenderer = am5radar.AxisRendererCircular.new(root, {
				minGridDistance: 30,
			});

			xRenderer.labels.template.setAll({
				textType: "radial",
				radius: 10,
				paddingTop: 0,
				paddingBottom: 0,
				centerY: am5.p50,
				fontWeight: "400",
				fontSize: 11,
				fill: am5.color(KTUtil.getCssVariableValue("--kt-gray-700")),
			});

			xRenderer.grid.template.setAll({
				location: 0.5,
				strokeDasharray: [2, 2],
				stroke: KTUtil.getCssVariableValue('--kt-gray-400')
			});

			var xAxis = chart.xAxes.push(
				am5xy.CategoryAxis.new(root, {
					maxDeviation: 0,
					categoryField: "name",
					renderer: xRenderer,
				})
			);

			var yRenderer = am5radar.AxisRendererRadial.new(root, {
				minGridDistance: 30,
			});

			yRenderer.labels.template.setAll({
				fontWeight: "500",
				fontSize: 12,
				fill: am5.color(KTUtil.getCssVariableValue("--kt-gray-700")),
			});

			var yAxis = chart.yAxes.push(
				am5xy.ValueAxis.new(root, {
					renderer: yRenderer,
				})
			);

			yRenderer.grid.template.setAll({
				strokeDasharray: [2, 2],
				stroke: KTUtil.getCssVariableValue('--kt-gray-400')
			});

			// Create series
			// https://www.amcharts.com/docs/v5/charts/radar-chart/#Adding_series
			var series1 = chart.series.push(
				am5radar.RadarLineSeries.new(root, {
					name: "Revenue",
					xAxis: xAxis,
					yAxis: yAxis,
					valueYField: "value1",
					categoryXField: "name",
					fill: am5.color(KTUtil.getCssVariableValue("--kt-primary")),
				})
			);

			series1.strokes.template.setAll({
				strokeOpacity: 0,
			});

			series1.fills.template.setAll({
				visible: true,
				fill: am5.color(KTUtil.getCssVariableValue("--kt-primary")),
				fillOpacity: 0.5,
			});

			var series2 = chart.series.push(
				am5radar.RadarLineSeries.new(root, {
					name: "Expense",
					xAxis: xAxis,
					yAxis: yAxis,
					valueYField: "value2",
					categoryXField: "name",
					stacked: true,
					tooltip: am5.Tooltip.new(root, {
						labelText: "Revenue: {value1}\nExpense:{value2}",
					}),
					fill: am5.color(KTUtil.getCssVariableValue("--kt-success")),
				})
			);

			series2.strokes.template.setAll({
				strokeOpacity: 0,
			});

			series2.fills.template.setAll({
				visible: true,
				fill: am5.color(KTUtil.getCssVariableValue("--kt-primary")),
				fillOpacity: 0.5,
			});

			var legend = chart.radarContainer.children.push(
				am5.Legend.new(root, {
					width: 150,
					centerX: am5.p50,
					centerY: am5.p50,
				})
			);
			legend.data.setAll([series1, series2]);

			legend.labels.template.setAll({
				fontWeight: "600",
				fontSize: 13,
				fill: am5.color(KTUtil.getCssVariableValue("--kt-gray-700")),
			});

			// Set data
			// https://www.amcharts.com/docs/v5/charts/radar-chart/#Setting_data
			var data = [
				{
					name: "Openlane",
					value1: 160.2,
					value2: 26.9,
				},
				{
					name: "Yearin",
					value1: 120.1,
					value2: 50.5,
				},
				{
					name: "Goodsilron",
					value1: 150.7,
					value2: 12.3,
				},
				{
					name: "Condax",
					value1: 69.4,
					value2: 74.5,
				},
				{
					name: "Opentech",
					value1: 78.5,
					value2: 29.7,
				},
				{
					name: "Golddex",
					value1: 77.6,
					value2: 102.2,
				},
				{
					name: "Isdom",
					value1: 69.8,
					value2: 22.6,
				},
				{
					name: "Plusstrip",
					value1: 63.6,
					value2: 45.3,
				},
				{
					name: "Kinnamplus",
					value1: 59.7,
					value2: 12.8,
				},
				{
					name: "Zumgoity",
					value1: 64.3,
					value2: 19.6,
				},
				{
					name: "Stanredtax",
					value1: 52.9,
					value2: 96.3,
				},
				{
					name: "Conecom",
					value1: 42.9,
					value2: 11.9,
				},
				{
					name: "Zencorporation",
					value1: 40.9,
					value2: 16.8,
				},
				{
					name: "Iselectrics",
					value1: 39.2,
					value2: 9.9,
				},
				{
					name: "Treequote",
					value1: 76.6,
					value2: 36.9,
				},
				{
					name: "Sumace",
					value1: 34.8,
					value2: 14.6,
				},
				{
					name: "Lexiqvolax",
					value1: 32.1,
					value2: 35.6,
				},
				{
					name: "Sunnamplex",
					value1: 31.8,
					value2: 5.9,
				},
				{
					name: "Faxquote",
					value1: 29.3,
					value2: 14.7,
				},
				{
					name: "Donware",
					value1: 23.0,
					value2: 2.8,
				},
				{
					name: "Warephase",
					value1: 21.5,
					value2: 12.1,
				},
				{
					name: "Donquadtech",
					value1: 19.7,
					value2: 10.8,
				},
				{
					name: "Nam-zim",
					value1: 15.5,
					value2: 4.1,
				},
				{
					name: "Y-corporation",
					value1: 14.2,
					value2: 11.3,
				},
			];

			series1.data.setAll(data);
			series2.data.setAll(data);
			xAxis.data.setAll(data);

			// Animate chart and series in
			// https://www.amcharts.com/docs/v5/concepts/animations/#Initial_animation
			series1.appear(1000);
			series2.appear(1000);
			chart.appear(1000, 100);
		}

		// On amchart ready
		am5.ready(function () {
			init();
		}); 

		// Update chart on theme mode change
		KTThemeMode.on("kt.thememode.change", function() {     
			// Destroy chart
			root.dispose();

			// Reinit chart
			init();
		});
	};

	var initChart2 = function () {
		// Check if amchart library is included
		if (typeof am5 === "undefined") {
			return;
		}

		var element = document.getElementById("kt_charts_widget_25_chart_2");

		if (!element) {
			return;
		}

		var root;

		var init = function() {
			// Create root element
			// https://www.amcharts.com/docs/v5/getting-started/#Root_element
			root = am5.Root.new(element);

			// Set themes
			// https://www.amcharts.com/docs/v5/concepts/themes/
			root.setThemes([am5themes_Animated.new(root)]);

			// Create chart
			// https://www.amcharts.com/docs/v5/charts/radar-chart/
			var chart = root.container.children.push(
				am5radar.RadarChart.new(root, {
					panX: false,
					panY: false,
					wheelX: "panX",
					wheelY: "zoomX",
					innerRadius: am5.percent(40),
					radius: am5.percent(70),
					arrangeTooltips: false,
				})
			);

			var cursor = chart.set(
				"cursor",
				am5radar.RadarCursor.new(root, {
					behavior: "zoomX",
				})
			);

			cursor.lineY.set("visible", false);

			// Create axes and their renderers
			// https://www.amcharts.com/docs/v5/charts/radar-chart/#Adding_axes
			var xRenderer = am5radar.AxisRendererCircular.new(root, {
				minGridDistance: 30,
			});
			xRenderer.labels.template.setAll({
				textType: "radial",
				radius: 10,
				paddingTop: 0,
				paddingBottom: 0,
				centerY: am5.p50,
				fontWeight: "400",
				fontSize: 11,
				fill: am5.color(KTUtil.getCssVariableValue("--kt-gray-700")),
			});

			xRenderer.grid.template.setAll({
				location: 0.5,
				strokeDasharray: [2, 2],
				stroke: KTUtil.getCssVariableValue('--kt-gray-400')
			});

			var xAxis = chart.xAxes.push(
				am5xy.CategoryAxis.new(root, {
					maxDeviation: 0,
					categoryField: "name",
					renderer: xRenderer,
				})
			);

			var yRenderer = am5radar.AxisRendererRadial.new(root, {
				minGridDistance: 30,
			});

			var yAxis = chart.yAxes.push(
				am5xy.ValueAxis.new(root, {
					renderer: yRenderer,
				})
			);

			yRenderer.grid.template.setAll({
				strokeDasharray: [2, 2],
				stroke: KTUtil.getCssVariableValue('--kt-gray-400')
			});

			yRenderer.labels.template.setAll({
				fontWeight: "500",
				fontSize: 12,
				fill: am5.color(KTUtil.getCssVariableValue("--kt-gray-700")),
			});

			// Create series
			// https://www.amcharts.com/docs/v5/charts/radar-chart/#Adding_series
			var series1 = chart.series.push(
				am5radar.RadarLineSeries.new(root, {
					name: "Revenue",
					xAxis: xAxis,
					yAxis: yAxis,
					valueYField: "value1",
					categoryXField: "name",
					fill: am5.color(KTUtil.getCssVariableValue("--kt-primary")),
				})
			);

			series1.strokes.template.setAll({
				strokeOpacity: 0,
			});

			series1.fills.template.setAll({
				visible: true,
				fill: am5.color(KTUtil.getCssVariableValue("--kt-primary")),
				fillOpacity: 0.5,
			});

			var series2 = chart.series.push(
				am5radar.RadarLineSeries.new(root, {
					name: "Expense",
					xAxis: xAxis,
					yAxis: yAxis,
					valueYField: "value2",
					categoryXField: "name",
					stacked: true,
					tooltip: am5.Tooltip.new(root, {
						labelText: "Revenue: {value1}\nExpense:{value2}",
					}),
					fill: am5.color(KTUtil.getCssVariableValue("--kt-success")),
				})
			);

			series2.strokes.template.setAll({
				strokeOpacity: 0,
			});

			series2.fills.template.setAll({
				visible: true,
				fill: am5.color(KTUtil.getCssVariableValue("--kt-primary")),
				fillOpacity: 0.5,
			});

			var legend = chart.radarContainer.children.push(
				am5.Legend.new(root, {
					width: 150,
					centerX: am5.p50,
					centerY: am5.p50,
				})
			);
			legend.data.setAll([series1, series2]);

			legend.labels.template.setAll({
				fontWeight: "600",
				fontSize: 13,
				fill: am5.color(KTUtil.getCssVariableValue("--kt-gray-700")),
			});

			// Set data
			// https://www.amcharts.com/docs/v5/charts/radar-chart/#Setting_data
			var data = [
				{
					name: "Openlane",
					value1: 160.2,
					value2: 66.9,
				},
				{
					name: "Yearin",
					value1: 150.1,
					value2: 50.5,
				},
				{
					name: "Goodsilron",
					value1: 120.7,
					value2: 32.3,
				},
				{
					name: "Condax",
					value1: 89.4,
					value2: 74.5,
				},
				{
					name: "Opentech",
					value1: 78.5,
					value2: 29.7,
				},
				{
					name: "Golddex",
					value1: 77.6,
					value2: 102.2,
				},
				{
					name: "Isdom",
					value1: 69.8,
					value2: 22.6,
				},
				{
					name: "Plusstrip",
					value1: 63.6,
					value2: 45.3,
				},
				{
					name: "Kinnamplus",
					value1: 59.7,
					value2: 12.8,
				},
				{
					name: "Zumgoity",
					value1: 54.3,
					value2: 19.6,
				},
				{
					name: "Stanredtax",
					value1: 52.9,
					value2: 96.3,
				},
				{
					name: "Conecom",
					value1: 42.9,
					value2: 11.9,
				},
				{
					name: "Zencorporation",
					value1: 40.9,
					value2: 16.8,
				},
				{
					name: "Iselectrics",
					value1: 39.2,
					value2: 9.9,
				},
				{
					name: "Treequote",
					value1: 36.6,
					value2: 36.9,
				},
				{
					name: "Sumace",
					value1: 34.8,
					value2: 14.6,
				},
				{
					name: "Lexiqvolax",
					value1: 32.1,
					value2: 35.6,
				},
				{
					name: "Sunnamplex",
					value1: 31.8,
					value2: 5.9,
				},
				{
					name: "Faxquote",
					value1: 29.3,
					value2: 14.7,
				},
				{
					name: "Donware",
					value1: 23.0,
					value2: 2.8,
				},
				{
					name: "Warephase",
					value1: 21.5,
					value2: 12.1,
				},
				{
					name: "Donquadtech",
					value1: 19.7,
					value2: 10.8,
				},
				{
					name: "Nam-zim",
					value1: 15.5,
					value2: 4.1,
				},
				{
					name: "Y-corporation",
					value1: 14.2,
					value2: 11.3,
				},
			];

			series1.data.setAll(data);
			series2.data.setAll(data);
			xAxis.data.setAll(data);

			// Animate chart and series in
			// https://www.amcharts.com/docs/v5/concepts/animations/#Initial_animation
			series1.appear(1000);
			series2.appear(1000);
			chart.appear(1000, 100);
		}

		// On amchart ready
		am5.ready(function () {
			init();
		}); // end am5.ready()

		// Update chart on theme mode change
		KTThemeMode.on("kt.thememode.change", function() {     
			// Destroy chart
			root.dispose();

			// Reinit chart
			init();
		});
	};

	// Public methods
	return {
		init: function () {
			initChart1();
			initChart2();
		},
	};
})();

// Webpack support
if (typeof module !== "undefined") {
	module.exports = KTChartsWidget25;
}

// On document ready
KTUtil.onDOMContentLoaded(function () {
	KTChartsWidget25.init();
});

"use strict";

// Class definition
var KTChartsWidget26 = function () {
    var chart = {
        self: null,
        rendered: false
    };

    // Private methods
    var initChart = function() {
        var element = document.getElementById("kt_charts_widget_26");

        if (!element) {
            return;
        }
        
        var height = parseInt(KTUtil.css(element, 'height'));
        var labelColor = KTUtil.getCssVariableValue('--kt-gray-500');
        var borderColor = KTUtil.getCssVariableValue('--kt-border-dashed-color');
        var baseColor = KTUtil.getCssVariableValue('--kt-primary');
        var lightColor = KTUtil.getCssVariableValue('--kt-primary');
        var chartInfo = element.getAttribute('data-kt-chart-info');

        var options = {
            series: [{
                name: chartInfo,
                data: [34.5, 34.5, 35, 35, 35.5, 35.5, 35, 35, 35.5, 35.5, 35, 35, 34.5, 34.5, 35, 35, 35.5, 35.5, 35]
            }],
            chart: {
                fontFamily: 'inherit',
                type: 'area',
                height: height,
                toolbar: {
                    show: false
                }
            },
            plotOptions: {

            },
            legend: {
                show: false
            },
            dataLabels: {
                enabled: false
            },
            fill: {
                type: "gradient",
                gradient: {
                    shadeIntensity: 1,
                    opacityFrom: 0.4,
                    opacityTo: 0,
                    stops: [0, 80, 100]
                }
            },
            stroke: {
                curve: 'smooth',
                show: true,
                width: 3,
                colors: [baseColor]
            },
            xaxis: {
                categories: ['', 'Apr 02', 'Apr 03', 'Apr 04', 'Apr 05', 'Apr 06', 'Apr 07', 'Apr 08', 'Apr 09', 'Apr 10', 'Apr 11', 'Apr 12', 'Apr 13', 'Apr 14', 'Apr 17', 'Apr 18', 'Apr 19', 'Apr 21', ''],
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false
                },
                tickAmount: 6,
                labels: {
                    rotate: 0,
                    rotateAlways: true,
                    style: {
                        colors: labelColor,
                        fontSize: '12px'
                    }
                },
                crosshairs: {
                    position: 'front',
                    stroke: {
                        color: baseColor,
                        width: 1,
                        dashArray: 3
                    }
                },
                tooltip: {
                    enabled: true,
                    formatter: undefined,
                    offsetY: 0,
                    style: {
                        fontSize: '12px'
                    }
                }
            },
            yaxis: {
                max: 36.3,
                min: 33,
                tickAmount: 6,
                labels: {
                    style: {
                        colors: labelColor,
                        fontSize: '12px'
                    },
                    formatter: function (val) {
                        return '$' + parseInt(10 * val)
                    }
                }
            },
            states: {
                normal: {
                    filter: {
                        type: 'none',
                        value: 0
                    }
                },
                hover: {
                    filter: {
                        type: 'none',
                        value: 0
                    }
                },
                active: {
                    allowMultipleDataPointsSelection: false,
                    filter: {
                        type: 'none',
                        value: 0
                    }
                }
            },
            tooltip: {
                style: {
                    fontSize: '12px'
                },
                y: {
                    formatter: function (val) {
                        return '$' + parseInt(10 * val)
                    }
                }
            },
            colors: [lightColor],
            grid: {
                borderColor: borderColor,
                strokeDashArray: 4,
                yaxis: {
                    lines: {
                        show: true
                    }
                }
            },
            markers: {
                strokeColor: baseColor,
                strokeWidth: 3
            }
        };

        chart.self = new ApexCharts(element, options);

        // Set timeout to properly get the parent elements width
        setTimeout(function() {
            chart.self.render();
            chart.rendered = true;
        }, 200);            
    }

    // Public methods
    return {
        init: function () {
            initChart();

            // Update chart on theme mode change
            KTThemeMode.on("kt.thememode.change", function() {                
                if (chart.rendered) {
                    chart.self.destroy();
                }

                initChart();
            });
        }   
    }
}();

// Webpack support
if (typeof module !== 'undefined') {
    module.exports = KTChartsWidget26;
}

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTChartsWidget26.init();
});

"use strict";

// Class definition
var KTChartsWidget27 = function () {
    var chart = {
        self: null,
        rendered: false
    };
    // Private methods
    var initChart = function(chart) {
        var element = document.getElementById("kt_charts_widget_27"); 

        if (!element) {
            return;
        }
        
        var labelColor = KTUtil.getCssVariableValue('--kt-gray-800');    
        var borderColor = KTUtil.getCssVariableValue('--kt-border-dashed-color');
        var maxValue = 18;
        
        var options = {
            series: [{
                name: 'Sessions',
                data: [12.478, 7.546, 6.083, 5.041, 4.420]                                                                                                             
            }],           
            chart: {
                fontFamily: 'inherit',
                type: 'bar',
                height: 350,
                toolbar: {
                    show: false
                }                             
            },                    
            plotOptions: {
                bar: {
                    borderRadius: 8,
                    horizontal: true,
                    distributed: true,
                    barHeight: 50,
                    dataLabels: {
				        position: 'bottom' // use 'bottom' for left and 'top' for right align(textAnchor)
			        }                                                       
                }
            },
            dataLabels: {  // Docs: https://apexcharts.com/docs/options/datalabels/
                enabled: true,              
                textAnchor: 'start',  
                offsetX: 0,                 
                formatter: function (val, opts) {
                    var val = val * 1000;
                    var Format = wNumb({
                        //prefix: '$',
                        //suffix: ',-',
                        thousand: ','
                    });

                    return Format.to(val);
                },
                style: {
                    fontSize: '14px',
                    fontWeight: '600',
                    align: 'left',                                                            
                }                                       
            },             
            legend: {
                show: false
            },                               
            colors: ['#3E97FF', '#F1416C', '#50CD89', '#FFC700', '#7239EA'],                                                                      
            xaxis: {
                categories: ["USA", "India", 'Canada', 'Brasil', 'France'],
                labels: {
                    formatter: function (val) {
                        return val + "K"
                    },
                    style: {
                        colors: labelColor,
                        fontSize: '14px',
                        fontWeight: '600',
                        align: 'left'                                              
                    }                  
                },
                axisBorder: {
					show: false
				}                         
            },
            yaxis: {
                labels: {       
                    formatter: function (val, opt) {
                        if (Number.isInteger(val)) {
                            var percentage = parseInt(val * 100 / maxValue) . toString(); 
                            return val + ' - ' + percentage + '%';
                        } else {
                            return val;
                        }
                    },            
                    style: {
                        colors: labelColor,
                        fontSize: '14px',
                        fontWeight: '600'                                                                 
                    },
                    offsetY: 2,
                    align: 'left' 
                }           
            },
            grid: {                
                borderColor: borderColor,                
                xaxis: {
                    lines: {
                        show: true
                    }
                },   
                yaxis: {
                    lines: {
                        show: false  
                    }
                },
                strokeDashArray: 4              
            },
            tooltip: {
                style: {
                    fontSize: '12px'
                },
                y: {
                    formatter: function (val) {
                        return val;
                    }
                }
            }                                 
        };  
          
        chart.self = new ApexCharts(element, options);

        // Set timeout to properly get the parent elements width
        setTimeout(function() {
            chart.self.render();
            chart.rendered = true;
        }, 200);        
    }

    // Public methods
    return {
        init: function () {
            initChart(chart);

            // Update chart on theme mode change
            KTThemeMode.on("kt.thememode.change", function() {                
                if (chart.rendered) {
                    chart.self.destroy();
                }

                initChart(chart);
            });
        }   
    }
}();

// Webpack support
if (typeof module !== 'undefined') {
    module.exports = KTChartsWidget27;
}

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTChartsWidget27.init();
});


 
"use strict";

// Class definition
var KTChartsWidget28 = function () {
    var chart = {
        self: null,
        rendered: false
    };
    
    // Private methods
    var initChart = function(chart) {
        var element = document.getElementById("kt_charts_widget_28");

        if (!element) {
            return;
        }
        
        var height = parseInt(KTUtil.css(element, 'height'));
        var labelColor = KTUtil.getCssVariableValue('--kt-gray-500');
        var borderColor = KTUtil.getCssVariableValue('--kt-border-dashed-color');
        var baseColor = KTUtil.getCssVariableValue('--kt-info');         

        var options = {
            series: [{
                name: 'Links',
                data: [190, 230, 230, 200, 200, 190, 190, 200, 200, 220, 220, 200, 200, 210, 210]
            }],            
            chart: {
                fontFamily: 'inherit',
                type: 'area',
                height: height,
                toolbar: {
                    show: false
                }
            },            
            legend: {
                show: false
            },
            dataLabels: {
                enabled: false
            },
            fill: {
                type: "gradient",
                gradient: {
                    shadeIntensity: 1,
                    opacityFrom: 0.4,
                    opacityTo: 0,
                    stops: [0, 80, 100]
                }
            },
            stroke: {
                curve: 'smooth',
                show: true,
                width: 3,
                colors: [baseColor]
            },
            xaxis: {
                categories: ['May 04', 'May 05', 'May 06', 'May 09', 'May 10', 'May 12', 'May 14', 'May 17', 'May 18', 'May 20', 'May 22', 'May 24', 'May 26', 'May 28', 'May 30'],
                axisBorder: {
                    show: false,
                },
                offsetX: 20,
                axisTicks: {
                    show: false
                },
                tickAmount: 3,
                labels: {
                    rotate: 0,
                    rotateAlways: false,
                    style: {
                        colors: labelColor,
                        fontSize: '12px'                        
                    }
                },
                crosshairs: {
                    position: 'front',
                    stroke: {
                        color: baseColor,
                        width: 1,
                        dashArray: 3
                    }
                },
                tooltip: {
                    enabled: true,
                    formatter: undefined,
                    offsetY: 0,
                    style: {
                        fontSize: '12px'
                    }
                }
            },
            yaxis: {
                tickAmount: 4,
                max: 250,
                min: 100,
                labels: {
                    style: {
                        colors: labelColor,
                        fontSize: '12px'
                    },
                    formatter: function (val) {
                        return val 
                    }
                }
            },
            states: {
                normal: {
                    filter: {
                        type: 'none',
                        value: 0
                    }
                },
                hover: {
                    filter: {
                        type: 'none',
                        value: 0
                    }
                },
                active: {
                    allowMultipleDataPointsSelection: false,
                    filter: {
                        type: 'none',
                        value: 0
                    }
                }
            },
            tooltip: {
                style: {
                    fontSize: '12px'
                },
                y: {
                    formatter: function (val) {
                        return val 
                    }
                }
            },
            colors: [baseColor],
            grid: {
                borderColor: borderColor,
                strokeDashArray: 4,
                yaxis: {
                    lines: {
                        show: true
                    }
                }
            },
            markers: {
                strokeColor: baseColor,
                strokeWidth: 3
            }
        };

        chart.self = new ApexCharts(element, options);

        // Set timeout to properly get the parent elements width
        setTimeout(function() {
            chart.self.render();
            chart.rendered = true;
        }, 200);  
    }

    // Public methods
    return {
        init: function () {
            initChart(chart);

            // Update chart on theme mode change
            KTThemeMode.on("kt.thememode.change", function() {                
                if (chart.rendered) {
                    chart.self.destroy();
                }

                initChart(chart);
            });
        }   
    }
}();

// Webpack support
if (typeof module !== 'undefined') {
    module.exports = KTChartsWidget28;
}

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTChartsWidget28.init();
});

"use strict";

// Class definition
var KTChartsWidget29 = function () {
    var chart = {
        self: null,
        rendered: false
    };

    // Private methods
    var initChart = function(chart) {
        var element = document.getElementById("kt_charts_widget_29");

        if (!element) {
            return;
        }
        
        var height = parseInt(KTUtil.css(element, 'height'));
        var labelColor = KTUtil.getCssVariableValue('--kt-gray-500');
        var borderColor = KTUtil.getCssVariableValue('--kt-border-dashed-color');
        var baseColor = KTUtil.getCssVariableValue('--kt-warning');         

        var options = {
            series: [{
                name: 'Position',
                data: [4, 7.5, 7.5, 6, 6, 4, 4, 6, 6, 8, 8, 6, 6, 7, 7]
            }],            
            chart: {
                fontFamily: 'inherit',
                type: 'area',
                height: height,
                toolbar: {
                    show: false
                }
            },            
            legend: {
                show: false
            },
            dataLabels: {
                enabled: false
            },
            fill: {
                type: "gradient",
                gradient: {
                    shadeIntensity: 1,
                    opacityFrom: 0.4,
                    opacityTo: 0,
                    stops: [0, 80, 100]
                }
            },
            stroke: {
                curve: 'smooth',
                show: true,
                width: 3,
                colors: [baseColor]
            },
            xaxis: {
                categories: ['Apr 02', 'Apr 03', 'Apr 04', 'Apr 05', 'Apr 06', 'Apr 09', 'Apr 10', 'Apr 12', 'Apr 14', 'Apr 17', 'Apr 18', 'Apr 18', 'Apr 20', 'Apr 22', 'Apr 24'],
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false
                },
                offsetX: 20,
                tickAmount: 4,
                labels: {
                    rotate: 0,
                    rotateAlways: false,
                    style: {
                        colors: labelColor,
                        fontSize: '12px'                       
                    }
                },
                crosshairs: {
                    position: 'front',
                    stroke: {
                        color: baseColor,
                        width: 1,
                        dashArray: 3
                    }
                },
                tooltip: {
                    enabled: true,
                    formatter: undefined,
                    offsetY: 0,
                    style: {
                        fontSize: '12px'
                    }
                }
            },
            yaxis: {
                tickAmount: 4,
                max: 10,
                min: 1,
                labels: {
                    style: {
                        colors: labelColor,
                        fontSize: '12px'
                    },
                    formatter: function (val) {
                        return val 
                    }
                }
            },
            states: {
                normal: {
                    filter: {
                        type: 'none',
                        value: 0
                    }
                },
                hover: {
                    filter: {
                        type: 'none',
                        value: 0
                    }
                },
                active: {
                    allowMultipleDataPointsSelection: false,
                    filter: {
                        type: 'none',
                        value: 0
                    }
                }
            },
            tooltip: {
                style: {
                    fontSize: '12px'
                },
                y: {
                    formatter: function (val) {
                        return val 
                    }
                }
            },
            colors: [baseColor],
            grid: {
                borderColor: borderColor,
                strokeDashArray: 4,
                yaxis: {
                    lines: {
                        show: true
                    }
                }
            },
            markers: {
                strokeColor: baseColor,
                strokeWidth: 3
            }
        };

        chart.self = new ApexCharts(element, options);

        // Set timeout to properly get the parent elements width
        setTimeout(function() {
            chart.self.render();
            chart.rendered = true;
        }, 200);      
    }

    // Public methods
    return {
        init: function () {
            initChart(chart);

            // Update chart on theme mode change
            KTThemeMode.on("kt.thememode.change", function() {                
                if (chart.rendered) {
                    chart.self.destroy();
                }

                initChart(chart);
            });
        }   
    }
}();

// Webpack support
if (typeof module !== 'undefined') {
    module.exports = KTChartsWidget29;
}

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTChartsWidget29.init();
});

"use strict";

// Class definition
var KTChartsWidget3 = function () {
    var chart = {
        self: null,
        rendered: false
    };

    // Private methods
    var initChart = function(chart) {
        var element = document.getElementById("kt_charts_widget_3");

        if (!element) {
            return;
        }
        
        var height = parseInt(KTUtil.css(element, 'height'));
        var labelColor = KTUtil.getCssVariableValue('--kt-gray-500');
        var borderColor = KTUtil.getCssVariableValue('--kt-border-dashed-color');
        var baseColor = KTUtil.getCssVariableValue('--kt-success');
        var lightColor = KTUtil.getCssVariableValue('--kt-success');

        var options = {
            series: [{
                name: 'Sales',
                data: [18, 18, 20, 20, 18, 18, 22, 22, 20, 20, 18, 18, 20, 20, 18, 18, 20, 20, 22]
            }],            
            chart: {
                fontFamily: 'inherit',
                type: 'area',
                height: height,
                toolbar: {
                    show: false
                }
            },
            plotOptions: {

            },
            legend: {
                show: false
            },
            dataLabels: {
                enabled: false
            },
            fill: {
                type: "gradient",
                gradient: {
                    shadeIntensity: 1,
                    opacityFrom: 0.4,
                    opacityTo: 0,
                    stops: [0, 80, 100]
                }
            },
            stroke: {
                curve: 'smooth',
                show: true,
                width: 3,
                colors: [baseColor]
            },
            xaxis: {
                categories: ['', 'Apr 02', 'Apr 03', 'Apr 04', 'Apr 05', 'Apr 06', 'Apr 07', 'Apr 08', 'Apr 09', 'Apr 10', 'Apr 11', 'Apr 12', 'Apr 13', 'Apr 14', 'Apr 15', 'Apr 16', 'Apr 17', 'Apr 18', ''],
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false
                },
                tickAmount: 6,
                labels: {
                    rotate: 0,
                    rotateAlways: true,
                    style: {
                        colors: labelColor,
                        fontSize: '12px'
                    }
                },
                crosshairs: {
                    position: 'front',
                    stroke: {
                        color: baseColor,
                        width: 1,
                        dashArray: 3
                    }
                },
                tooltip: {
                    enabled: true,
                    formatter: undefined,
                    offsetY: 0,
                    style: {
                        fontSize: '12px'
                    }
                }
            },
            yaxis: {
                tickAmount: 4,
                max: 24,
                min: 10,
                labels: {
                    style: {
                        colors: labelColor,
                        fontSize: '12px'
                    },
                    formatter: function (val) {
                        return '$' + val + "K"
                    }
                }
            },
            states: {
                normal: {
                    filter: {
                        type: 'none',
                        value: 0
                    }
                },
                hover: {
                    filter: {
                        type: 'none',
                        value: 0
                    }
                },
                active: {
                    allowMultipleDataPointsSelection: false,
                    filter: {
                        type: 'none',
                        value: 0
                    }
                }
            },
            tooltip: {
                style: {
                    fontSize: '12px'
                },
                y: {
                    formatter: function (val) {
                        return "$" + val + "K"
                    }
                }
            },
            colors: [lightColor],
            grid: {
                borderColor: borderColor,
                strokeDashArray: 4,
                yaxis: {
                    lines: {
                        show: true
                    }
                }
            },
            markers: {
                strokeColor: baseColor,
                strokeWidth: 3
            }
        };

        chart.self = new ApexCharts(element, options);

        // Set timeout to properly get the parent elements width
        setTimeout(function() {
            chart.self.render();
            chart.rendered = true;
        }, 200);  
    }

    // Public methods
    return {
        init: function () {
            initChart(chart);

            // Update chart on theme mode change
            KTThemeMode.on("kt.thememode.change", function() {                
                if (chart.rendered) {
                    chart.self.destroy();
                }

                initChart(chart);
            });
        }   
    }
}();

// Webpack support
if (typeof module !== 'undefined') {
    module.exports = KTChartsWidget3;
}

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTChartsWidget3.init();
});

"use strict";

// Class definition
var KTChartsWidget30 = (function () {
    // Private methods
    var initChart = function () {
        // Check if amchart library is included
        if (typeof am5 === "undefined") {
            return;
        }

        var element = document.getElementById("kt_charts_widget_30_chart");

        if (!element) {
            return;
        }

        var root;

        var init = function() {
            // Create root element
            // https://www.amcharts.com/docs/v5/getting-started/#Root_element
            root = am5.Root.new(element);

            // Set themes
            // https://www.amcharts.com/docs/v5/concepts/themes/
            root.setThemes([am5themes_Animated.new(root)]);

            // Create chart
            // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/
            // start and end angle must be set both for chart and series
            var chart = root.container.children.push(
                am5percent.PieChart.new(root, {
                    startAngle: 180,
                    endAngle: 360,
                    layout: root.verticalLayout,
                    innerRadius: am5.percent(50),
                })
            );

            // Create series
            // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Series
            // start and end angle must be set both for chart and series
            var series = chart.series.push(
                am5percent.PieSeries.new(root, {
                    startAngle: 180,
                    endAngle: 360,
                    valueField: "value",
                    categoryField: "category",
                    alignLabels: false,
                })
            );

            series.labels.template.setAll({
                fontWeight: "400",
                fontSize: 13,
                fill: am5.color(KTUtil.getCssVariableValue('--kt-gray-500'))
            });

            series.states.create("hidden", {
                startAngle: 180,
                endAngle: 180,
            });

            series.slices.template.setAll({
                cornerRadius: 5,
            });

            series.ticks.template.setAll({
                forceHidden: true,
            });

            // Set data
            // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Setting_data
            series.data.setAll([
                { value: 10, category: "One", fill: am5.color(KTUtil.getCssVariableValue('--kt-primary')) },
                { value: 9, category: "Two", fill: am5.color(KTUtil.getCssVariableValue('--kt-success')) },
                { value: 6, category: "Three", fill: am5.color(KTUtil.getCssVariableValue('--kt-danger')) },
                { value: 5, category: "Four", fill: am5.color(KTUtil.getCssVariableValue('--kt-warning')) },
                { value: 4, category: "Five", fill: am5.color(KTUtil.getCssVariableValue('--kt-info')) },
                { value: 3, category: "Six", fill: am5.color(KTUtil.getCssVariableValue('--kt-secondary')) }
            ]);

            series.appear(1000, 100);
        }

        am5.ready(function () {
            init();
        });

        // Update chart on theme mode change
		KTThemeMode.on("kt.thememode.change", function() {     
			// Destroy chart
			root.dispose();

			// Reinit chart
			init();
		});
    };

    // Public methods
    return {
        init: function () {
            initChart();
        },
    };
})();

// Webpack support
if (typeof module !== "undefined") {
    module.exports = KTChartsWidget30;
}

// On document ready
KTUtil.onDOMContentLoaded(function () {
    KTChartsWidget30.init();
});

"use strict";

// Class definition
var KTChartsWidget31 = (function () {
	// Private methods
	var initChart1 = function () {
		// Check if amchart library is included
		if (typeof am5 === "undefined") {
			return;
		}

		var element = document.getElementById("kt_charts_widget_31_chart");

		if (!element) {
			return;
		}

		var chart;
		var root;

		var init = function() {
			// Create root element
			// https://www.amcharts.com/docs/v5/getting-started/#Root_element
			root = am5.Root.new(element);

			// Set themes
			// https://www.amcharts.com/docs/v5/concepts/themes/
			root.setThemes([am5themes_Animated.new(root)]);

			// Create chart
			// https://www.amcharts.com/docs/v5/charts/radar-chart/
			chart = root.container.children.push(
				am5radar.RadarChart.new(root, {
					panX: false,
					panY: false,
					wheelX: "panX",
					wheelY: "zoomX",
					innerRadius: am5.percent(40),
					radius: am5.percent(70),
					arrangeTooltips: false,
				})
			);

			var cursor = chart.set(
				"cursor",
				am5radar.RadarCursor.new(root, {
					behavior: "zoomX",
				})
			);

			cursor.lineY.set("visible", false);

			// Create axes and their renderers
			// https://www.amcharts.com/docs/v5/charts/radar-chart/#Adding_axes
			var xRenderer = am5radar.AxisRendererCircular.new(root, {
				minGridDistance: 30,
			});
			
			xRenderer.labels.template.setAll({
				textType: "radial",
				radius: 10,
				paddingTop: 0,
				paddingBottom: 0,
				centerY: am5.p50,
				fontWeight: "400",
				fontSize: 11,
				fill: am5.color(KTUtil.getCssVariableValue("--kt-gray-800")),
			});

			xRenderer.grid.template.setAll({
				location: 0.5,
				strokeDasharray: [2, 2],
				stroke: KTUtil.getCssVariableValue('--kt-gray-400')
			});

			var xAxis = chart.xAxes.push(
				am5xy.CategoryAxis.new(root, {
					maxDeviation: 0,
					categoryField: "name",
					renderer: xRenderer,
				})
			);

			var yRenderer = am5radar.AxisRendererRadial.new(root, {
				minGridDistance: 30,
			});

			yRenderer.labels.template.setAll({
				fontWeight: "500",
				fontSize: 12,
				fill: am5.color(KTUtil.getCssVariableValue("--kt-gray-700")),
			});

			var yAxis = chart.yAxes.push(
				am5xy.ValueAxis.new(root, {
					renderer: yRenderer,
				})
			);

			yRenderer.grid.template.setAll({
				strokeDasharray: [2, 2],
				stroke: KTUtil.getCssVariableValue('--kt-gray-400')				
			});

			// Create series
			// https://www.amcharts.com/docs/v5/charts/radar-chart/#Adding_series
			var series1 = chart.series.push(
				am5radar.RadarLineSeries.new(root, {
					name: "Revenue",
					xAxis: xAxis,
					yAxis: yAxis,
					valueYField: "value1",
					categoryXField: "name",
					fill: am5.color(KTUtil.getCssVariableValue("--kt-primary")),
				})
			);

			series1.strokes.template.setAll({
				strokeOpacity: 0,
			});

			series1.fills.template.setAll({
				visible: true,
				fill: am5.color(KTUtil.getCssVariableValue("--kt-primary")),
				fillOpacity: 0.5,
			});

			var series2 = chart.series.push(
				am5radar.RadarLineSeries.new(root, {
					name: "Expense",
					xAxis: xAxis,
					yAxis: yAxis,
					valueYField: "value2",
					categoryXField: "name",
					stacked: true,
					tooltip: am5.Tooltip.new(root, {
						labelText: "Revenue: {value1}\nExpense:{value2}",
					}),
					fill: am5.color(KTUtil.getCssVariableValue("--kt-success")),
				})
			);

			series2.strokes.template.setAll({
				strokeOpacity: 0,
			});

			series2.fills.template.setAll({
				visible: true,
				fill: am5.color(KTUtil.getCssVariableValue("--kt-primary")),
				fillOpacity: 0.5,
			});

			var legend = chart.radarContainer.children.push(
				am5.Legend.new(root, {
					width: 150,
					centerX: am5.p50,
					centerY: am5.p50
				})
			);
			legend.data.setAll([series1, series2]);

			legend.labels.template.setAll({
				fontWeight: "600",
				fontSize: 13,
				fill: am5.color(KTUtil.getCssVariableValue("--kt-gray-700")),
			});

			// Set data
			// https://www.amcharts.com/docs/v5/charts/radar-chart/#Setting_data
			var data = [
				{
					name: "Openlane",
					value1: 160.2,
					value2: 26.9,
				},
				{
					name: "Yearin",
					value1: 120.1,
					value2: 50.5,
				},
				{
					name: "Goodsilron",
					value1: 150.7,
					value2: 12.3,
				},
				{
					name: "Condax",
					value1: 69.4,
					value2: 74.5,
				},
				{
					name: "Opentech",
					value1: 78.5,
					value2: 29.7,
				},
				{
					name: "Golddex",
					value1: 77.6,
					value2: 102.2,
				},
				{
					name: "Isdom",
					value1: 69.8,
					value2: 22.6,
				},
				{
					name: "Plusstrip",
					value1: 63.6,
					value2: 45.3,
				},
				{
					name: "Kinnamplus",
					value1: 59.7,
					value2: 12.8,
				},
				{
					name: "Zumgoity",
					value1: 64.3,
					value2: 19.6,
				},
				{
					name: "Stanredtax",
					value1: 52.9,
					value2: 96.3,
				},
				{
					name: "Conecom",
					value1: 42.9,
					value2: 11.9,
				},
				{
					name: "Zencorporation",
					value1: 40.9,
					value2: 16.8,
				},
				{
					name: "Iselectrics",
					value1: 39.2,
					value2: 9.9,
				},
				{
					name: "Treequote",
					value1: 76.6,
					value2: 36.9,
				},
				{
					name: "Sumace",
					value1: 34.8,
					value2: 14.6,
				},
				{
					name: "Lexiqvolax",
					value1: 32.1,
					value2: 35.6,
				},
				{
					name: "Sunnamplex",
					value1: 31.8,
					value2: 5.9,
				},
				{
					name: "Faxquote",
					value1: 29.3,
					value2: 14.7,
				},
				{
					name: "Donware",
					value1: 23.0,
					value2: 2.8,
				},
				{
					name: "Warephase",
					value1: 21.5,
					value2: 12.1,
				},
				{
					name: "Donquadtech",
					value1: 19.7,
					value2: 10.8,
				},
				{
					name: "Nam-zim",
					value1: 15.5,
					value2: 4.1,
				},
				{
					name: "Y-corporation",
					value1: 14.2,
					value2: 11.3,
				},
			];

			series1.data.setAll(data);
			series2.data.setAll(data);
			xAxis.data.setAll(data);

			// Animate chart and series in
			// https://www.amcharts.com/docs/v5/concepts/animations/#Initial_animation
			series1.appear(1000);
			series2.appear(1000);
			chart.appear(1000, 100);
		}

		// On amchart ready
		am5.ready(function () {
			init();
		}); // end am5.ready()

		// Update chart on theme mode change
		KTThemeMode.on("kt.thememode.change", function() {     
			// Destroy chart
			root.dispose();

			// Reinit chart
			init();
		});
	};

	// Public methods
	return {
		init: function () {
			initChart1();
		}
	};
})();

// Webpack support
if (typeof module !== "undefined") {
	module.exports = KTChartsWidget31;
}

// On document ready
KTUtil.onDOMContentLoaded(function () {
	KTChartsWidget31.init();
});

"use strict";

// Class definition
var KTChartsWidget32 = function () {
    var chart1 = {
        self: null,
        rendered: false
    }; 

    var chart2 = {
        self: null,
        rendered: false
    };

    var chart3 = {
        self: null,
        rendered: false
    };

    // Private methods
    var initChart = function(chart, toggle, chartSelector, data, initByDefault) {
        var element = document.querySelector(chartSelector);      

        if (!element) {
            return;
        }
        
        var height = parseInt(KTUtil.css(element, 'height'));
        var labelColor = KTUtil.getCssVariableValue('--kt-gray-900');

        var borderColor = KTUtil.getCssVariableValue('--kt-border-dashed-color');    

        var options = {
            series: [{
                name: 'Deliveries',
                data: data
            }],
            chart: {
                fontFamily: 'inherit',
                type: 'bar',
                height: height,
                toolbar: {
                    show: false
                }              
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: ['22%'],
                    borderRadius: 5,                     
                    dataLabels: {
                        position: "top" // top, center, bottom
                    },
                    startingShape: 'flat'
                },
            },
            legend: {
                show: false
            },
            dataLabels: {
                enabled: true, 
                offsetY: -28,                                             
                style: {
                    fontSize: '13px',
                    colors: [labelColor]
                }
            },
            stroke: {
                show: true,
                width: 2,
                colors: ['transparent']
            },
            xaxis: {
                categories: ['Grossey', 'Pet Food', 'Flowers', 'Restaurant', 'Kids Toys', 'Clothing', 'Still Water'],
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false
                },
                labels: {
                    style: {
                        colors: KTUtil.getCssVariableValue('--kt-gray-500'),
                        fontSize: '13px'
                    }                    
                },
                crosshairs: {
                    fill: {         
                        gradient: {         
                            opacityFrom: 0,
                            opacityTo: 0
                        }
                    }
                }
            },
            yaxis: {
                labels: {
                    style: {
                        colors: KTUtil.getCssVariableValue('--kt-gray-500'),
                        fontSize: '13px'
                    }
                }
            },
            fill: {
                opacity: 1
            },
            states: {
                normal: {
                    filter: {
                        type: 'none',
                        value: 0
                    }
                },
                hover: {
                    filter: {
                        type: 'none',
                        value: 0
                    }
                },
                active: {
                    allowMultipleDataPointsSelection: false,
                    filter: {
                        type: 'none',
                        value: 0
                    }
                }
            },
            tooltip: {
                style: {
                    fontSize: '12px'
                }
            },
            colors: [KTUtil.getCssVariableValue('--kt-primary'), KTUtil.getCssVariableValue('--kt-primary-light')],
            grid: {
                borderColor: borderColor,
                strokeDashArray: 4,
                yaxis: {
                    lines: {
                        show: true
                    }
                }
            }
        };
        
        chart.self = new ApexCharts(element, options);        
        var tab = document.querySelector(toggle);
        
        if (initByDefault === true) {
            // Set timeout to properly get the parent elements width
            setTimeout(function() {
                chart.self.render();  
                chart.rendered = true;
            }, 200);
        }        

        tab.addEventListener('shown.bs.tab', function (event) {
            if (chart.rendered === false) {
                chart.self.render();  
                chart.rendered = true;
            }
        });
    }

    // Public methods
    return {
        init: function () {   
            var chart1Data = [54, 42, 75, 110, 23, 87, 50];
            initChart(chart1, '#kt_charts_widget_32_tab_1', '#kt_charts_widget_32_chart_1', chart1Data, true);

            var chart2Data = [25, 55, 35, 50, 45, 20, 31];
            initChart(chart2, '#kt_charts_widget_32_tab_2', '#kt_charts_widget_32_chart_2', chart2Data, false);

            var chart3Data = [45, 15, 35, 70, 45, 50, 21];
            initChart(chart3, '#kt_charts_widget_32_tab_3', '#kt_charts_widget_32_chart_3', chart3Data, false);          
            
            // Update chart on theme mode change
            KTThemeMode.on("kt.thememode.change", function() {
                if (chart1.rendered) {
                    chart1.self.destroy();
                }

                if (chart2.rendered) {
                    chart2.self.destroy();
                }

                if (chart3.rendered) {
                    chart3.self.destroy();
                } 
                
                initChart(chart1, '#kt_charts_widget_32_tab_1', '#kt_charts_widget_32_chart_1', chart1Data, chart1.rendered);
                initChart(chart2, '#kt_charts_widget_32_tab_2', '#kt_charts_widget_32_chart_2', chart2Data, chart2.rendered);  
                initChart(chart3, '#kt_charts_widget_32_tab_3', '#kt_charts_widget_32_chart_3', chart3Data, chart3.rendered);                                           
            });         
        }        
    }
}();

// Webpack support
if (typeof module !== 'undefined') {
    module.exports = KTChartsWidget32;
}

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTChartsWidget32.init();
});


 
         
    
"use strict";

// Class definition
var KTChartsWidget33 = function () {
    var chart1 = {
        self: null,
        rendered: false
    }; 

    var chart2 = {
        self: null,
        rendered: false
    };

    var chart3 = {
        self: null,
        rendered: false
    };

    var chart4 = {
        self: null,
        rendered: false
    };

    var chart5 = {
        self: null,
        rendered: false
    };

    // Private methods
    var initChart = function(chart, toggle, chartSelector, data, labels, initByDefault) {
        var element = document.querySelector(chartSelector);

        if (!element) {
            return;
        }
        
        var color = element.getAttribute('data-kt-chart-color');
        var height = parseInt(KTUtil.css(element, 'height'));
        
        var labelColor = KTUtil.getCssVariableValue('--kt-gray-500');
        var borderColor = KTUtil.getCssVariableValue('--kt-border-dashed-color');
        var baseColor = KTUtil.getCssVariableValue('--kt-' + color);    

        var options = {
            series: [{
                name: 'Etherium ',
                data: data
            }],            
            chart: {
                fontFamily: 'inherit',
                type: 'area',
                height: height,
                toolbar: {
                    show: false
                }
            },            
            legend: {
                show: false
            },
            dataLabels: {
                enabled: false
            },
            fill: {
                type: "gradient",
                gradient: {
                    shadeIntensity: 1,
                    opacityFrom: 0.4,
                    opacityTo: 0.2,
                    stops: [15, 120, 100]
                }
            },
            stroke: {
                curve: 'smooth',
                show: true,
                width: 3,
                colors: [baseColor]
            },
            xaxis: {
                categories: labels,
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false
                },
                offsetX: 20,
                tickAmount: 4,
                labels: {
                    rotate: 0,
                    rotateAlways: false,
                    show: false,
                    style: {
                        colors: labelColor,
                        fontSize: '12px'                       
                    }
                },
                crosshairs: {
                    position: 'front',
                    stroke: {
                        color: baseColor,
                        width: 1,
                        dashArray: 3
                    }
                },
                tooltip: {
                    enabled: true,
                    formatter: undefined,
                    offsetY: 0,
                    style: {
                        fontSize: '12px'
                    }
                }
            },
            yaxis: {
                tickAmount: 4,
                max: 4000,
                min: 1000,
                labels: {
                    show: false                    
                }
            },
            states: {
                normal: {
                    filter: {
                        type: 'none',
                        value: 0
                    }
                },
                hover: {
                    filter: {
                        type: 'none',
                        value: 0
                    }
                },
                active: {
                    allowMultipleDataPointsSelection: false,
                    filter: {
                        type: 'none',
                        value: 0
                    }
                }
            },
            tooltip: {
                style: {
                    fontSize: '12px'
                },
                y: {
                    formatter: function (val) {
                        return val + '$';
                    }
                }
            },
            colors: [baseColor],
            grid: {
                borderColor: borderColor,
                strokeDashArray: 3,
                yaxis: {
                    lines: {
                        show: true
                    }
                }
            },
            markers: {
                strokeColor: baseColor,
                strokeWidth: 3
            }
        };

        chart.self = new ApexCharts(element, options);        
        var tab = document.querySelector(toggle);
        
        if (initByDefault === true) {
            // Set timeout to properly get the parent elements width
            setTimeout(function() {
                chart.self.render();  
                chart.rendered = true;
            }, 200);
        }        

        tab.addEventListener('shown.bs.tab', function (event) {
            if (chart.rendered === false) {
                chart.self.render();  
                chart.rendered = true;
            }
        });
    }

    // Public methods
    return {       
        init: function () {   
            var chart1Data = [2100, 3200, 3200, 2400, 2400, 1800, 1800, 2400, 2400, 3200, 3200, 3000, 3000, 3250, 3250];
            var chart1Labels = ['10AM', '10.30AM', '11AM', '11.15AM', '11.30AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM', '9PM'];

            initChart(chart1, '#kt_charts_widget_33_tab_1', '#kt_charts_widget_33_chart_1', chart1Data, chart1Labels, true);

            var chart2Data = [2300, 2300, 2000, 3200, 3200, 2800, 2400, 2400, 3100, 2900, 3100, 3100, 2600, 2600, 3200];
            var chart2Labels = ['Apr 01', 'Apr 02', 'Apr 03', 'Apr 04', 'Apr 05', 'Apr 06', 'Apr 07', 'Apr 08', 'Apr 09', 'Apr 10', 'Apr 11', 'Apr 12', 'Apr 13', 'Apr 14', 'Apr 15'];

            initChart(chart2, '#kt_charts_widget_33_tab_2', '#kt_charts_widget_33_chart_2', chart2Data, chart2Labels, false);

            var chart3Data = [2600, 3200, 2300, 2300, 2000, 3200, 3100, 2900, 3200, 3200, 2600, 3100, 2800, 2400, 2400];
            var chart3Labels = ['Apr 02', 'Apr 03', 'Apr 04', 'Apr 05', 'Apr 06', 'Apr 09', 'Apr 10', 'Apr 12', 'Apr 14', 'Apr 17', 'Apr 18', 'Apr 18', 'Apr 20', 'Apr 22', 'Apr 24'];

            initChart(chart3, '#kt_charts_widget_33_tab_3', '#kt_charts_widget_33_chart_3', chart3Data, chart3Labels, false);

            var chart4Data =  [1800, 1800, 2400, 2400, 3200, 3200, 3000, 2100, 3200, 3300, 2400, 2400, 3000, 3200, 3100];
            var chart4Labels = ['Jun 2021', 'Jul 2021', 'Aug 2021', 'Sep 2021', 'Oct 2021', 'Nov 2021', 'Dec 2021', 'Jan 2022', 'Feb 2022', 'Mar 2022', 'Apr 2022', 'May 2022', 'Jun 2022', 'Jul 2022', 'Aug 2022'];

            initChart(chart4, '#kt_charts_widget_33_tab_4', '#kt_charts_widget_33_chart_4', chart4Data, chart4Labels, false);                
            
            var chart5Data = [3000, 2100, 3300, 3100, 1800, 1800, 2400, 2400, 3100, 3100, 2400, 2400, 3000, 2400, 2800];
            var chart5Labels = ['Sep 2021', 'Oct 2021', 'Nov 2021', 'Dec 2021', 'Jan 2022', 'Feb 2022', 'Mar 2022', 'Apr 2022', 'May 2022', 'Jun 2022', 'Jul 2022', 'Aug 2022', 'Sep 2022', 'Oct 2022', 'Nov 2022'];

            initChart(chart5, '#kt_charts_widget_33_tab_5', '#kt_charts_widget_33_chart_5', chart5Data, chart5Labels, false);

            // Update chart on theme mode change
            KTThemeMode.on("kt.thememode.change", function() {
                if (chart1.rendered) {
                    chart1.self.destroy();
                }

                if (chart2.rendered) {
                    chart2.self.destroy();
                }

                if (chart3.rendered) {
                    chart3.self.destroy();
                }

                if (chart4.rendered) {
                    chart4.self.destroy();
                }

                if (chart5.rendered) {
                    chart5.self.destroy();
                }

                initChart(chart1, '#kt_charts_widget_33_tab_1', '#kt_charts_widget_33_chart_1', chart1Data, chart1Labels, chart1.rendered);
                initChart(chart2, '#kt_charts_widget_33_tab_2', '#kt_charts_widget_33_chart_2', chart2Data, chart2Labels, chart2.rendered);  
                initChart(chart3, '#kt_charts_widget_33_tab_3', '#kt_charts_widget_33_chart_3', chart3Data, chart3Labels, chart3.rendered);
                initChart(chart4, '#kt_charts_widget_33_tab_4', '#kt_charts_widget_33_chart_4', chart4Data, chart4Labels, chart4.rendered); 
                initChart(chart5, '#kt_charts_widget_33_tab_5', '#kt_charts_widget_33_chart_5', chart5Data, chart5Labels, chart5.rendered); 
            });
        }  
    }
}();

// Webpack support
if (typeof module !== 'undefined') {
    module.exports = KTChartsWidget33;
}

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTChartsWidget33.init();
});


 
"use strict";

// Class definition
var KTChartsWidget34 = function () {
    var chart1 = {
        self: null,
        rendered: false
    }; 

    var chart2 = {
        self: null,
        rendered: false
    };

    var chart3 = {
        self: null,
        rendered: false
    };

    var chart4 = {
        self: null,
        rendered: false
    };

    var chart5 = {
        self: null,
        rendered: false
    };
    // Private methods
    var initChart = function(chart, toggle, chartSelector, data, labels, initByDefault) {
        var element = document.querySelector(chartSelector);

        if (!element) {
            return;
        }        
         
        var height = parseInt(KTUtil.css(element, 'height'));
        var color = element.getAttribute('data-kt-chart-color');

        var labelColor = KTUtil.getCssVariableValue('--kt-gray-500');
        var borderColor = KTUtil.getCssVariableValue('--kt-border-dashed-color');
        var baseColor = KTUtil.getCssVariableValue('--kt-' + color);    

        var options = {
            series: [{
                name: 'Earnings',
                data: data
            }],            
            chart: {
                fontFamily: 'inherit',
                type: 'area',
                height: height,
                toolbar: {
                    show: false
                }
            },            
            legend: {
                show: false
            },
            dataLabels: {
                enabled: false
            },
            fill: {
                type: "gradient",
                gradient: {
                    shadeIntensity: 1,
                    opacityFrom: 0.4,
                    opacityTo: 0.2,
                    stops: [15, 120, 100]
                }
            },
            stroke: {
                curve: 'smooth',
                show: true,
                width: 3,
                colors: [baseColor]
            },
            xaxis: {
                categories: labels,
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false
                },
                offsetX: 20,
                tickAmount: 4,
                labels: {
                    rotate: 0,
                    rotateAlways: false,
                    show: false,
                    style: {
                        colors: labelColor,
                        fontSize: '12px'                       
                    }
                },
                crosshairs: {
                    position: 'front',
                    stroke: {
                        color: baseColor,
                        width: 1,
                        dashArray: 3
                    }
                },
                tooltip: {
                    enabled: true,
                    formatter: undefined,
                    offsetY: 0,
                    style: {
                        fontSize: '12px'
                    }
                }
            },
            yaxis: {
                tickAmount: 4,
                max: 4000,
                min: 1000,
                labels: {
                    show: false                    
                }
            },
            states: {
                normal: {
                    filter: {
                        type: 'none',
                        value: 0
                    }
                },
                hover: {
                    filter: {
                        type: 'none',
                        value: 0
                    }
                },
                active: {
                    allowMultipleDataPointsSelection: false,
                    filter: {
                        type: 'none',
                        value: 0
                    }
                }
            },
            tooltip: {
                style: {
                    fontSize: '12px'
                },
                y: {
                    formatter: function (val) {
                        return val + '$';
                    }
                }
            },
            colors: [baseColor],
            grid: {
                borderColor: borderColor,
                strokeDashArray: 3,
                yaxis: {
                    lines: {
                        show: true
                    }
                }
            },
            markers: {
                strokeColor: baseColor,
                strokeWidth: 3
            }
        };

        chart.self = new ApexCharts(element, options);        
        var tab = document.querySelector(toggle);
        
        if (initByDefault === true) {
            // Set timeout to properly get the parent elements width
            setTimeout(function() {
                chart.self.render();  
                chart.rendered = true;
            }, 200);
        }        

        tab.addEventListener('shown.bs.tab', function (event) {
            if (chart.rendered === false) {
                chart.self.render();  
                chart.rendered = true;
            }
        });
    }

    // Public methods
    return {
        init: function () { 
            var chart1Data = [2100, 2800, 2800, 2400, 2400, 1800, 1800, 2400, 2400, 3200, 3200, 2800, 2800, 3250, 3250];
            var chart1Labels = ['10AM', '10.30AM', '11AM', '11.15AM', '11.30AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM', '9PM'];

            initChart(chart1, '#kt_charts_widget_34_tab_1', '#kt_charts_widget_34_chart_1', chart1Data, chart1Labels, true);

            var chart2Data = [2300, 2300, 2000, 3100, 3100, 2800, 2400, 2400, 3100, 2900, 3200, 3200, 2600, 2600, 3200];
            var chart2Labels = ['Apr 01', 'Apr 02', 'Apr 03', 'Apr 04', 'Apr 05', 'Apr 06', 'Apr 07', 'Apr 08', 'Apr 09', 'Apr 10', 'Apr 11', 'Apr 12', 'Apr 13', 'Apr 14', 'Apr 15'];

            initChart(chart2, '#kt_charts_widget_34_tab_2', '#kt_charts_widget_34_chart_2', chart2Data, chart2Labels, false);

            var chart3Data = [2600, 3400, 2300, 2300, 2000, 3100, 3100, 2900, 3200, 3200, 2600, 3100, 2800, 2400, 2400];
            var chart3Labels = ['Apr 02', 'Apr 03', 'Apr 04', 'Apr 05', 'Apr 06', 'Apr 09', 'Apr 10', 'Apr 12', 'Apr 14', 'Apr 17', 'Apr 18', 'Apr 18', 'Apr 20', 'Apr 22', 'Apr 24'];

            initChart(chart3, '#kt_charts_widget_34_tab_3', '#kt_charts_widget_34_chart_3', chart3Data, chart3Labels, false);

            var chart4Data =  [1800, 1800, 2400, 2400, 3100, 3100, 3000, 2100, 3200, 3200, 2400, 2400, 3000, 3200, 3100];
            var chart4Labels = ['Jun 2021', 'Jul 2021', 'Aug 2021', 'Sep 2021', 'Oct 2021', 'Nov 2021', 'Dec 2021', 'Jan 2022', 'Feb 2022', 'Mar 2022', 'Apr 2022', 'May 2022', 'Jun 2022', 'Jul 2022', 'Aug 2022'];

            initChart(chart4, '#kt_charts_widget_34_tab_4', '#kt_charts_widget_34_chart_4', chart4Data, chart4Labels, false);                
            
            var chart5Data = [3000, 2100, 3200, 3200, 1800, 1800, 2400, 2400, 3100, 3100, 2400, 2400, 3000, 2400, 2800];
            var chart5Labels = ['Sep 2021', 'Oct 2021', 'Nov 2021', 'Dec 2021', 'Jan 2022', 'Feb 2022', 'Mar 2022', 'Apr 2022', 'May 2022', 'Jun 2022', 'Jul 2022', 'Aug 2022', 'Sep 2022', 'Oct 2022', 'Nov 2022'];

            initChart(chart5, '#kt_charts_widget_34_tab_5', '#kt_charts_widget_34_chart_5', chart5Data, chart5Labels, false);
            
            // Update chart on theme mode change
            KTThemeMode.on("kt.thememode.change", function() {
                if (chart1.rendered) {
                    chart1.self.destroy();
                }

                if (chart2.rendered) {
                    chart2.self.destroy();
                }

                if (chart3.rendered) {
                    chart3.self.destroy();
                }

                if (chart4.rendered) {
                    chart4.self.destroy();
                }

                if (chart5.rendered) {
                    chart5.self.destroy();
                }

                initChart(chart1, '#kt_charts_widget_34_tab_1', '#kt_charts_widget_34_chart_1', chart1Data, chart1Labels, chart1.rendered);
                initChart(chart2, '#kt_charts_widget_34_tab_2', '#kt_charts_widget_34_chart_2', chart2Data, chart2Labels, chart2.rendered);  
                initChart(chart3, '#kt_charts_widget_34_tab_3', '#kt_charts_widget_34_chart_3', chart3Data, chart3Labels, chart3.rendered);
                initChart(chart4, '#kt_charts_widget_34_tab_4', '#kt_charts_widget_34_chart_4', chart4Data, chart4Labels, chart4.rendered); 
                initChart(chart5, '#kt_charts_widget_34_tab_5', '#kt_charts_widget_34_chart_5', chart5Data, chart5Labels, chart5.rendered); 
            });
        }   
    }
}();

// Webpack support
if (typeof module !== 'undefined') {
    module.exports = KTChartsWidget34;
}

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTChartsWidget34.init();
});


 
"use strict";

// Class definition
var KTChartsWidget35 = function () {
    var chart1 = {
        self: null,
        rendered: false
    }; 

    var chart2 = {
        self: null,
        rendered: false
    };

    var chart3 = {
        self: null,
        rendered: false
    };

    var chart4 = {
        self: null,
        rendered: false
    };

    var chart5 = {
        self: null,
        rendered: false
    };
    

    // Private methods
    var initChart = function(chart, toggle, chartSelector, data, labels, initByDefault) {
        var element = document.querySelector(chartSelector);       

        if (!element) {
            return;
        }     
         
        var height = parseInt(KTUtil.css(element, 'height'));
        var color = element.getAttribute('data-kt-chart-color');        
        
        var labelColor = KTUtil.getCssVariableValue('--kt-gray-500');
        var borderColor = KTUtil.getCssVariableValue('--kt-border-dashed-color');
        var baseColor = KTUtil.getCssVariableValue('--kt-' + color);    

        var options = {
            series: [{
                name: 'Earnings',
                data: data
            }],            
            chart: {
                fontFamily: 'inherit',
                type: 'area',
                height: height,
                toolbar: {
                    show: false
                }
            },            
            legend: {
                show: false
            },
            dataLabels: {
                enabled: false
            },
            fill: {
                type: "gradient",
                gradient: {
                    shadeIntensity: 1,
                    opacityFrom: 0.4,
                    opacityTo: 0.2,
                    stops: [15, 120, 100]
                }
            },
            stroke: {
                curve: 'smooth',
                show: true,
                width: 3,
                colors: [baseColor]
            },
            xaxis: {
                categories: labels,
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false
                },
                offsetX: 20,
                tickAmount: 4,
                labels: {
                    rotate: 0,
                    rotateAlways: false,
                    show: false,
                    style: {
                        colors: labelColor,
                        fontSize: '12px'                       
                    }
                },
                crosshairs: {
                    position: 'front',
                    stroke: {
                        color: baseColor,
                        width: 1,
                        dashArray: 3
                    }
                },
                tooltip: {
                    enabled: true,
                    formatter: undefined,
                    offsetY: 0,
                    style: {
                        fontSize: '12px'
                    }
                }
            },
            yaxis: {
                tickAmount: 4,
                max: 4000,
                min: 1000,
                labels: {
                    show: false                    
                }
            },
            states: {
                normal: {
                    filter: {
                        type: 'none',
                        value: 0
                    }
                },
                hover: {
                    filter: {
                        type: 'none',
                        value: 0
                    }
                },
                active: {
                    allowMultipleDataPointsSelection: false,
                    filter: {
                        type: 'none',
                        value: 0
                    }
                }
            },
            tooltip: {
                style: {
                    fontSize: '12px'
                },
                y: {
                    formatter: function (val) {
                        return val + '$';
                    }
                }
            },
            colors: [baseColor],
            grid: {
                borderColor: borderColor,
                strokeDashArray: 3,
                yaxis: {
                    lines: {
                        show: true
                    }
                }
            },
            markers: {
                strokeColor: baseColor,
                strokeWidth: 3
            }
        };

        chart.self = new ApexCharts(element, options);        
        var tab = document.querySelector(toggle);
        
        if (initByDefault === true) {
            // Set timeout to properly get the parent elements width
            setTimeout(function() {
                chart.self.render();  
                chart.rendered = true;
            }, 200);
        }        

        tab.addEventListener('shown.bs.tab', function (event) {
            if (chart.rendered === false) {
                chart.self.render();  
                chart.rendered = true;
            }
        });
    }

    // Public methods
    return {
        init: function () {   
            var chart1Data = [2100, 3100, 3100, 2400, 2400, 1800, 1800, 2400, 2400, 3200, 3200, 2800, 2800, 3250, 3250];
            var chart1Labels = ['10AM', '10.30AM', '11AM', '11.15AM', '11.30AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM', '9PM'];

            initChart(chart1, '#kt_charts_widget_35_tab_1', '#kt_charts_widget_35_chart_1', chart1Data, chart1Labels, true);

            var chart2Data = [2300, 2300, 2000, 3200, 3200, 2800, 2400, 2400, 3100, 2900, 3200, 3200, 2600, 2600, 3200];
            var chart2Labels = ['Apr 01', 'Apr 02', 'Apr 03', 'Apr 04', 'Apr 05', 'Apr 06', 'Apr 07', 'Apr 08', 'Apr 09', 'Apr 10', 'Apr 11', 'Apr 12', 'Apr 13', 'Apr 14', 'Apr 15'];

            initChart(chart2, '#kt_charts_widget_35_tab_2', '#kt_charts_widget_35_chart_2', chart2Data, chart2Labels, false);

            var chart3Data = [2600, 3200, 2300, 2300, 2000, 3200, 3100, 2900, 3400, 3400, 2600, 3200, 2800, 2400, 2400];
            var chart3Labels = ['Apr 02', 'Apr 03', 'Apr 04', 'Apr 05', 'Apr 06', 'Apr 09', 'Apr 10', 'Apr 12', 'Apr 14', 'Apr 17', 'Apr 18', 'Apr 18', 'Apr 20', 'Apr 22', 'Apr 24'];

            initChart(chart3, '#kt_charts_widget_35_tab_3', '#kt_charts_widget_35_chart_3', chart3Data, chart3Labels, false);

            var chart4Data =  [1800, 1800, 2400, 2400, 3200, 3200, 3000, 2100, 3200, 3200, 2400, 2400, 3000, 3200, 3100];
            var chart4Labels = ['Jun 2021', 'Jul 2021', 'Aug 2021', 'Sep 2021', 'Oct 2021', 'Nov 2021', 'Dec 2021', 'Jan 2022', 'Feb 2022', 'Mar 2022', 'Apr 2022', 'May 2022', 'Jun 2022', 'Jul 2022', 'Aug 2022'];

            initChart(chart4, '#kt_charts_widget_35_tab_4', '#kt_charts_widget_35_chart_4', chart4Data, chart4Labels, false);                
            
            var chart5Data = [3200, 2100, 3200, 3200, 3200, 3500, 3000, 2400, 3250, 2400, 2400, 3250, 3000, 2400, 2800];
            var chart5Labels = ['Sep 2021', 'Oct 2021', 'Nov 2021', 'Dec 2021', 'Jan 2022', 'Feb 2022', 'Mar 2022', 'Apr 2022', 'May 2022', 'Jun 2022', 'Jul 2022', 'Aug 2022', 'Sep 2022', 'Oct 2022', 'Nov 2022'];

            initChart(chart5, '#kt_charts_widget_35_tab_5', '#kt_charts_widget_35_chart_5', chart5Data, chart5Labels, false);

            // Update chart on theme mode change
            KTThemeMode.on("kt.thememode.change", function() {
                if (chart1.rendered) {
                    chart1.self.destroy();
                }

                if (chart2.rendered) {
                    chart2.self.destroy();
                }

                if (chart3.rendered) {
                    chart3.self.destroy();
                }

                if (chart4.rendered) {
                    chart4.self.destroy();
                }

                if (chart5.rendered) {
                    chart5.self.destroy();
                }

                initChart(chart1, '#kt_charts_widget_35_tab_1', '#kt_charts_widget_35_chart_1', chart1Data, chart1Labels, chart1.rendered);
                initChart(chart2, '#kt_charts_widget_35_tab_2', '#kt_charts_widget_35_chart_2', chart2Data, chart2Labels, chart2.rendered);  
                initChart(chart3, '#kt_charts_widget_35_tab_3', '#kt_charts_widget_35_chart_3', chart3Data, chart3Labels, chart3.rendered);
                initChart(chart4, '#kt_charts_widget_35_tab_4', '#kt_charts_widget_35_chart_4', chart4Data, chart4Labels, chart4.rendered); 
                initChart(chart5, '#kt_charts_widget_35_tab_5', '#kt_charts_widget_35_chart_5', chart5Data, chart5Labels, chart5.rendered); 
            });
        }   
    }
}();

// Webpack support
if (typeof module !== 'undefined') {
    module.exports = KTChartsWidget35;
}

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTChartsWidget35.init();
});


 
"use strict";

// Class definition
var KTChartsWidget36 = function () {
    var chart = {
        self: null,
        rendered: false
    };

    // Private methods
    var initChart = function(chart) {
        var element = document.getElementById("kt_charts_widget_36");

        if (!element) {
            return;
        }
        
        var height = parseInt(KTUtil.css(element, 'height'));
        var labelColor = KTUtil.getCssVariableValue('--kt-gray-500');
        var borderColor = KTUtil.getCssVariableValue('--kt-border-dashed-color');
        var baseprimaryColor = KTUtil.getCssVariableValue('--kt-primary');
        var lightprimaryColor = KTUtil.getCssVariableValue('--kt-primary');
        var basesuccessColor = KTUtil.getCssVariableValue('--kt-success');
        var lightsuccessColor = KTUtil.getCssVariableValue('--kt-success');

        var options = {
            series: [{
                name: 'Inbound Calls',
                data: [65, 80, 80, 60, 60, 45, 45, 80, 80, 70, 70, 90, 90, 80, 80, 80, 60, 60, 50]
            }, {
                name: 'Outbound Calls',
                data: [90, 110, 110, 95, 95, 85, 85, 95, 95, 115, 115, 100, 100, 115, 115, 95, 95, 85, 85]
            }],
            chart: {
                fontFamily: 'inherit',
                type: 'area',
                height: height,
                toolbar: {
                    show: false
                }
            },
            plotOptions: {

            },
            legend: {
                show: false
            },
            dataLabels: {
                enabled: false
            },
            fill: {
                type: "gradient",
                gradient: {
                    shadeIntensity: 1,
                    opacityFrom: 0.4,
                    opacityTo: 0.2,
                    stops: [15, 120, 100]
                }
            },
            stroke: {
                curve: 'smooth',
                show: true,
                width: 3,
                colors: [baseprimaryColor, basesuccessColor]
            },
            xaxis: {
                categories: ['', '8 AM', '81 AM', '9 AM', '10 AM', '11 AM', '12 PM', '13 PM', '14 PM', '15 PM', '16 PM', '17 PM', '18 PM', '18:20 PM', '18:20 PM', '19 PM', '20 PM', '21 PM', ''],
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false
                },
                tickAmount: 6,
                labels: {
                    rotate: 0,
                    rotateAlways: true,
                    style: {
                        colors: labelColor,
                        fontSize: '12px'
                    }
                },
                crosshairs: {
                    position: 'front',
                    stroke: {
                        color: [baseprimaryColor, basesuccessColor],
                        width: 1,
                        dashArray: 3
                    }
                },
                tooltip: {
                    enabled: true,
                    formatter: undefined,
                    offsetY: 0,
                    style: {
                        fontSize: '12px'
                    }
                }
            },
            yaxis: {
                max: 120,
                min: 30,
                tickAmount: 6,
                labels: {
                    style: {
                        colors: labelColor,
                        fontSize: '12px'
                    } 
                }
            },
            states: {
                normal: {
                    filter: {
                        type: 'none',
                        value: 0
                    }
                },
                hover: {
                    filter: {
                        type: 'none',
                        value: 0
                    }
                },
                active: {
                    allowMultipleDataPointsSelection: false,
                    filter: {
                        type: 'none',
                        value: 0
                    }
                }
            },
            tooltip: {
                style: {
                    fontSize: '12px'
                } 
            },
            colors: [lightprimaryColor, lightsuccessColor],
            grid: {
                borderColor: borderColor,
                strokeDashArray: 4,
                yaxis: {
                    lines: {
                        show: true
                    }
                }
            },
            markers: {
                strokeColor: [baseprimaryColor, basesuccessColor],
                strokeWidth: 3
            }
        };

        chart.self = new ApexCharts(element, options);

        // Set timeout to properly get the parent elements width
        setTimeout(function() {
            chart.self.render();
            chart.rendered = true;
        }, 200);      
    }

    // Public methods
    return {
        init: function () {
            initChart(chart);

            // Update chart on theme mode change
            KTThemeMode.on("kt.thememode.change", function() {                
                if (chart.rendered) {
                    chart.self.destroy();
                }

                initChart(chart);
            });
        }   
    }
}();

// Webpack support
if (typeof module !== 'undefined') {
    module.exports = KTChartsWidget36;
}

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTChartsWidget36.init();
});

"use strict";

// Class definition
var KTChartsWidget37 = function () {
    var chart1 = {
        self: null,
        rendered: false
    }; 

    var chart2 = {
        self: null,
        rendered: false
    };

    var chart3 = {
        self: null,
        rendered: false
    };

    var chart4 = {
        self: null,
        rendered: false
    };

    // Private methods
    var initChart = function(chart, toggle, chartSelector, data, labels, initByDefault) {
        var element = document.querySelector(chartSelector);

        if (!element) {
            return;
        }
        
        var height = parseInt(KTUtil.css(element, 'height'));
        var color = element.getAttribute('data-kt-chart-color');         
        
        var labelColor = KTUtil.getCssVariableValue('--kt-gray-500');
        var borderColor = KTUtil.getCssVariableValue('--kt-border-dashed-color');
        var baseColor = KTUtil.getCssVariableValue('--kt-' + color);    

        var options = {
            series: [{
                name: 'Earnings',
                data: data
            }],            
            chart: {
                fontFamily: 'inherit',
                type: 'area',
                height: height,
                toolbar: {
                    show: false
                }
            },            
            legend: {
                show: false
            },
            dataLabels: {
                enabled: false
            },
            fill: {
                type: "gradient",
                gradient: {
                    shadeIntensity: 1,
                    opacityFrom: 0.4,
                    opacityTo: 0.2,
                    stops: [15, 120, 100]
                }
            },
            stroke: {
                curve: 'smooth',
                show: true,
                width: 3,
                colors: [baseColor]
            },
            xaxis: {
                categories: labels,
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false
                },
                offsetX: 20,
                tickAmount: 4,
                labels: {
                    rotate: 0,
                    rotateAlways: false,
                    show: false,
                    style: {
                        colors: labelColor,
                        fontSize: '12px'                       
                    }
                },
                crosshairs: {
                    position: 'front',
                    stroke: {
                        color: baseColor,
                        width: 1,
                        dashArray: 3
                    }
                },
                tooltip: {
                    enabled: true,
                    formatter: undefined,
                    offsetY: 0,
                    style: {
                        fontSize: '12px'
                    }
                }
            },
            yaxis: {
                tickAmount: 4,
                max: 4000,
                min: 1000,
                labels: {
                    show: false                    
                }
            },
            states: {
                normal: {
                    filter: {
                        type: 'none',
                        value: 0
                    }
                },
                hover: {
                    filter: {
                        type: 'none',
                        value: 0
                    }
                },
                active: {
                    allowMultipleDataPointsSelection: false,
                    filter: {
                        type: 'none',
                        value: 0
                    }
                }
            },
            tooltip: {
                style: {
                    fontSize: '12px'
                },
                y: {
                    formatter: function (val) {
                        return val + '$';
                    }
                }
            },
            colors: [baseColor],
            grid: {
                borderColor: borderColor,
                strokeDashArray: 3,
                yaxis: {
                    lines: {
                        show: true
                    }
                }
            },
            markers: {
                strokeColor: baseColor,
                strokeWidth: 3
            }
        };

        chart.self = new ApexCharts(element, options);        
        var tab = document.querySelector(toggle);
        
        if (initByDefault === true) {
            // Set timeout to properly get the parent elements width
            setTimeout(function() {
                chart.self.render();  
                chart.rendered = true;
            }, 200);
        }        

        tab.addEventListener('shown.bs.tab', function (event) {
            if (chart.rendered === false) {
                chart.self.render();  
                chart.rendered = true;
            }
        });
    }

    // Public methods
    return {
        init: function () { 
            var chart1Data = [2100, 3200, 3200, 2400, 2400, 1800, 1800, 2400, 2400, 3200, 3200, 3000, 3000, 3250, 3250];
            var chart1Labels = ['10AM', '10.30AM', '11AM', '11.15AM', '11.30AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM', '9PM'];

            initChart(chart1, '#kt_charts_widget_37_tab_1', '#kt_charts_widget_37_chart_1', chart1Data, chart1Labels, true);

            var chart2Data = [2300, 2300, 2000, 3200, 3200, 2800, 2400, 2400, 3100, 2900, 3100, 3100, 2600, 2600, 3200];
            var chart2Labels = ['Apr 01', 'Apr 02', 'Apr 03', 'Apr 04', 'Apr 05', 'Apr 06', 'Apr 07', 'Apr 08', 'Apr 09', 'Apr 10', 'Apr 11', 'Apr 12', 'Apr 13', 'Apr 14', 'Apr 15'];

            initChart(chart2, '#kt_charts_widget_37_tab_2', '#kt_charts_widget_37_chart_2', chart2Data, chart2Labels, false);

            var chart3Data = [2600, 3200, 2300, 2300, 2000, 3200, 3100, 2900, 3200, 3200, 2600, 3100, 2800, 2400, 2400];
            var chart3Labels = ['Apr 02', 'Apr 03', 'Apr 04', 'Apr 05', 'Apr 06', 'Apr 09', 'Apr 10', 'Apr 12', 'Apr 14', 'Apr 17', 'Apr 18', 'Apr 18', 'Apr 20', 'Apr 22', 'Apr 24'];

            initChart(chart3, '#kt_charts_widget_37_tab_3', '#kt_charts_widget_37_chart_3', chart3Data, chart3Labels, false);

            var chart4Data =  [1800, 1800, 2400, 2400, 3200, 3200, 3000, 2100, 3200, 3300, 2400, 2400, 3000, 3200, 3100];
            var chart4Labels = ['Jun 2021', 'Jul 2021', 'Aug 2021', 'Sep 2021', 'Oct 2021', 'Nov 2021', 'Dec 2021', 'Jan 2022', 'Feb 2022', 'Mar 2022', 'Apr 2022', 'May 2022', 'Jun 2022', 'Jul 2022', 'Aug 2022'];

            initChart(chart4, '#kt_charts_widget_37_tab_4', '#kt_charts_widget_37_chart_4', chart4Data, chart4Labels, false);  
            
            // Update chart on theme mode change
            KTThemeMode.on("kt.thememode.change", function() {
                if (chart1.rendered) {
                    chart1.self.destroy();
                }

                if (chart2.rendered) {
                    chart2.self.destroy();
                }

                if (chart3.rendered) {
                    chart3.self.destroy();
                }

                if (chart4.rendered) {
                    chart4.self.destroy();
                } 

                initChart(chart1, '#kt_charts_widget_37_tab_1', '#kt_charts_widget_37_chart_1', chart1Data, chart1Labels, chart1.rendered);
                initChart(chart2, '#kt_charts_widget_37_tab_2', '#kt_charts_widget_37_chart_2', chart2Data, chart2Labels, chart2.rendered);  
                initChart(chart3, '#kt_charts_widget_37_tab_3', '#kt_charts_widget_37_chart_3', chart3Data, chart3Labels, chart3.rendered);
                initChart(chart4, '#kt_charts_widget_37_tab_4', '#kt_charts_widget_37_chart_4', chart4Data, chart4Labels, chart4.rendered);                 
            });
        }   
    }
}();

// Webpack support
if (typeof module !== 'undefined') {
    module.exports = KTChartsWidget37;
}

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTChartsWidget37.init();
});


 
"use strict";

// Class definition
var KTChartsWidget38 = function () {
    var chart = {
        self: null,
        rendered: false
    };

    // Private methods
    var initChart = function() {
        var element = document.getElementById("kt_charts_widget_38_chart");

        if (!element) {
            return;
        }
        
        var height = parseInt(KTUtil.css(element, 'height'));
        var labelColor = KTUtil.getCssVariableValue('--kt-gray-900');
        var borderColor = KTUtil.getCssVariableValue('--kt-border-dashed-color');    

        var options = {
            series: [{
                name: 'LOI Issued',
                data: [54, 42, 75, 110, 23, 87, 50]
            }],
            chart: {
                fontFamily: 'inherit',
                type: 'bar',
                height: height,
                toolbar: {
                    show: false
                }              
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: ['28%'],
                    borderRadius: 5,                     
                    dataLabels: {
                        position: "top" // top, center, bottom
                    },
                    startingShape: 'flat'
                },
            },
            legend: {
                show: false
            },
            dataLabels: {
                enabled: true, 
                offsetY: -28,                                             
                style: {
                    fontSize: '13px',
                    colors: [labelColor]
                },
                    formatter: function(val) {
                        return val;// + "H";
                    }                           
            },
            stroke: {
                show: true,
                width: 2,
                colors: ['transparent']
            },
            xaxis: {
                categories: ['E2E', 'IMC', 'SSMC', 'SSBD', 'ICCD', 'PAN', 'SBN'],
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false
                },
                labels: {
                    style: {
                        colors: KTUtil.getCssVariableValue('--kt-gray-500'),
                        fontSize: '13px'
                    }                  
                },
                crosshairs: {
                    fill: {         
                        gradient: {         
                            opacityFrom: 0,
                            opacityTo: 0
                        }
                    }
                }
            },
            yaxis: {
                labels: {
                    style: {
                        colors: KTUtil.getCssVariableValue('--kt-gray-500'),
                        fontSize: '13px'
                    },
                    formatter: function(val) {
                        return val + "M";
                    } 
                }
            },
            fill: {
                opacity: 1
            },
            states: {
                normal: {
                    filter: {
                        type: 'none',
                        value: 0
                    }
                },
                hover: {
                    filter: {
                        type: 'none',
                        value: 0
                    }
                },
                active: {
                    allowMultipleDataPointsSelection: false,
                    filter: {
                        type: 'none',
                        value: 0
                    }
                }
            },
            tooltip: {
                style: {
                    fontSize: '12px'
                },
                y: {
                    formatter: function (val) {
                        return  + val + 'M' 
                    }
                } 
            },
            colors: [KTUtil.getCssVariableValue('--kt-primary'), KTUtil.getCssVariableValue('--kt-primary-light')],
            grid: {
                borderColor: borderColor,
                strokeDashArray: 4,
                yaxis: {
                    lines: {
                        show: true
                    }
                }
            }
        };

        chart.self = new ApexCharts(element, options);

        // Set timeout to properly get the parent elements width
        setTimeout(function() {
            chart.self.render();
            chart.rendered = true;
        }, 200);
    }

    // Public methods
    return {
        init: function () {
            initChart();

            // Update chart on theme mode change
            KTThemeMode.on("kt.thememode.change", function() {                
                if (chart.rendered) {
                    chart.self.destroy();
                }

                initChart();
            });
        }        
    }
}();

// Webpack support
if (typeof module !== 'undefined') {
    module.exports = KTChartsWidget38;
}

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTChartsWidget38.init();
});


 
"use strict";

// Class definition
var KTChartsWidget39 = (function () {
	// Private methods
	var initChart = function () {
		// Check if amchart library is included
		if (typeof am5 === "undefined") {
			return;
		}

		var element = document.querySelector('#kt_charts_widget_39_chart');

		if ( !element ) {
			return;
		}

        var root;

		var init = function() {
			// Create root element
			// https://www.amcharts.com/docs/v5/getting-started/#Root_element
			root = am5.Root.new(element);

			if ( !root ) {
				return;
			}

			// Set themes
			// https://www.amcharts.com/docs/v5/concepts/themes/
			root.setThemes([am5themes_Animated.new(root)]);

			// Create chart
			// https://www.amcharts.com/docs/v5/charts/radar-chart/
			var chart = root.container.children.push(
				am5radar.RadarChart.new(root, {
					panX: false,
					panY: false,
					wheelX: "panX",
					wheelY: "zoomX",
				})
			);

			// Create axes and their renderers
			// https://www.amcharts.com/docs/v5/charts/radar-chart/#Adding_axes
			var xRenderer = am5radar.AxisRendererCircular.new(root, {});
			xRenderer.labels.template.setAll({
				radius: 10
			});

			xRenderer.grid.template.setAll({
				stroke: am5.color(KTUtil.getCssVariableValue("--kt-gray-700"))
			});

			var yRenderer = am5radar.AxisRendererRadial.new(root, {
				minGridDistance: 20
			});	
			
			yRenderer.grid.template.setAll({
				stroke: am5.color(KTUtil.getCssVariableValue("--kt-gray-700"))
			});

			var xAxis = chart.xAxes.push(
				am5xy.CategoryAxis.new(root, {
					maxDeviation: 0,
					categoryField: "category",
					renderer: xRenderer,
					tooltip: am5.Tooltip.new(root, {}),
				})
			);			

			var yAxis = chart.yAxes.push(
				am5xy.ValueAxis.new(root, {
					min: 0,
					max: 10,
					renderer: yRenderer
				})
			);

			xRenderer.labels.template.setAll({
				fontSize: 11,
				fill: am5.color(KTUtil.getCssVariableValue("--kt-gray-800")),
			});

			yRenderer.labels.template.setAll({
				fontSize: 11,
				fill: am5.color(KTUtil.getCssVariableValue("--kt-gray-800")),
			});

			//yAxis.get("renderer").labels.template.set("forceHidden", true);

			// Create series
			// https://www.amcharts.com/docs/v5/charts/radar-chart/#Adding_series
			var series = chart.series.push(
				am5radar.RadarColumnSeries.new(root, {
					xAxis: xAxis,
					yAxis: yAxis,
					valueYField: "value",
					categoryXField: "category",
				})
			);

			series.columns.template.setAll({
				tooltipText: "{categoryX}: {valueY}",
				templateField: "columnSettings",
				strokeOpacity: 0,
				width: am5.p100,
			});

			// Set data
			// https://www.amcharts.com/docs/v5/charts/radar-chart/#Setting_data
			var data = [
				{
					category: "Spain",
					value: 5,
					columnSettings: {
						fill: chart.get("colors").next(),
					},
				},
				{
					category: "Spain",
					value: 4,
					columnSettings: {
						fill: chart.get("colors").next(),
					},
				},
				{
					category: "United States",
					value: 9,
					columnSettings: {
						fill: chart.get("colors").next(),
					},
				},
				{
					category: "Italy",
					value: 7,
					columnSettings: {
						fill: chart.get("colors").next(),
					},
				},
				{
					category: "France",
					value: 8,
					columnSettings: {
						fill: chart.get("colors").next(),
					},
				},
				{
					category: "Norway",
					value: 4,
					columnSettings: {
						fill: chart.get("colors").next(),
					},
				},
				{
					category: "Brasil",
					value: 7,
					columnSettings: {
						fill: chart.get("colors").next(),
					},
				},
				{
					category: "Canada",
					value: 5,
					columnSettings: {
						fill: chart.get("colors").next(),
					},
				},
			];

			series.data.setAll(data);
			xAxis.data.setAll(data);

			// Animate chart
			// https://www.amcharts.com/docs/v5/concepts/animations/#Initial_animation
			series.appear(1000);
			chart.appear(1000, 100);
		}

		// On amchart ready
		am5.ready(function () {
			init();
		}); // end am5.ready()

		// Update chart on theme mode change
		KTThemeMode.on("kt.thememode.change", function() {     
			// Destroy chart
			root.dispose();

			// Reinit chart
			init();
		});
	};

	// Public methods
	return {
		init: function () {
			initChart();
		},
	};
})();

// Webpack support
if (typeof module !== "undefined") {
	module.exports = KTChartsWidget39;
}

// On document ready
KTUtil.onDOMContentLoaded(function () {
	KTChartsWidget39.init();
});

"use strict";

// Class definition
var KTChartsWidget4 = function () {
    var chart = {
        self: null,
        rendered: false
    };

    // Private methods
    var initChart = function() {
        var element = document.getElementById("kt_charts_widget_4");

        if (!element) {
            return;
        }
        
        var height = parseInt(KTUtil.css(element, 'height'));
        var labelColor = KTUtil.getCssVariableValue('--kt-gray-500');
        var borderColor = KTUtil.getCssVariableValue('--kt-border-dashed-color');
        var baseColor = KTUtil.getCssVariableValue('--kt-primary');
        var lightColor = KTUtil.getCssVariableValue('--kt-primary');

        var options = {
            series: [{
                name: 'Sales',
                data: [34.5, 34.5, 35, 35, 35.5, 35.5, 35, 35, 35.5, 35.5, 35, 35, 34.5, 34.5, 35, 35, 35.5, 35.5, 35]
            }],
            chart: {
                fontFamily: 'inherit',
                type: 'area',
                height: height,
                toolbar: {
                    show: false
                }
            },
            plotOptions: {

            },
            legend: {
                show: false
            },
            dataLabels: {
                enabled: false
            },
            fill: {
                type: "gradient",
                gradient: {
                    shadeIntensity: 1,
                    opacityFrom: 0.4,
                    opacityTo: 0,
                    stops: [0, 80, 100]
                }
            },
            stroke: {
                curve: 'smooth',
                show: true,
                width: 3,
                colors: [baseColor]
            },
            xaxis: {
                categories: ['', 'Apr 02', 'Apr 03', 'Apr 04', 'Apr 05', 'Apr 06', 'Apr 07', 'Apr 08', 'Apr 09', 'Apr 10', 'Apr 11', 'Apr 12', 'Apr 13', 'Apr 14', 'Apr 17', 'Apr 18', 'Apr 19', 'Apr 21', ''],
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false
                },
                tickAmount: 6,
                labels: {
                    rotate: 0,
                    rotateAlways: true,
                    style: {
                        colors: labelColor,
                        fontSize: '12px'
                    }
                },
                crosshairs: {
                    position: 'front',
                    stroke: {
                        color: baseColor,
                        width: 1,
                        dashArray: 3
                    }
                },
                tooltip: {
                    enabled: true,
                    formatter: undefined,
                    offsetY: 0,
                    style: {
                        fontSize: '12px'
                    }
                }
            },
            yaxis: {
                max: 36.3,
                min: 33,
                tickAmount: 6,
                labels: {
                    style: {
                        colors: labelColor,
                        fontSize: '12px'
                    },
                    formatter: function (val) {
                        return '$' + parseInt(10 * val)
                    }
                }
            },
            states: {
                normal: {
                    filter: {
                        type: 'none',
                        value: 0
                    }
                },
                hover: {
                    filter: {
                        type: 'none',
                        value: 0
                    }
                },
                active: {
                    allowMultipleDataPointsSelection: false,
                    filter: {
                        type: 'none',
                        value: 0
                    }
                }
            },
            tooltip: {
                style: {
                    fontSize: '12px'
                },
                y: {
                    formatter: function (val) {
                        return '$' + parseInt(10 * val)
                    }
                }
            },
            colors: [lightColor],
            grid: {
                borderColor: borderColor,
                strokeDashArray: 4,
                yaxis: {
                    lines: {
                        show: true
                    }
                }
            },
            markers: {
                strokeColor: baseColor,
                strokeWidth: 3
            }
        };

        chart.self = new ApexCharts(element, options);

        // Set timeout to properly get the parent elements width
        setTimeout(function() {
            chart.self.render();
            chart.rendered = true;
        }, 200);          
    }

    // Public methods
    return {
        init: function () {
            initChart();

            // Update chart on theme mode change
            KTThemeMode.on("kt.thememode.change", function() {                
                if (chart.rendered) {
                    chart.self.destroy();
                }

                initChart(chart);
            });
        }   
    }
}();

// Webpack support
if (typeof module !== 'undefined') {
    module.exports = KTChartsWidget4;
}

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTChartsWidget4.init();
});

"use strict";

// Class definition
var KTChartsWidget5 = function () {
    var chart = {
        self: null,
        rendered: false
    };

    // Private methods
    var initChart = function(chart) {
        var element = document.getElementById("kt_charts_widget_5"); 

        if (!element) {
            return;
        }
        
        var borderColor = KTUtil.getCssVariableValue('--kt-border-dashed-color');
        
        var options = {
            series: [{
                data: [15, 12, 10, 8, 7, 4, 3],
                show: false                                                                              
            }],
            chart: {
                type: 'bar',
                height: 350,
                toolbar: {
                    show: false
                }                             
            },                    
            plotOptions: {
                bar: {
                    borderRadius: 4,
                    horizontal: true,
                    distributed: true,
                    barHeight: 23                   
                }
            },
            dataLabels: {
                enabled: false                               
            },             
            legend: {
                show: false
            },                               
            colors: ['#3E97FF', '#F1416C', '#50CD89', '#FFC700', '#7239EA', '#50CDCD', '#3F4254'],                                                                      
            xaxis: {
                categories: ['Phones', 'Laptops', 'Headsets', 'Games', 'Keyboardsy', 'Monitors', 'Speakers'],
                labels: {
                    formatter: function (val) {
                      return val + "K"
                    },
                    style: {
                        colors: KTUtil.getCssVariableValue('--kt-gray-400'),
                        fontSize: '14px',
                        fontWeight: '600',
                        align: 'left'                                              
                    }                  
                },
                axisBorder: {
					show: false
				}                         
            },
            yaxis: {
                labels: {                   
                    style: {
                        colors: KTUtil.getCssVariableValue('--kt-gray-800'),
                        fontSize: '14px',
                        fontWeight: '600'                                                                 
                    },
                    offsetY: 2,
                    align: 'left' 
                }              
            },
            grid: {                
                borderColor: borderColor,                
                xaxis: {
                    lines: {
                        show: true
                    }
                },   
                yaxis: {
                    lines: {
                        show: false  
                    }
                },
                strokeDashArray: 4              
            }                                 
        };  
          
        chart.self = new ApexCharts(element, options);

        // Set timeout to properly get the parent elements width
        setTimeout(function() {
            chart.self.render();
            chart.rendered = true;
        }, 200); 
    }

    // Public methods
    return {
        init: function () {
            initChart(chart);

            // Update chart on theme mode change
            KTThemeMode.on("kt.thememode.change", function() {                
                if (chart.rendered) {
                    chart.self.destroy();
                }

                initChart(chart);
            });
        }   
    }
}();

// Webpack support
if (typeof module !== 'undefined') {
    module.exports = KTChartsWidget5;
}

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTChartsWidget5.init();
});


 
"use strict";

// Class definition
var KTChartsWidget6 = function () {
    var chart = {
        self: null,
        rendered: false
    };

    // Private methods
    var initChart = function(chart) {
        var element = document.getElementById("kt_charts_widget_6"); 

        if (!element) {
            return;
        }
        
        var labelColor = KTUtil.getCssVariableValue('--kt-gray-800');    
        var borderColor = KTUtil.getCssVariableValue('--kt-border-dashed-color');
        var maxValue = 18;
        
        var options = {
            series: [{
                name: 'Sales',
                data: [15, 12, 10, 8, 7]                                                                                                             
            }],           
            chart: {
                fontFamily: 'inherit',
                type: 'bar',
                height: 350,
                toolbar: {
                    show: false
                }                             
            },                    
            plotOptions: {
                bar: {
                    borderRadius: 8,
                    horizontal: true,
                    distributed: true,
                    barHeight: 50,
                    dataLabels: {
				        position: 'bottom' // use 'bottom' for left and 'top' for right align(textAnchor)
			        }                                                       
                }
            },
            dataLabels: {  // Docs: https://apexcharts.com/docs/options/datalabels/
                enabled: true,              
                textAnchor: 'start',  
                offsetX: 0,                 
                formatter: function (val, opts) {
                    var val = val * 1000;
                    var Format = wNumb({
                        //prefix: '$',
                        //suffix: ',-',
                        thousand: ','
                    });

                    return Format.to(val);
                },
                style: {
                    fontSize: '14px',
                    fontWeight: '600',
                    align: 'left',                                                            
                }                                       
            },             
            legend: {
                show: false
            },                               
            colors: ['#3E97FF', '#F1416C', '#50CD89', '#FFC700', '#7239EA'],                                                                      
            xaxis: {
                categories: ["ECR - 90%", "FGI - 82%", 'EOQ - 75%', 'FMG - 60%', 'PLG - 50%'],
                labels: {
                    formatter: function (val) {
                        return val + "K"
                    },
                    style: {
                        colors: [labelColor],
                        fontSize: '14px',
                        fontWeight: '600',
                        align: 'left'                                              
                    }                  
                },
                axisBorder: {
					show: false
				}                         
            },
            yaxis: {
                labels: {       
                    formatter: function (val, opt) {
                        if (Number.isInteger(val)) {
                            var percentage = parseInt(val * 100 / maxValue) . toString(); 
                            return val + ' - ' + percentage + '%';
                        } else {
                            return val;
                        }
                    },            
                    style: {
                        colors: labelColor,
                        fontSize: '14px',
                        fontWeight: '600'                                                                 
                    },
                    offsetY: 2,
                    align: 'left' 
                }           
            },
            grid: {                
                borderColor: borderColor,                
                xaxis: {
                    lines: {
                        show: true
                    }
                },   
                yaxis: {
                    lines: {
                        show: false  
                    }
                },
                strokeDashArray: 4              
            },
            tooltip: {
                style: {
                    fontSize: '12px'
                },
                y: {
                    formatter: function (val) {
                        return val + 'K';
                    }
                }
            }                                 
        };  
          
        chart.self = new ApexCharts(element, options);

        // Set timeout to properly get the parent elements width
        setTimeout(function() {
            chart.self.render();
            chart.rendered = true;
        }, 200);         
    }

    // Public methods
    return {
        init: function () {
            initChart(chart);

            // Update chart on theme mode change
            KTThemeMode.on("kt.thememode.change", function() {                
                if (chart.rendered) {
                    chart.self.destroy();
                }

                initChart(chart);
            });
        }   
    }
}();

// Webpack support
if (typeof module !== 'undefined') {
    module.exports = KTChartsWidget6;
}

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTChartsWidget6.init();
});


 
"use strict";

// Class definition
var KTChartsWidget7 = function () {
    // Private methods
    var initChart = function(chartSelector) {
        var element = document.querySelector(chartSelector);

        if (!element) {
            return;
        }

        var height = parseInt(KTUtil.css(element, 'height'));
        var borderColor = KTUtil.getCssVariableValue('--kt-border-dashed-color');

        var options = {
            series: [{
                name: 'Net Profit',
                data: data1
            }, {
                name: 'Revenue',
                data: data2
            }],
            chart: {
                fontFamily: 'inherit',
                type: 'bar',
                height: height,
                toolbar: {
                    show: false
                }
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: ['40%'],
                    borderRadius: [6]
                },
            },
            legend: {
                show: false
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                show: true,
                width: 2,
                colors: ['transparent']
            },
            xaxis: {
                categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false
                },
                labels: {
                    style: {
                        colors: KTUtil.getCssVariableValue('--kt-gray-700'),
                        fontSize: '12px'
                    }
                }
            },
            yaxis: {
                labels: {
                    style: {
                        colors: KTUtil.getCssVariableValue('--kt-gray-700'),
                        fontSize: '12px'
                    }
                }
            },
            fill: {
                opacity: 1
            },
            states: {
                normal: {
                    filter: {
                        type: 'none',
                        value: 0
                    }
                },
                hover: {
                    filter: {
                        type: 'none',
                        value: 0
                    }
                },
                active: {
                    allowMultipleDataPointsSelection: false,
                    filter: {
                        type: 'none',
                        value: 0
                    }
                }
            },
            tooltip: {
                style: {
                    fontSize: '12px'
                },
                y: {
                    formatter: function (val) {
                        return "$" + val + " thousands"
                    }
                }
            },
            colors: [KTUtil.getCssVariableValue('--kt-primary'), KTUtil.getCssVariableValue('--kt-primary-light')],
            grid: {
                borderColor: borderColor,
                strokeDashArray: 4,
                yaxis: {
                    lines: {
                        show: true
                    }
                }
            }
        };

        var chart = new ApexCharts(element, options);

        var init = false;
        var tab = document.querySelector(tabSelector);
        
        if (initByDefault === true) {
            chart.render();
            init = true;
        }        

        tab.addEventListener('shown.bs.tab', function (event) {
            if (init == false) {
                chart.render();
                init = true;
            }
        })
          
        var chart = new ApexCharts(element, options);
        chart.render();   
    }

    // Public methods
    return {
        init: function () {          
            initChart('#kt_chart_widget_7_tab_1', '#kt_chart_widget_7_chart_1', [44, 55, 57, 56, 61, 58], [76, 85, 101, 98, 87, 105], true);
            initChart('#kt_chart_widget_7_tab_2', '#kt_chart_widget_7_chart_2', [35, 60, 35, 50, 45, 30], [65, 80, 50, 80, 75, 105], false);
            initChart('#kt_chart_widget_7_tab_3', '#kt_chart_widget_7_chart_3', [25, 40, 45, 50, 40, 60], [76, 85, 101, 98, 87, 105], false);
            initChart('#kt_chart_widget_7_tab_4', '#kt_chart_widget_7_chart_4', [50, 35, 45, 55, 30, 40], [76, 85, 101, 98, 87, 105], false);             
        }   
    }
}();

// Webpack support
if (typeof module !== 'undefined') {
    module.exports = KTChartsWidget7;
}

// On document ready
KTUtil.onDOMContentLoaded(function() {
    //KTChartsWidget7.init();
});


 
"use strict";

// Class definition
var KTChartsWidget8 = function () {
    var chart1 = {
        self: null,
        rendered: false
    };

    var chart2 = {
        self: null,
        rendered: false
    };

    // Private methods
    var initChart = function(chart, toggle, selector, data, initByDefault) {
        var element = document.querySelector(selector);

        if (!element) {
            return;
        }

        var height = parseInt(KTUtil.css(element, 'height'));    
        var borderColor = KTUtil.getCssVariableValue('--kt-border-dashed-color');    

        var options = {
            series: [
                {
                    name: 'Social Campaigns',
                    data: data[0]  // array value is of the format [x, y, z] where x (timestamp) and y are the two axes coordinates,
                }, {
                    name: 'Email Newsletter',
                    data: data[1]
                }, {
                    name: 'TV Campaign',
                    data: data[2]
                }, {
                    name: 'Google Ads',
                    data: data[3]
                }, {
                    name: 'Courses',
                    data: data[4]
                }, {
                    name: 'Radio',
                    data: data[5]
                }                
            ],
            chart: {
                fontFamily: 'inherit',
                type: 'bubble',    
                height: height,
                toolbar: {
                    show: false
                }                         
            },                                 
            plotOptions: {
                bubble: {
                }
            },
            stroke: {
                show: false,
                width: 0
            },
            legend: {
                show: false
            },
            dataLabels: {
                enabled: false
            },
            xaxis: {
                type: 'numeric',             
                tickAmount: 7,
                min: 0,
                max: 700,
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: true,
                    height: 0,
                },
                labels: {
                    show: true,
                    trim: true,
                    style: {
                        colors: KTUtil.getCssVariableValue('--kt-gray-500'),
                        fontSize: '13px'
                    }
                }
            },
            yaxis: {
                tickAmount: 7,
                min: 0,
                max: 700,
                labels: {
                    style: {
                        colors: KTUtil.getCssVariableValue('--kt-gray-500'),
                        fontSize: '13px'
                    }
                }               
            },
            tooltip: {
                style: {
                    fontSize: '12px'
                },
                x: {
                    formatter: function (val) {
                        return "Clicks: " + val;
                    }
                },
                y: {
                    formatter: function (val) {
                        return "$" + val + "K"
                    }
                },
                z: {
                    title: 'Impression: '
                }
            },
            crosshairs: {
                show: true,
                position: 'front',
                stroke: {
                    color: KTUtil.getCssVariableValue('--kt-border-dashed-color'),
                    width: 1,
                    dashArray: 0,
                }
            },           
            colors: [
                KTUtil.getCssVariableValue('--kt-primary'),
                KTUtil.getCssVariableValue('--kt-success'),   
                KTUtil.getCssVariableValue('--kt-warning'),
                KTUtil.getCssVariableValue('--kt-danger'),
                KTUtil.getCssVariableValue('--kt-info'),
                '#43CED7'
            ],
            fill: {
                opacity: 1,                
            },
            markers: {
                strokeWidth: 0
            },
            grid: {
                borderColor: borderColor,
                strokeDashArray: 4,
                padding: {
                    right: 20
                },
                yaxis: {
                    lines: {
                        show: true
                    }
                }
            }
        };

        chart.self = new ApexCharts(element, options);        
        var tab = document.querySelector(toggle);
        
        if (initByDefault === true) {
            // Set timeout to properly get the parent elements width
            setTimeout(function() {
                chart.self.render();  
                chart.rendered = true;
            }, 200);
        }        

        tab.addEventListener('shown.bs.tab', function (event) {
            if (chart.rendered === false) {
                chart.self.render();  
                chart.rendered = true;
            }
        });
    }

    // Public methods
    return {
        init: function () {    
            var data1 = [
                [[100, 250, 30]], [[225, 300, 35]], [[300, 350, 25]], [[350, 350, 20]], [[450, 400, 25]], [[550, 350, 35]]
            ];

            var data2 = [
                [[125, 300, 40]], [[250, 350, 35]], [[350, 450, 30]], [[450, 250, 25]], [[500, 500, 30]], [[600, 250, 28]]
            ];

            initChart(chart1, '#kt_chart_widget_8_week_toggle', '#kt_chart_widget_8_week_chart', data1, false);
            initChart(chart2, '#kt_chart_widget_8_month_toggle', '#kt_chart_widget_8_month_chart', data2, true);    

            // Update chart on theme mode change
            var handlerId = KTThemeMode.on("kt.thememode.change", function() {
                if (chart1.rendered) {
                    chart1.self.destroy();
                }

                if (chart2.rendered) {
                    chart2.self.destroy();
                }

                initChart(chart1, '#kt_chart_widget_8_week_toggle', '#kt_chart_widget_8_week_chart', data1, chart1.rendered);
                initChart(chart2, '#kt_chart_widget_8_month_toggle', '#kt_chart_widget_8_month_chart', data2, chart2.rendered);  
            });
        }   
    }
}();

// Webpack support
if (typeof module !== 'undefined') {
    module.exports = KTChartsWidget8;
}

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTChartsWidget8.init();
});


 
"use strict";

// Class definition
var KTChartsWidget9 = function () {
    var chart = {
        self: null,
        rendered: false
    };

    // Private methods
    var initChart = function() {
        var element = document.getElementById("kt_charts_widget_9");

        if (!element) {
            return;
        }

        var height = parseInt(KTUtil.css(element, 'height'));
        var labelColor = KTUtil.getCssVariableValue('--kt-gray-400');
        var borderColor = KTUtil.getCssVariableValue('--kt-border-dashed-color');    

        var baseColor = KTUtil.getCssVariableValue('--kt-gray-200');
        var secondaryColor = KTUtil.getCssVariableValue('--kt-primary');


        var options = {
            series: [{
                name: 'Order',
                data: [21, 21, 26, 26, 31, 31, 27]
            }, {
                name: 'Revenue',
                data: [12, 16, 16, 21, 21, 18, 18]
            }],
            chart: {
                fontFamily: 'inherit',
                type: 'area',
                height: height,
                toolbar: {
                    show: false
                }
            },
            plotOptions: {},
            legend: {
                show: false
            },
            dataLabels: {
                enabled: false
            },
            fill: {
                type: 'solid',
                opacity: 1
            },
            stroke: {
                curve: 'smooth',
                colors: [baseColor]
            },
            xaxis: {
                categories: ['', '06 Sep', '13 Sep', '20 Sep', '27 Sep', '30 Sep', ''],
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false
                },
                labels: {
                    style: {
                        colors: labelColor,
                        fontSize: '12px'
                    }
                },
                crosshairs: {
                    position: 'front',
                    stroke: {
                        color: labelColor,
                        width: 1,
                        dashArray: 3
                    }
                },
                tooltip: {
                    enabled: true,
                    formatter: undefined,
                    offsetY: 0,
                    style: {
                        fontSize: '12px'
                    }
                }
            },
            yaxis: {
                labels: {
                    style: {
                        colors: labelColor,
                        fontSize: '12px'
                    }
                }
            },
            states: {
                normal: {
                    filter: {
                        type: 'none',
                        value: 0
                    }
                },
                hover: {
                    filter: {
                        type: 'none',
                        value: 0
                    }
                },
                active: {
                    allowMultipleDataPointsSelection: false,
                    filter: {
                        type: 'none',
                        value: 0
                    }
                }
            },
            tooltip: {
                style: {
                    fontSize: '12px'
                },
                y: {
                    formatter: function (val) {
                        return "$" + val + " thousands"
                    }
                }
            },
            crosshairs: {
                show: true,
                position: 'front',
                stroke: {
                    color: KTUtil.getCssVariableValue('--kt-border-dashed-color'),
                    width: 1,
                    dashArray: 0,
                },
            },
            colors: [baseColor, secondaryColor],
            grid: {
                borderColor: borderColor,
                strokeDashArray: 4,
                yaxis: {
                    lines: {
                        show: true
                    }
                }
            },
            markers: {
                colors: [baseColor, secondaryColor],
                strokeColor: [KTUtil.getCssVariableValue('--kt-primary'), KTUtil.getCssVariableValue('--kt-gray-300')],
                strokeWidth: 3
            }
        };        
          
        chart.self = new ApexCharts(element, options);

        // Set timeout to properly get the parent elements width
        setTimeout(function() {
            chart.self.render();
            chart.rendered = true;
        }, 200);       
    }

    // Public methods
    return {
        init: function () {
            initChart();

            // Update chart on theme mode change
            KTThemeMode.on("kt.thememode.change", function() {                
                if (chart.rendered) {
                    chart.self.destroy();
                }

                initChart(chart);
            });
        }   
    }
}();

// Webpack support
if (typeof module !== 'undefined') {
    module.exports = KTChartsWidget9;
}

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTChartsWidget9.init();
});


 