
const platformMetrics = {
    X: {
        followers: 248721,
        totalLikes: 328500,
        totalComments: 12450,
        totalReposts: 818,
        avgEngagementRate: 3.2,
        monthlyGrowth: 0.8,
        totalPosts: 10.706,
        avgViewsPerPost: 51723,
        bestPerformingDay: "28 October",
        responseRate: "1.3%"
    },
    YouTube: {
        subscribers: 54316,
        totalLikes:  1.797,
        totalComments: 127,
        totalDislikes: 0,
        avgEngagementRate: 2.23,
        monthlyGrowth: 2.1,
        totalVideos: 607,
        avgViewsPerPost: 4100,
        bestPerformingDay: "28 October",
        responseRate: "00.0%"
    }
};

const data = {
    X: [
        {
            date: "2024-10-02",
            views: 8851,
            likes: 34,
            comments: 13,
            reposts: 12,
            sentiment: { positive: 54, negative: 38, neutral: 8 }
        },
        {
            date: "2024-10-04",
            views: 13500,
            likes: 125,
            comments: 16,
            reposts: 27,
            sentiment: { positive: 0, negative: 81.25, neutral: 18.75 }
        },
        {
            date: "2024-10-10",
            views: 14100,
            likes: 135,
            comments: 0,
            reposts: 17,
            sentiment: { positive: 0, negative: 0, neutral: 0 }
        },
        {
            date: "2024-10-14",
            views: 161000,
            likes: 1600,
            comments: 121,
            reposts: 135,
            sentiment: { positive: 1.64, negative: 81.97, neutral: 16.39 }
        },
        {
            date: "2024-10-15",
            views: 6400,
            likes: 69,
            comments: 6,
            reposts: 10,
            sentiment: { positive: 0, negative: 83, neutral: 17 }
        },
        {
            date: "2024-10-16",
            views: 7939,
            likes: 85,
            comments: 27,
            reposts: 21,
            sentiment: { positive: 0, negative: 83, neutral: 17 }
        },
        {
            date: "2024-10-23",
            views: 19000,
            likes: 337,
            comments: 0,
            reposts: 32,
            sentiment: { positive: 0, negative: 0, neutral: 0 }
        },
        {
            date: "2024-10-28",
            views: 184000,
            likes: 1800,
            comments: 168,
            reposts: 577,
            sentiment: { positive: 18.18, negative: 78.79, neutral: 3.03 }
        }
    ],
    YouTube: [
        {
            date: "2024-10-04",
            views: 482,
            likes: 23,
            comments: 0,
            dislikes: 0,
            sentiment: { positive: 0, negative: 0, neutral: 0 }
        },
        {
            date: "2024-10-04",
            views: 376,
            likes: 17,
            comments: 1,
            dislikes: 0,
            sentiment: { positive: 0, negative: 0, neutral: 100 }
        },
        {
            date: "2024-10-04",
            views: 210,
            likes: 10,
            comments: 0,
            dislikes: 0,
            sentiment: { positive: 0, negative: 0, neutral: 0 }
        },
        {
            date: "2024-10-04",
            views: 313,
            likes: 18,
            comments: 1,
            dislikes: 0,
            sentiment: { positive: 0, negative: 0, neutral: 100 }
        },
        {
            date: "2024-10-04",
            views: 1140,
            likes: 66,
            comments: 5,
            dislikes: 0,
            sentiment: { positive: 60, negative: 0, neutral: 40 }
        },
        {
            date: "2024-10-04",
            views: 442,
            likes: 15,
            comments: 0,
            dislikes: 0,
            sentiment: { positive: 0, negative: 0, neutral: 0 }
        },
        {
            date: "2024-10-04",
            views: 1292,
            likes: 49,
            comments: 4,
            dislikes: 0,
            sentiment: { positive: 0, negative: 67, neutral: 33 }
        },
        {
            date: "2024-10-04",
            views: 898,
            likes: 40,
            comments: 2,
            dislikes: 0,
            sentiment: { positive: 100, negative: 0, neutral: 0 }
        },
        {
            date: "2024-10-14",
            views: 247,
            likes: 18,
            comments: 1,
            dislikes: 0,
            sentiment: { positive: 0, negative: 0, neutral: 100 }
        },
        {
            date: "2024-10-14",
            views: 353,
            likes: 18,
            comments: 1,
            dislikes: 0,
            sentiment: { positive: 100, negative: 0, neutral: 0 }
        },
        {
            date: "2024-10-16",
            views: 19829,
            likes: 38,
            comments: 0,
            dislikes: 0,
            sentiment: { positive: 0, negative: 0, neutral: 0 }
        },
        {
            date: "2024-10-18",
            views: 606,
            likes: 15,
            comments: 0,
            dislikes: 0,
            sentiment: { positive: 0, negative: 0, neutral: 0 }
        },
        {
            date: "2024-10-18",
            views: 311,
            likes: 5,
            comments: 1,
            dislikes: 0,
            sentiment: { positive: 0, negative: 0, neutral: 100 }
        },
        {
            date: "2024-10-18",
            views: 608,
            likes: 18,
            comments: 0,
            dislikes: 0,
            sentiment: { positive: 0, negative: 0, neutral: 0 }
        },
        {
            date: "2024-10-18",
            views: 205,
            likes: 12,
            comments: 0,
            dislikes: 0,
            sentiment: { positive: 0, negative: 0, neutral: 0 }
        },
        {
            date: "2024-10-18",
            views: 154,
            likes: 10,
            comments: 0,
            dislikes: 0,
            sentiment: { positive: 0, negative: 0, neutral: 0 }
        },
        {
            date: "2024-10-18",
            views: 316,
            likes: 7,
            comments: 0,
            dislikes: 0,
            sentiment: { positive: 0, negative: 0, neutral: 0 }
        },
        {
            date: "2024-10-18",
            views: 180,
            likes: 3,
            comments: 0,
            dislikes: 0,
            sentiment: { positive: 0, negative: 0, neutral: 0 }
        },
        {
            date: "2024-10-18",
            views: 418,
            likes: 19,
            comments: 0,
            dislikes: 0,
            sentiment: { positive: 0, negative: 0, neutral: 0 }
        },
        {
            date: "2024-10-18",
            views: 255,
            likes: 13,
            comments: 1,
            dislikes: 0,
            sentiment: { positive: 100, negative: 0, neutral: 0 }
        },
        {
            date: "2024-10-28",
            views: 54017,
            likes: 1200,
            comments: 97,
            dislikes: 0,
            sentiment: { positive: 97.9, negative: 0, neutral: 2.1 }
        },
        {
            date: "2024-10-30",
            views: 271,
            likes: 18,
            comments: 1,
            dislikes: 0,
            sentiment: { positive: 0, negative: 0, neutral: 100 }
        }
    ]
};

let currentPlatform = 'X';

function formatNumber(num) {
    if (num >= 1000000) return (num/1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num/1000).toFixed(1) + 'K';
    return num.toLocaleString();
}

function createTooltip() {
    return d3.select('body')
        .append('div')
        .attr('class', 'tooltip');
}

function showTooltip(tooltip, html, event) {
    tooltip
        .html(html)
        .style('left', (event.pageX + 10) + 'px')
        .style('top', (event.pageY - 10) + 'px')
        .transition()
        .duration(200)
        .style('opacity', 1);
}

function hideTooltip(tooltip) {
    tooltip
        .transition()
        .duration(200)
        .style('opacity', 0)
        .remove();
}

function updatePlatformMetrics(platform) {
    const metrics = platformMetrics[platform];
    
    document.getElementById('platform-badge').textContent = platform;
    document.getElementById('platform-badge').className = `metric-badge ${platform.toLowerCase()}`;
    document.getElementById('platform-followers').textContent = 
        formatNumber(platform === 'X' ? metrics.followers : metrics.subscribers);
    document.getElementById('monthly-growth').textContent = 
        `+${metrics.monthlyGrowth}%`;
    document.getElementById('total-posts').textContent = 
        formatNumber(platform === 'X' ? metrics.totalPosts : metrics.totalVideos);

    document.getElementById('total-engagement-rate').textContent = 
        `${metrics.avgEngagementRate}%`;
    document.getElementById('total-platform-likes').textContent = 
        formatNumber(metrics.totalLikes);
    document.getElementById('total-platform-comments').textContent = 
        formatNumber(metrics.totalComments);

    document.getElementById('avg-view-per-post').textContent = 
        formatNumber(metrics.avgViewsPerPost);
    document.getElementById('best-performing-day').textContent = 
        metrics.bestPerformingDay;
    document.getElementById('engagement-trend').textContent = 
        `+${metrics.avgEngagementRate}%`;

    const totalInteractions = metrics.totalLikes + metrics.totalComments + 
        (platform === 'X' ? metrics.totalReposts : metrics.totalDislikes);
    document.getElementById('interaction-distribution').textContent = 
        formatNumber(totalInteractions);
    
    document.getElementById('platform-specific-metric').textContent = 
        formatNumber(platform === 'X' ? metrics.totalReposts : metrics.totalDislikes);
    document.getElementById('platform-specific-label').textContent = 
        platform === 'X' ? 'Repost' : 'Dislike';
    document.getElementById('response-rate').textContent = metrics.responseRate;
}

function drawScatterPlot(platform) {
    const chartDiv = document.getElementById('scatter-plot');
    const width = chartDiv.clientWidth;
    const height = 400;
    const margin = {top: 20, right: 30, bottom: 40, left: 50};

    d3.select('#scatter-plot').selectAll('*').remove();

    const svg = d3.select('#scatter-plot')
        .append('svg')
        .attr('width', width)
        .attr('height', height);

    const chart = svg.append('g')
        .attr('transform', `translate(${margin.left},${margin.top})`);

    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    const platformData = data[platform];

    const x = d3.scaleLinear()
        .domain([0, d3.max(platformData, d => d.likes)])
        .range([0, innerWidth])
        .nice();

    const y = d3.scaleLinear()
        .domain([0, d3.max(platformData, d => d.comments)])
        .range([innerHeight, 0])
        .nice();

    const size = d3.scaleSqrt()
        .domain([0, d3.max(platformData, d => d.views)])
        .range([4, 20]);

    chart.selectAll('.point')
        .data(platformData)
        .enter()
        .append('circle')
        .attr('class', 'point')
        .attr('cx', d => x(d.likes))
        .attr('cy', d => y(d.comments))
        .attr('r', d => size(d.views))
        .attr('fill', 'var(--accent-blue)')
        .attr('opacity', 0.7)
        .on('mouseover', function(event, d) {
            const tooltip = createTooltip();
            d3.select(this)
                .attr('opacity', 1)
                .attr('stroke', 'var(--accent-blue)')
                .attr('stroke-width', 2);
            
            const date = new Date(d.date);
            const formattedDate = date.toLocaleDateString('tr-TR', { 
                day: 'numeric', 
                month: 'long'
            });
            
            showTooltip(tooltip, `
                Tarih: ${formattedDate}<br>
                Görüntülenme: ${formatNumber(d.views)}<br>
                Beğeni: ${formatNumber(d.likes)}<br>
                Yorum: ${formatNumber(d.comments)}
            `, event);
        })
        .on('mouseout', function() {
            d3.select(this)
                .attr('opacity', 0.7)
                .attr('stroke', 'none');
            d3.selectAll('.tooltip').remove();
        });

    const xAxis = d3.axisBottom(x)
        .ticks(5)
        .tickFormat(formatNumber);
    
    const yAxis = d3.axisLeft(y)
        .ticks(5)
        .tickFormat(formatNumber);

    chart.append('g')
        .attr('transform', `translate(0,${innerHeight})`)
        .call(xAxis);

    chart.append('g')
        .call(yAxis);

    chart.append('text')
        .attr('x', innerWidth / 2)
        .attr('y', innerHeight + 35)
        .attr('text-anchor', 'middle')
        .text('Likes')
        .attr('fill', 'var(--text-secondary)');

    chart.append('text')
        .attr('transform', 'rotate(-90)')
        .attr('x', -innerHeight / 2)
        .attr('y', -40)
        .attr('text-anchor', 'middle')
        .text('Yorum Sayısı')
        .attr('fill', 'var(--text-secondary)');
}

function drawTrendChart(platform) {
    const chartDiv = document.getElementById('trend-chart');
    const width = chartDiv.clientWidth;
    const height = 400;
    const margin = {top: 10, right: 30, bottom: 40, left: 50};

    d3.select('#trend-chart').selectAll('*').remove();

    const svg = d3.select('#trend-chart')
        .append('svg')
        .attr('width', width)
        .attr('height', height);

    const chart = svg.append('g')
        .attr('transform', `translate(${margin.left},${margin.top})`);

    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    // Sadece yorumu olan içerikleri filtrele
    const platformData = data[platform].filter(d => d.comments > 0);

    const x = d3.scaleTime()
        .domain(d3.extent(platformData, d => new Date(d.date)))
        .range([0, innerWidth]);

    const y = d3.scaleLinear()
        .domain([0, 100])
        .range([innerHeight, 0]);

    const sentimentTypes = [
        { key: 'positive', color: 'var(--accent-green)', label: 'Positive' },
        { key: 'negative', color: 'var(--accent-red)', label: 'Negative' },
        { key: 'neutral', color: 'var(--text-secondary)', label: 'Nötr' }
    ];

    sentimentTypes.forEach(type => {
        const line = d3.line()
            .x(d => x(new Date(d.date)))
            .y(d => y(d.sentiment[type.key]))
            .curve(d3.curveMonotoneX);

        chart.append('path')
            .datum(platformData)
            .attr('fill', 'none')
            .attr('stroke', type.color)
            .attr('stroke-width', 2)
            .attr('d', line);

        chart.selectAll(`.point-${type.key}`)
            .data(platformData)
            .enter()
            .append('circle')
            .attr('class', `point-${type.key}`)
            .attr('cx', d => x(new Date(d.date)))
            .attr('cy', d => y(d.sentiment[type.key]))
            .attr('r', 4)
            .attr('fill', type.color)
            .on('mouseover', function(event, d) {
                const tooltip = createTooltip();
                d3.select(this).attr('r', 6);
                
                const date = new Date(d.date);
                const formattedDate = date.toLocaleDateString('tr-TR', { 
                    day: 'numeric', 
                    month: 'long'
                });

                showTooltip(tooltip, `
                    ${formattedDate}<br>
                    ${type.label}: %${d.sentiment[type.key].toFixed(1)}
                `, event);
            })
            .on('mouseout', function() {
                d3.select(this).attr('r', 4);
                d3.selectAll('.tooltip').remove();
            });
    });

    chart.append('g')
        .attr('transform', `translate(0,${innerHeight})`)
        .call(d3.axisBottom(x)
            .ticks(5)
            .tickFormat(d3.timeFormat('%d %b')));

    chart.append('g')
        .call(d3.axisLeft(y)
            .tickFormat(d => d + '%'));

    const legend = chart.append('g')
        .attr('transform', `translate(${innerWidth - 100}, 0)`);

    sentimentTypes.forEach((type, i) => {
        const legendRow = legend.append('g')
            .attr('transform', `translate(0, ${i * 20})`);

        legendRow.append('line')
            .attr('x1', 0)
            .attr('x2', 15)
            .attr('y1', 9)
            .attr('y2', 9)
            .attr('stroke', type.color)
            .attr('stroke-width', 2);

        legendRow.append('text')
            .attr('x', 20)
            .attr('y', 12)
            .attr('fill', 'var(--text-secondary)')
            .style('font-size', '12px')
            .text(type.label);
    });
}

function switchPlatform(platform) {
    currentPlatform = platform;
    
    document.querySelectorAll('.tab').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');

    updatePlatformMetrics(platform);
    drawScatterPlot(platform);
    drawTrendChart(platform);
}

window.onload = function() {
    updatePlatformMetrics('X');
    drawScatterPlot('X');
    drawTrendChart('X');
    
    document.querySelectorAll('.tab').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector('.tab:first-child').classList.add('active');
};

document.addEventListener('DOMContentLoaded', () => {
    switchPlatform('X');
    
    window.addEventListener('resize', () => {
        drawScatterPlot(currentPlatform);
        drawTrendChart(currentPlatform);
    });
});
