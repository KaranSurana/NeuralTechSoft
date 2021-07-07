var revenueChart = function(){
    var revenue = document.getElementById("revenuee");
        if (revenue !== null) {
            
            revenue.height = 300;
            
            var config = {
                type: "line",
                data: {
                    labels: [
                        "03/06",
                        "04/06",
                        "07/06",
                        "08/06",
                        "09/06",
                        "10/06",
                        "11/06",
                        "14/06",
                        "15/06",
                        "16/06",
                    ],
                    datasets: [
                        {
                            label: "My First dataset",
                            data:  [474.5,
                                474.8,
                                480.8,
                                483.8,
                                491.1,
                                486.1,
                                485.1,
                                483.1,
                                485.2,
                                483.55
                                ],
                            borderColor: 'rgba(254, 99, 78, 1)',
                            borderWidth: "8",
                            backgroundColor: 'rgba(254, 99, 78, 0.1)'
                            
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    elements: {
                            point:{
                                radius: 0
                            }
                    },
                    legend:false,
                    
                    scales: {
                        yAxes: [{
                            gridLines: {
                                color: "rgba(89, 59, 219,0.1)",
                                drawBorder: true
                            },
                            ticks: {
                                fontColor: "#999",
                            },
                        }],
                        xAxes: [{
                            gridLines: {
                                display: false,
                                zeroLineColor: "transparent"
                            },
                            ticks: {
                                stepSize: 5,
                                fontColor: "#999",
                                fontFamily: "Nunito, sans-serif"
                            }
                        }]
                    },
                    tooltips: {
                        enabled: false,
                        mode: "index",
                        intersect: false,
                        titleFontColor: "#888",
                        bodyFontColor: "#555",
                        titleFontSize: 12,
                        bodyFontSize: 15,
                        backgroundColor: "rgba(256,256,256,0.95)",
                        displayColors: true,
                        xPadding: 10,
                        yPadding: 7,
                        borderColor: "rgba(220, 220, 220, 0.9)",
                        borderWidth: 2,
                        caretSize: 6,
                        caretPadding: 10
                    }
                }
            };

            var ctx = document.getElementById("revenuee").getContext("2d");
            var myLine = new Chart(ctx, config);
        }

    

return {
    init:function(){
    },
    
    
    load:function(){
        donutChart();
        donutChart1();
        widgetChart1();
        revenueChart();
        chartBar();
    },
    
    resize:function(){
        
    }
}

}();
jQuery(document).ready(function(){
});
    
jQuery(window).on('load',function(){
    setTimeout(function(){
        dzChartlist.load();
    }, 1000); 
    
});

jQuery(window).on('resize',function(){
    
    
});     

