(function(){
  var style = getComputedStyle(document.documentElement);
  var accent = style.getPropertyValue('--accent').trim();
  var accent2 = style.getPropertyValue('--accent2').trim();
  var accent3 = style.getPropertyValue('--accent3').trim();
  var ink = style.getPropertyValue('--ink').trim();
  var muted = style.getPropertyValue('--muted').trim();
  var rule = style.getPropertyValue('--rule').trim();
  var bg2 = style.getPropertyValue('--bg2').trim();
  var tagCn = style.getPropertyValue('--tag-cn').trim();
  var tagIntl = style.getPropertyValue('--tag-intl').trim();
  var tagPolicy = style.getPropertyValue('--tag-policy').trim();
  var tagStandard = style.getPropertyValue('--tag-standard').trim();

  // --- Chart 1: Policy Monthly Trend (Jan-Jun 2026) ---
  var chart1 = echarts.init(document.getElementById('chart-trend'), null, { renderer: 'svg' });
  chart1.setOption({
    tooltip: { trigger: 'axis', appendToBody: true },
    animation: false,
    grid: { left: 50, right: 20, top: 20, bottom: 30 },
    xAxis: {
      type: 'category',
      data: ['1月','2月','3月','4月','5月','6月'],
      axisLabel: { color: muted, fontSize: 11 },
      axisLine: { lineStyle: { color: rule } }
    },
    yAxis: {
      type: 'value',
      axisLabel: { color: muted, fontSize: 11 },
      splitLine: { lineStyle: { color: rule, type: 'dashed' } },
      name: '政策/标准数量',
      nameTextStyle: { color: muted, fontSize: 10 }
    },
    series: [{
      type: 'line',
      data: [2, 1, 2, 5, 8, 6],
      smooth: true,
      lineStyle: { color: accent, width: 3 },
      areaStyle: { color: accent + '22' },
      itemStyle: { color: accent },
      symbol: 'circle',
      symbolSize: 8,
      label: { show: true, color: ink, fontSize: 11, fontWeight: 600 }
    }]
  });
  window.addEventListener('resize', function(){ chart1.resize(); });

  // --- Chart 2: Publisher Distribution ---
  var chart2 = echarts.init(document.getElementById('chart-publisher'), null, { renderer: 'svg' });
  chart2.setOption({
    tooltip: { trigger: 'item', appendToBody: true },
    animation: false,
    legend: { bottom: 0, textStyle: { color: muted, fontSize: 10 } },
    series: [{
      type: 'pie',
      radius: ['35%', '65%'],
      center: ['50%', '45%'],
      label: { color: ink, fontSize: 10, formatter: '{b}\n{d}%' },
      data: [
        { value: 3, name: '国务院/部委', itemStyle: { color: accent } },
        { value: 4, name: '省级政府/厅局', itemStyle: { color: accent2 } },
        { value: 3, name: '市级政府', itemStyle: { color: '#f59e0b' } },
        { value: 2, name: '标委会/学会', itemStyle: { color: accent3 } },
        { value: 1, name: '行业机构', itemStyle: { color: '#8b5cf6' } }
      ]
    }]
  });
  window.addEventListener('resize', function(){ chart2.resize(); });

  // --- Chart 3: Keywords Frequency ---
  var chart3 = echarts.init(document.getElementById('chart-keywords'), null, { renderer: 'svg' });
  chart3.setOption({
    tooltip: { trigger: 'axis', appendToBody: true },
    animation: false,
    grid: { left: 110, right: 20, top: 10, bottom: 20 },
    xAxis: {
      type: 'value',
      axisLabel: { color: muted, fontSize: 10 },
      splitLine: { lineStyle: { color: rule, type: 'dashed' } }
    },
    yAxis: {
      type: 'category',
      data: ['城市体检','城市更新','智慧城市','数字化转型','AI+城市','数字孪生','城市生命线','综合评价','安全韧性','一网统管'],
      axisLabel: { color: ink, fontSize: 11, fontWeight: 600 },
      axisLine: { lineStyle: { color: rule } }
    },
    series: [{
      type: 'bar',
      data: [
        { value: 28, itemStyle: { color: accent } },
        { value: 24, itemStyle: { color: accent } },
        { value: 18, itemStyle: { color: '#f59e0b' } },
        { value: 15, itemStyle: { color: '#f59e0b' } },
        { value: 12, itemStyle: { color: accent3 } },
        { value: 10, itemStyle: { color: accent3 } },
        { value: 9, itemStyle: { color: '#8b5cf6' } },
        { value: 8, itemStyle: { color: '#8b5cf6' } },
        { value: 7, itemStyle: { color: '#ec4899' } },
        { value: 6, itemStyle: { color: '#ec4899' } }
      ],
      barWidth: 18,
      label: { show: true, position: 'right', color: muted, fontSize: 10 }
    }]
  });
  window.addEventListener('resize', function(){ chart3.resize(); });

  // --- Chart 4: Domestic vs International Count ---
  var chart4 = echarts.init(document.getElementById('chart-compare'), null, { renderer: 'svg' });
  chart4.setOption({
    tooltip: { trigger: 'axis', appendToBody: true },
    animation: false,
    grid: { left: 50, right: 20, top: 20, bottom: 30 },
    xAxis: {
      type: 'category',
      data: ['政策文件', '标准规范', '行动方案', '法规条例'],
      axisLabel: { color: muted, fontSize: 11 },
      axisLine: { lineStyle: { color: rule } }
    },
    yAxis: {
      type: 'value',
      axisLabel: { color: muted, fontSize: 10 },
      splitLine: { lineStyle: { color: rule, type: 'dashed' } }
    },
    legend: {
      data: ['国内', '国际'],
      bottom: 0,
      textStyle: { color: muted, fontSize: 10 }
    },
    series: [
      {
        name: '国内',
        type: 'bar',
        data: [6, 7, 4, 1],
        barWidth: 16,
        itemStyle: { color: accent, borderRadius: [3,3,0,0] },
        label: { show: true, color: ink, fontSize: 10 }
      },
      {
        name: '国际',
        type: 'bar',
        data: [4, 3, 2, 1],
        barWidth: 16,
        itemStyle: { color: accent2, borderRadius: [3,3,0,0] },
        label: { show: true, color: ink, fontSize: 10 }
      }
    ]
  });
  window.addEventListener('resize', function(){ chart4.resize(); });

  // --- Chart 5: Policy Type Distribution ---
  var chart5 = echarts.init(document.getElementById('chart-type'), null, { renderer: 'svg' });
  chart5.setOption({
    tooltip: { trigger: 'item', appendToBody: true, formatter: '{b}: {c} ({d}%)' },
    animation: false,
    legend: { bottom: 0, textStyle: { color: muted, fontSize: 10 } },
    series: [{
      type: 'pie',
      radius: ['0%', '65%'],
      center: ['50%', '45%'],
      label: { color: ink, fontSize: 10, formatter: '{b}\n{d}%' },
      data: [
        { value: 10, name: '国家/地方政策文件', itemStyle: { color: accent } },
        { value: 10, name: '国家标准/行业标准', itemStyle: { color: accent3 } },
        { value: 6, name: '行动方案/工作计划', itemStyle: { color: '#f59e0b' } },
        { value: 2, name: '法规条例', itemStyle: { color: accent2 } }
      ]
    }]
  });
  window.addEventListener('resize', function(){ chart5.resize(); });

  // --- Chart 6: Urban Checkup 4-Dimension Indicator Coverage Heatmap ---
  var chart6 = echarts.init(document.getElementById('chart-heatmap'), null, { renderer: 'svg' });

  var dims = ['住房维度', '小区维度', '街区维度', '城区维度'];
  var indicators = ['安全耐久','功能完备','绿色智能','设施完善','环境宜居','管理健全','整洁有序','特色活力','产城融合','安全韧性','智慧高效','生态宜居','历史文化'];

  // Coverage data [indicator_index, dim_index, value]
  var heatData = [
    [0,0,95],[1,0,80],[2,0,65],
    [3,1,90],[4,1,85],[5,1,70],
    [6,2,75],[7,2,60],
    [8,3,70],[9,3,92],[10,3,85],[11,3,88],[12,3,60]
  ];

  // Fill missing cells
  indicators.forEach(function(_, xi) {
    dims.forEach(function(_, yi) {
      if (!heatData.some(function(d) { return d[0] === xi && d[1] === yi; })) {
        heatData.push([xi, yi, '-']);
      }
    });
  });

  chart6.setOption({
    tooltip: {
      appendToBody: true,
      formatter: function(p) {
        return p.value[2] === '-' ? '无对应指标' : dims[p.value[1]] + ' - ' + indicators[p.value[0]] + ': ' + p.value[2] + '%';
      }
    },
    animation: false,
    grid: { left: 100, right: 60, top: 20, bottom: 40 },
    xAxis: {
      type: 'category',
      data: dims,
      axisLabel: { color: ink, fontSize: 11, fontWeight: 600 },
      axisLine: { lineStyle: { color: rule } }
    },
    yAxis: {
      type: 'category',
      data: indicators,
      axisLabel: { color: ink, fontSize: 10 },
      axisLine: { lineStyle: { color: rule } },
      splitArea: { show: false }
    },
    visualMap: {
      min: 0,
      max: 100,
      calculable: true,
      orient: 'vertical',
      right: 0,
      top: 'center',
      inRange: { color: ['#e0f2fe', '#93c5fd', '#3b82f6', '#1d4ed8'] },
      outOfRange: { color: 'transparent' },
      textStyle: { color: muted, fontSize: 10 }
    },
    series: [{
      type: 'heatmap',
      data: heatData,
      label: {
        show: true,
        formatter: function(p) { return p.value[2] === '-' ? '—' : p.value[2] + '%'; },
        color: ink,
        fontSize: 10
      },
      emphasis: {
        itemStyle: { shadowBlur: 10, shadowColor: 'rgba(0,0,0,0.15)' }
      }
    }]
  });
  window.addEventListener('resize', function(){ chart6.resize(); });
})();