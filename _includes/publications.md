<div class="publications">
<h2 id="pubs">Publications&nbsp;<font size="2" color=#aaa>(*=equal contribution)</font></h2>

{% for y in page.years %}
  <h3 class="year">{{y}}</h3>
  {% bibliography -f papers -q @*[year={{y}}]* %}
{% endfor %}
</div>
