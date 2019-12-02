---
title: Datepicker
description: Date input with a nice calendar
category: components
file: components/Datepicker/Datepicker.scss
---

{% example html %}

<div class="FormGroup FormGroup--floatingLabel">
  <label class="Label" for="birthday">Birthday</label>
  <div class="Datepicker is-open">
    <div class="InputGroup">
      <input type="mail" class="Datepicker-input Input InputGroup-input" placeholder="dd/mm/aaaa" id="birthday" />
      <span class="InputGroup-context">
        <button class="Icon Icon--calendar"></button>
      </span>
    </div>
    <div class="Calendar Datepicker-calendar">
      <nav class="Calendar-header">
        <div class="Calendar-header-nav Calendar-header-nav--prev">
          <button class="Button Button--default Calendar-header-navItem" type="button">
            <span class="Icon Icon--arrowLeft Icon--xs"></span>
          </button>
        </div>
        <div class="Calendar-header-nav Calendar-header-nav--month">
          <select class="Select Calendar-header-navItem">
            <option value="01">January</option>
            <option value="02">February</option>
            <option value="03">March</option>
            <option value="04">April</option>
            <option value="05">May</option>
          </select>
        </div>
        <div class="Calendar-header-nav Calendar-header-nav--year">
          <select class="Select Calendar-header-navItem">
              <option value="2016">2016</option>
              <option value="2015">2015</option>
          </select>
        </div>
        <div class="Calendar-header-nav Calendar-header-nav--next">
          <button class="Button Button--default Calendar-header-navItem" type="button">
            <span class="Icon Icon--arrowRight Icon--xs"></span>
          </button>
        </div>
      </nav>
      <table class="Calendar-table">
        <thead>
          <tr>
            <th class="Calendar-weekday">Mo</th>
            <th class="Calendar-weekday">Tu</th>
            <th class="Calendar-weekday">We</th>
            <th class="Calendar-weekday">Th</th>
            <th class="Calendar-weekday">Fr</th>
            <th class="Calendar-weekday">Sa</th>
            <th class="Calendar-weekday">Su</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td role="button" tabIndex="0" class="Calendar-day is-disabled">30</td>
            <td role="button" tabIndex="0" class="Calendar-day is-disabled">31</td>
            <td role="button" tabIndex="0" class="Calendar-day">1</td>
            <td role="button" tabIndex="0" class="Calendar-day">2</td>
            <td role="button" tabIndex="0" class="Calendar-day">3</td>
            <td role="button" tabIndex="0" class="Calendar-day">4</td>
            <td role="button" tabIndex="0" class="Calendar-day">5</td>
          </tr>
          <tr>
            <td role="button" tabIndex="0" class="Calendar-day">6</td>
            <td role="button" tabIndex="0" class="Calendar-day">7</td>
            <td role="button" tabIndex="0" class="Calendar-day">8</td>
            <td role="button" tabIndex="0" class="Calendar-day">9</td>
            <td role="button" tabIndex="0" class="Calendar-day">10</td>
            <td role="button" tabIndex="0" class="Calendar-day">11</td>
            <td role="button" tabIndex="0" class="Calendar-day">12</td>
          </tr>
          <tr>
            <td role="button" tabIndex="0" class="Calendar-day">13</td>
            <td role="button" tabIndex="0" class="Calendar-day">14</td>
            <td role="button" tabIndex="0" class="Calendar-day">15</td>
            <td role="button" tabIndex="0" class="Calendar-day">16</td>
            <td role="button" tabIndex="0" class="Calendar-day is-selected">17</td>
            <td role="button" tabIndex="0" class="Calendar-day">18</td>
            <td role="button" tabIndex="0" class="Calendar-day">19</td>
          </tr>
          <tr>
            <td role="button" tabIndex="0" class="Calendar-day">20</td>
            <td role="button" tabIndex="0" class="Calendar-day">21</td>
            <td role="button" tabIndex="0" class="Calendar-day">22</td>
            <td role="button" tabIndex="0" class="Calendar-day">23</td>
            <td role="button" tabIndex="0" class="Calendar-day">24</td>
            <td role="button" tabIndex="0" class="Calendar-day">25</td>
            <td role="button" tabIndex="0" class="Calendar-day">26</td>
          </tr>
          <tr>
            <td role="button" tabIndex="0" class="Calendar-day">27</td>
            <td role="button" tabIndex="0" class="Calendar-day">28</td>
            <td role="button" tabIndex="0" class="Calendar-day">29</td>
            <td role="button" tabIndex="0" class="Calendar-day">30</td>
            <td role="button" tabIndex="0" class="Calendar-day is-current">31</td>
            <td role="button" tabIndex="0" class="Calendar-day is-disabled">1</td>
            <td role="button" tabIndex="0" class="Calendar-day is-disabled">2</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>

{% endexample %}
