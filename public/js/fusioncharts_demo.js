var chartData;

$(function() {
    $.ajax({

        url: 'http://localhost:3300/fuelPrices',
        type: 'GET',
        success: function(data) {
            chartData = data;
            //var template = Handlebars.compile($("#tabular-template").html());
            //$("#table-location").html(template(data));


            var chartProperties = {
                "caption": "Reaction Time",
                "numbersuffix": "s",
                "xAxisName": "Month",
                "yAxisName": "Time",
                //bgcolor: "#FFFFFF",
                canvasBgColor: "#FFFFFF",
                showBorder: "1",
                //showCanvasBorder: "0",
                showLabels: "0",
                drawCrossLine: "1",
                divLineAlpha: "0",
                //showYAxisValues: "0",
                chartLeftMargin: "0",
                chartRightMargin: "0",
                canvasRightMargin: "25",
                canvasLeftMargin: "0",
                chartBottomMargin: "15",
                canvasBottomMargin: "15",
                chartTopMargin: "15",
                canvasTopMargin: "15",

                /*
                showShadow: "0",
                paletteColors: "#3273DC",
                drawAnchors: "0",
                showAlternateHGridColor: "0",
                crossLineColor: "#363636",
                crossLineAlpha: "15",
                drawCrossLineOnTop: "0",
                usePlotGradientColor: "1",
                */
                plotFillAlpha: "15",
                plotColorinTooltip: "0",
                tooltipBorderAlpha: "0",
                toolTipPadding: "0",
                baseFontColor: "#205BBB",
                baseFontSize: "15",
                baseFont: "Nunito",

            };

            var chartProperties2 = {
                "caption": "Speed",
                "numbersuffix": "cm/s",
                "xAxisName": "Month",
                "yAxisName": "Price"
            };

            var chartProperties3 = {
                "caption": "Accuracy",
                "numbersuffix": "%",
                "xAxisName": "Month",
                "yAxisName": "Price"
            };

            var chartProperties4 = {
                "caption": "Reaching distance",
                "numbersuffix": "cm",
                "xAxisName": "Month",
                "yAxisName": "Price"
            };

            var categoriesArray = [{
                "category": data["categories"]
            }];

            var Chart = new FusionCharts({
                type: 'msline',
                renderAt: 'chart-location',
                width: '500',
                height: '300',
                dataFormat: 'json',
                dataSource: {
                    //chart: chartCosmetics.currencyChart,
                    chart: chartProperties,
                    categories: categoriesArray,
                    dataset: data["dataset"]
                },
                line: {
                    "color": "#6baa01",
                    "valueOnRight": "1",
                }
            });
            Chart.render();

            var Chart2 = new FusionCharts({
                type: 'msline',
                renderAt: 'chart-location2',
                width: '500',
                height: '300',
                dataFormat: 'json',
                dataSource: {
                    chart: chartProperties2,
                    categories: categoriesArray,
                    dataset: data["dataset2"]
                }


            });
            Chart2.render();

            var Chart3 = new FusionCharts({
                type: 'msline',
                renderAt: 'chart-location3',
                width: '500',
                height: '300',
                dataFormat: 'json',
                dataSource: {
                    chart: chartProperties3,
                    categories: categoriesArray,
                    dataset: data["dataset2"]
                }


            });
            Chart3.render();

            var Chart4 = new FusionCharts({
                type: 'msline',
                renderAt: 'chart-location4',
                width: '500',
                height: '300',
                dataFormat: 'json',
                dataSource: {
                    chart: chartProperties4,
                    categories: categoriesArray,
                    dataset: data["dataset2"]
                }


            });
            Chart4.render();
        }
    });
});

chartCosmetics = {
    currencyChart: {
        caption: "Reaction Time",
        numbersuffix: "s",
        xAxisName: "Month",
        yAxisName: "Price",
        bgcolor: "#FFFFFF",
        canvasBgColor: "#FFFFFF",
        showBorder: "0",
        showCanvasBorder: "0",
        showLabels: "0",
        drawCrossLine: "1",
        divLineAlpha: "0",
        showYAxisValues: "0",
        chartLeftMargin: "0",
        chartRightMargin: "0",
        canvasRightMargin: "0",
        canvasLeftMargin: "0",
        chartBottomMargin: "0",
        canvasBottomMargin: "0",
        chartTopMargin: "0",
        canvasTopMargin: "0",
        showValues: "0",
        shadow: "0",
        legendPadding: "0",
        showShadow: "0",
        paletteColors: "#3273DC",
        drawAnchors: "0",
        showAlternateHGridColor: "0",
        crossLineColor: "#363636",
        crossLineAlpha: "15",
        drawCrossLineOnTop: "0",
        usePlotGradientColor: "1",
        plotFillAlpha: "15",
        plotColorinTooltip: "0",
        tooltipBorderAlpha: "0",
        toolTipPadding: "0",
        baseFontColor: "#205BBB",
        baseFontSize: "15",
        baseFont: "Nunito",
        tooltipbgalpha: "0",
        plotFillAngle: "90",
        numberPrefix: "$",
        plotToolText: "<b>$label: $dataValue</b>"
    },
    percentChart: {
        bgcolor: "#FFFFFF",
        canvasBgColor: "#FFFFFF",
        showBorder: "0",
        showCanvasBorder: "0",
        showLabels: "0",
        drawCrossLine: "1",
        divLineAlpha: "0",
        showYAxisValues: "0",
        chartLeftMargin: "0",
        chartRightMargin: "0",
        canvasRightMargin: "0",
        canvasLeftMargin: "0",
        chartBottomMargin: "0",
        canvasBottomMargin: "0",
        chartTopMargin: "0",
        canvasTopMargin: "0",
        showValues: "0",
        shadow: "0",
        legendPadding: "0",
        showShadow: "0",
        paletteColors: "#3273DC",
        drawAnchors: "0",
        showAlternateHGridColor: "0",
        crossLineColor: "#363636",
        crossLineAlpha: "15",
        drawCrossLineOnTop: "0",
        usePlotGradientColor: "1",
        plotFillAlpha: "15",
        plotColorinTooltip: "0",
        tooltipBorderAlpha: "0",
        toolTipPadding: "0",
        baseFontColor: "#205BBB",
        baseFontSize: "15",
        baseFont: "Nunito",
        tooltipbgalpha: "0",
        plotFillAngle: "90",
        numberSuffix: "%",
        plotToolText: "<b>$label: $dataValue</b>"
    }
}