<template>
  <div class="overall-wrapper">
    <div class="top-wrapper program">
      <div class="mw">
        <div class="top-content" id="top-content">
          <div class="top-content-inside relative">
            <div class="profile-picture-container" id="profile-picture">
              <div class="mw">
                <div class="profile-picture">
                  <img
                    width="112"
                    height="112"
                    src=""
                    alt="Flat6Labs Amman Seed Program - Cycle 2"
                  />
                </div>
              </div>
            </div>
            <div class="profile-details" id="profile-details">
              <div class="cover-text">
                <h1 class="cover-title mr4">
                  Flat6Labs Amman Seed Program - Cycle 2
                </h1>
                <div data-role="force-line-break"></div>
                <div class="mw cover-blurb inline" data-mod-name="tagline">
                  Accelerating The Future
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="cover-wrapper" class="cover-wrapper">
          <div
            class="cover"
            id="cover"
            style=""
            data-full-cover-url="https://www.f6s.com/content-resource/media/1373287.jpg"
          ></div>
          <div class="cover-overlay"></div>
        </div>
      </div>
    </div>
    <div class="mw">
      <div id="csProfileMenu" class="program-menu-wrapper has-barlabel">
        <div
          id="csMenuWrapper"
          class="h-bar no-padding neo-menu-wrapper color-body"
        >
          <div class="h-bar-content neo-menu">
            <div class="permanent-content" style="width: 100%">
              <div class="team-blip-wrapper v-padding">
                <div class="stacked-thumbs thumbs">
                  <img
                    class="profile i48 u"
                    width="64"
                    height="64"
                    src=""
                    srcset=""
                  />
                </div>
                <div class="names">
                  <span class="blk t b16"> Mohammed </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="main-wrapper-t">
      <div class="main-content" id="csProfileMainContent">
        <section class="sidebar fw" id="csProfileSidebar">
          <div class="sidebar-content mobile-menu no-margin-mobile">
            <div class="mw">
              <div class="sidebar-block">
                <div class="b18 centered-text" style="margin-bottom: 10px">
                  <div>Connect by Mar 5 '22</div>
                  <div>May 1-Aug 31 '22 (4 months)</div>
                </div>
                <div class="media-area side-media has-calendar no-media"></div>
                <div class="overview-blocks">
                  <div class="location-wrapper t b16">
                    <span
                      id="csInlineLocation"
                      class="input size-b16 color-none t-main"
                    >
                      <span class="inner typable">
                        <span
                          class="attachment"
                          style="width: 13px; height: 26px"
                          ><i class="fa fa-map-marker"></i
                        ></span>
                        Egypt,Home • Virtual &amp; physical
                      </span>
                    </span>
                    <div class="separator"></div>
                  </div>
                  <div class="profile-links-wrapper t b16">
                    <div class="cover-links link-icon-container">
                      <a
                        class="link-icon link-facebook fa-facebook-square"
                        title="Flat6Labs Amman Seed Program - Cycle 2's Facebook page"
                        data-ga='{"section":"","feature":"Media Link"}'
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        href="https://www.facebook.com/flat6labs"
                      ></a>
                      <a
                        class="link-icon link-twitter fa-twitter-square"
                        title="Flat6Labs Amman Seed Program - Cycle 2's Twitter page"
                        data-ga='{"section":"","feature":"Media Link"}'
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        href="https://twitter.com/@flat6labs"
                      ></a>
                      <a
                        class="link-icon link-linkedin fa-linkedin-square"
                        title="Flat6Labs Amman Seed Program - Cycle 2's Linkedin page"
                        data-ga='{"section":"","feature":"Media Link"}'
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        href="https://www.linkedin.com/company/flat6labs"
                      ></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="mainarea" id="csBlockLoader">
          <div
            class="transition-overlay t60"
            id="csBlockLoaderTransition"
          ></div>
          <div class="tile">
            <div class="tile-banner ash-blue">
              <div>Questions</div>
              <div class="filler"></div>
            </div>
            <form
              name="csAppForm"
              data-ui="application-form"
              @submit.prevent="onFormSubmit"
            >
              <div class="form-questions form-emphasis-larger">
                <div class="application-text-section">
                  <p class="t text-section-title">
                    Section 1: Personal Overview
                  </p>
                </div>
                <ol style="counter-reset: questions 0">
                  <li class="application-field">
                    <div class="styles--3ok0- styles--3EPF6 styles--3IYUq">
                      <label class="styles--3aPac">
                        <span class="styles--1-9tY">
                          <span
                            class="styles--2TdGW styles--3Y34Z styles--33eUF"
                          >
                            <strong class="styles--2kqW6">*</strong>
                          </span>
                          <span
                            id="firstname_label"
                            class="styles--2TdGW styles--3da4O"
                          >
                            <strong class="styles--2kqW6">First name</strong>
                          </span>
                        </span>
                        <div class="styles--1tBNa">
                          <div class="styles--3qHIU">
                            <input
                              aria-required="true"
                              id="firstname"
                              maxlength="127"
                              name="firstname"
                              required=""
                              aria-labelledby="firstname_label"
                              type="text"
                              class="styles--2e9Cp"
                              value=""
                              v-model="user.firstname"
                            />
                          </div>
                        </div>
                      </label>
                    </div>
                    <div class="styles--3ok0- styles--2oFcR styles--3IYUq">
                      <label class="styles--3aPac">
                        <span class="styles--1-9tY">
                          <span
                            class="styles--2TdGW styles--3Y34Z styles--33eUF"
                          >
                            <strong class="styles--2kqW6">*</strong>
                          </span>
                          <span
                            id="lastname_label"
                            class="styles--2TdGW styles--3da4O"
                          >
                            <strong class="styles--2kqW6">Last name</strong>
                          </span>
                        </span>
                        <div class="styles--1tBNa">
                          <div class="styles--3qHIU">
                            <input
                              aria-required="true"
                              id="lastname"
                              maxlength="127"
                              data-ui="lastname"
                              name="lastname"
                              required=""
                              aria-labelledby="lastname_label"
                              type="text"
                              class="styles--2e9Cp"
                              v-model="user.lastname"
                              value=""
                            />
                          </div>
                        </div>
                      </label>
                    </div>
                  </li>
                  <li class="application-field">
                    <div class="styles--3ok0- styles--3IYUq">
                      <label class="styles--3aPac">
                        <span class="styles--1-9tY">
                          <span
                            class="styles--2TdGW styles--3Y34Z styles--33eUF"
                          >
                            <strong class="styles--2kqW6">
                              <font style="vertical-align: inherit">
                                <font style="vertical-align: inherit">* </font>
                              </font>
                            </strong>
                          </span>
                          <span
                            id="email_label"
                            class="styles--2TdGW styles--3da4O"
                          >
                            <strong class="styles--2kqW6">
                              <font style="vertical-align: inherit">
                                <font style="vertical-align: inherit"
                                  >Email address</font
                                >
                              </font>
                            </strong>
                          </span>
                        </span>
                        <div class="styles--1tBNa">
                          <div class="styles--3qHIU">
                            <input
                              aria-required="true"
                              id="email"
                              maxlength="255"
                              data-ui="email"
                              name="email"
                              required=""
                              aria-labelledby="email_label"
                              type="email"
                              class="styles--2e9Cp"
                              v-model="user.email"
                              value=""
                            />
                          </div>
                        </div>
                      </label>
                    </div>
                  </li>
                  <li class="application-field">
                    <div class="styles--3ok0- styles--3aPac styles--3IYUq">
                      <span class="styles--1-9tY">
                        <span
                          id="address_label"
                          class="styles--2TdGW styles--3da4O"
                        >
                          <strong class="styles--2kqW6">Address</strong>
                          <span
                            class="styles--3VVrr styles--19x-w styles--1LuHk"
                          >
                            (Optional)</span
                          >
                        </span>
                      </span>
                      <div class="styles--1tBNa">
                        <div class="styles--3qHIU">
                          <input
                            aria-required="true"
                            id="address"
                            maxlength="255"
                            data-ui="address"
                            name="address"
                            required="required"
                            aria-labelledby="address_label"
                            type="address"
                            value=""
                            class="styles--2e9Cp"
                            v-model="user.address"
                          />
                        </div>
                      </div>
                    </div>
                  </li>
                </ol>
              </div>
              <section class="styles--2itFq">
                <div class="styles--2oDxC">
                  <h2 id="section-1_section_name">Profile</h2>
                </div>
                <div class="styles--2uKQq">
                  <div class="styles--ArVfo">
                    <div class="styles--2Z5fi">
                      <p id="education_label">
                        Education&nbsp;
                        <small>(Optional)</small>
                      </p>
                      <button
                        data-ui="add-section"
                        aria-label="Add Education"
                        class="button--2de5X button--32xRL secondary--2ySVn"
                        v-if="showEdu"
                        @click="showEducation"
                      >
                        + Add
                      </button>
                    </div>
                    <ul>
                      <div
                        v-for="(i, index) in aryEducation"
                        v-bind:key="i"
                      >
                      <div v-bind:style="{display: 'flex'}">
                        <p>Education {{ index + 1 }}</p>
                        <div v-bind:style="{marginLeft: 'auto', display: 'flex', alignItems: 'center', cursor: 'pointer'}"
                        @click="removeEducation($event, i)"
                        >
                          <Icon icon="mdi:trash-can" />
                          <span v-bind:style="{margin: '5px'}">Delete</span>
                        </div> 
                      </div>
                          <li v-if="!showEdu" class="styles--39Oec styles--1-mi6">
                          <div data-ui="editor">
                            <div class="styles--3LPHM styles--3IYUq">
                              <label class="styles--3aPac">
                                <span class="styles--1-9tY">
                                  <span
                                    class="
                                      styles--2TdGW styles--3Y34Z styles--33eUF
                                    "
                                  >
                                    <strong class="styles--2kqW6">*</strong>
                                  </span>
                                  <span class="styles--2TdGW styles--3da4O">
                                    <strong class="styles--2kqW6"
                                      >School</strong
                                    >
                                  </span>
                                </span>
                                <div class="styles--1tBNa">
                                  <div class="styles--3qHIU">
                                    <input
                                      aria-required="true"
                                      maxlength="255"
                                      data-hj-whitelist="true"
                                      required=""
                                      type="text"
                                      class="styles--2e9Cp"
                                      value=""
                                      v-model="user.education[index].school"
                                    />
                                  </div>
                                </div>
                              </label>
                            </div>
                            <div class="styles--3LPHM styles--3IYUq">
                              <label class="styles--3aPac">
                                <span class="styles--1-9tY">
                                  <span
                                    id="field_of_study_label"
                                    class="styles--2TdGW styles--3da4O"
                                  >
                                    <strong class="styles--2kqW6">
                                      Field of study</strong
                                    >
                                  </span>
                                  <span
                                    class="
                                      styles--3VVrr styles--19x-w styles--1LuHk
                                    "
                                  >
                                    (Optional)</span
                                  >
                                </span>
                                <div class="styles--1tBNa">
                                  <div class="styles--3qHIU">
                                    <input
                                      aria-required="true"
                                      maxlength="255"
                                      data-hj-whitelist="true"
                                      type="text"
                                      class="styles--2e9Cp"
                                      value=""
                                      v-model="user.education[index].fieldOfStudy"
                                    />
                                  </div>
                                </div>
                              </label>
                            </div>
                            <div class="styles--3LPHM styles--3IYUq">
                              <label class="styles--3aPac">
                                <span class="styles--1-9tY">
                                  <span
                                    id="field_of_study_label"
                                    class="styles--2TdGW styles--3da4O"
                                  >
                                    <strong class="styles--2kqW6">
                                      Degree</strong
                                    >
                                  </span>
                                  <span
                                    class="
                                      styles--3VVrr styles--19x-w styles--1LuHk
                                    "
                                  >
                                    (Optional)</span
                                  >
                                </span>
                                <div class="styles--1tBNa">
                                  <div class="styles--3qHIU">
                                    <input
                                      aria-required="true"
                                      maxlength="255"
                                      data-hj-whitelist="true"
                                      type="text"
                                      class="styles--2e9Cp"
                                      value=""
                                      v-model="user.education[index].degree"
                                    />
                                  </div>
                                </div>
                              </label>
                            </div>
                            <div
                              class="styles--3LPHM styles--2RhEK styles--3IYUq"
                            >
                              <label class="styles--3aPac">
                                <span class="styles--1-9tY">
                                  <span
                                    id="field_of_study_label"
                                    class="styles--2TdGW styles--3da4O"
                                  >
                                    <strong class="styles--2kqW6">
                                      Start date</strong
                                    >
                                  </span>
                                  <span
                                    class="
                                      styles--3VVrr styles--19x-w styles--1LuHk
                                    "
                                  >
                                    (Optional)</span
                                  >
                                </span>
                                <div class="react-datepicker-wrapper">
                                  <div
                                    class="react-datepicker__input-container"
                                  >
                                    <div class="styles--1tBNa">
                                      <div class="styles--3qHIU">
                                        <div
                                          class="up-dropdown-icon up-icon sm"
                                        >
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            aria-hidden="true"
                                            viewBox="0 0 14 14"
                                            role="img"
                                          >
                                            <path
                                              d="M.37 5l5.75 5.92a1.23 1.23 0 001.78 0L13.64 5a1.31 1.31 0 000-1.83 1.27 1.27 0 00-.86-.37H1.25A1.27 1.27 0 000 4a1.28 1.28 0 00.37 1z"
                                            ></path>
                                          </svg>
                                        </div>
                                        <select
                                          aria-required="true"
                                          maxlength="255"
                                          data-hj-whitelist="true"
                                          type="text"
                                          class="styles--2e9Cp"
                                          v-model="user.education[index].startDate"
                                        >
                                          <option value="" hidden="">
                                            From
                                          </option>
                                          <option role="option">2022</option>
                                          <option role="option">2021</option>
                                          <option role="option">2020</option>
                                          <option role="option">2019</option>
                                          <option role="option">2018</option>
                                          <option role="option">2017</option>
                                          <option role="option">2016</option>
                                          <option role="option">2015</option>
                                          <option role="option">2014</option>
                                          <option role="option">2013</option>
                                          <option role="option">2012</option>
                                          <option role="option">2011</option>
                                          <option role="option">2010</option>
                                          <option role="option">2009</option>
                                          <option role="option">2008</option>
                                          <option role="option">2007</option>
                                          <option role="option">2006</option>
                                          <option role="option">2005</option>
                                          <option role="option">2004</option>
                                          <option role="option">2003</option>
                                          <option role="option">2002</option>
                                          <option role="option">2001</option>
                                          <option role="option">2000</option>
                                          <option role="option">1999</option>
                                          <option role="option">1998</option>
                                          <option role="option">1997</option>
                                          <option role="option">1996</option>
                                          <option role="option">1995</option>
                                          <option role="option">1994</option>
                                          <option role="option">1993</option>
                                          <option role="option">1992</option>
                                          <option role="option">1991</option>
                                          <option role="option">1990</option>
                                          <option role="option">1989</option>
                                          <option role="option">1988</option>
                                          <option role="option">1987</option>
                                          <option role="option">1986</option>
                                          <option role="option">1985</option>
                                          <option role="option">1984</option>
                                          <option role="option">1983</option>
                                          <option role="option">1982</option>
                                          <option role="option">1981</option>
                                          <option role="option">1980</option>
                                          <option role="option">1979</option>
                                          <option role="option">1978</option>
                                          <option role="option">1977</option>
                                          <option role="option">1976</option>
                                          <option role="option">1975</option>
                                          <option role="option">1974</option>
                                          <option role="option">1973</option>
                                          <option role="option">1972</option>
                                          <option role="option">1971</option>
                                          <option role="option">1970</option>
                                          <option role="option">1969</option>
                                          <option role="option">1968</option>
                                          <option role="option">1967</option>
                                          <option role="option">1966</option>
                                          <option role="option">1965</option>
                                          <option role="option">1964</option>
                                          <option role="option">1963</option>
                                          <option role="option">1962</option>
                                          <option role="option">1961</option>
                                          <option role="option">1960</option>
                                          <option role="option">1959</option>
                                          <option role="option">1958</option>
                                          <option role="option">1957</option>
                                          <option role="option">1956</option>
                                          <option role="option">1955</option>
                                          <option role="option">1954</option>
                                          <option role="option">1953</option>
                                          <option role="option">1952</option>
                                          <option role="option">1951</option>
                                          <option role="option">1950</option>
                                          <option role="option">1949</option>
                                          <option role="option">1948</option>
                                          <option role="option">1947</option>
                                          <option role="option">1946</option>
                                          <option role="option">1945</option>
                                          <option role="option">1944</option>
                                          <option role="option">1943</option>
                                          <option role="option">1942</option>
                                          <option role="option">1941</option>
                                          <option role="option">1940</option>
                                        </select>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </label>
                            </div>
                            <div
                              class="styles--3LPHM styles--3-0gZ styles--3IYUq"
                            >
                              <label class="styles--3aPac">
                                <span class="styles--1-9tY">
                                  <span
                                    id="field_of_study_label"
                                    class="styles--2TdGW styles--3da4O"
                                  >
                                    <strong class="styles--2kqW6">
                                      End date</strong
                                    >
                                  </span>
                                  <span
                                    class="
                                      styles--3VVrr styles--19x-w styles--1LuHk
                                    "
                                  >
                                    (Optional)</span
                                  >
                                </span>
                                <div class="react-datepicker-wrapper">
                                  <div
                                    class="react-datepicker__input-container"
                                  >
                                    <div class="styles--1tBNa">
                                      <div class="styles--3qHIU">
                                        <div
                                          class="up-dropdown-icon up-icon sm"
                                        >
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            aria-hidden="true"
                                            viewBox="0 0 14 14"
                                            role="img"
                                          >
                                            <path
                                              d="M.37 5l5.75 5.92a1.23 1.23 0 001.78 0L13.64 5a1.31 1.31 0 000-1.83 1.27 1.27 0 00-.86-.37H1.25A1.27 1.27 0 000 4a1.28 1.28 0 00.37 1z"
                                            ></path>
                                          </svg>
                                        </div>
                                        <select
                                          aria-required="true"
                                          maxlength="255"
                                          data-hj-whitelist="true"
                                          type="text"
                                          class="styles--2e9Cp"
                                          v-model="user.education[index].endDate"
                                        >
                                          <option value="" hidden="">To</option>
                                          <option role="option">2029</option>
                                          <option role="option">2028</option>
                                          <option role="option">2027</option>
                                          <option role="option">2026</option>
                                          <option role="option">2025</option>
                                          <option role="option">2024</option>
                                          <option role="option">2023</option>
                                          <option role="option">2022</option>
                                          <option role="option">2021</option>
                                          <option role="option">2020</option>
                                          <option role="option">2019</option>
                                          <option role="option">2018</option>
                                          <option role="option">2017</option>
                                          <option role="option">2016</option>
                                          <option role="option">2015</option>
                                          <option role="option">2014</option>
                                          <option role="option">2013</option>
                                          <option role="option">2012</option>
                                          <option role="option">2011</option>
                                          <option role="option">2010</option>
                                          <option role="option">2009</option>
                                          <option role="option">2008</option>
                                          <option role="option">2007</option>
                                          <option role="option">2006</option>
                                          <option role="option">2005</option>
                                          <option role="option">2004</option>
                                          <option role="option">2003</option>
                                          <option role="option">2002</option>
                                          <option role="option">2001</option>
                                          <option role="option">2000</option>
                                          <option role="option">1999</option>
                                          <option role="option">1998</option>
                                          <option role="option">1997</option>
                                          <option role="option">1996</option>
                                          <option role="option">1995</option>
                                          <option role="option">1994</option>
                                          <option role="option">1993</option>
                                          <option role="option">1992</option>
                                          <option role="option">1991</option>
                                          <option role="option">1990</option>
                                          <option role="option">1989</option>
                                          <option role="option">1988</option>
                                          <option role="option">1987</option>
                                          <option role="option">1986</option>
                                          <option role="option">1985</option>
                                          <option role="option">1984</option>
                                          <option role="option">1983</option>
                                          <option role="option">1982</option>
                                          <option role="option">1981</option>
                                          <option role="option">1980</option>
                                          <option role="option">1979</option>
                                          <option role="option">1978</option>
                                          <option role="option">1977</option>
                                          <option role="option">1976</option>
                                          <option role="option">1975</option>
                                          <option role="option">1974</option>
                                          <option role="option">1973</option>
                                          <option role="option">1972</option>
                                          <option role="option">1971</option>
                                          <option role="option">1970</option>
                                          <option role="option">1969</option>
                                          <option role="option">1968</option>
                                          <option role="option">1967</option>
                                          <option role="option">1966</option>
                                          <option role="option">1965</option>
                                          <option role="option">1964</option>
                                          <option role="option">1963</option>
                                          <option role="option">1962</option>
                                          <option role="option">1961</option>
                                          <option role="option">1960</option>
                                          <option role="option">1959</option>
                                          <option role="option">1958</option>
                                          <option role="option">1957</option>
                                          <option role="option">1956</option>
                                          <option role="option">1955</option>
                                          <option role="option">1954</option>
                                          <option role="option">1953</option>
                                          <option role="option">1952</option>
                                          <option role="option">1951</option>
                                          <option role="option">1950</option>
                                          <option role="option">1949</option>
                                          <option role="option">1948</option>
                                          <option role="option">1947</option>
                                          <option role="option">1946</option>
                                          <option role="option">1945</option>
                                          <option role="option">1944</option>
                                          <option role="option">1943</option>
                                          <option role="option">1942</option>
                                          <option role="option">1941</option>
                                          <option role="option">1940</option>
                                        </select>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </label>
                            </div>
                            <div class="styles--3wmD1">
                              <button
                                data-ui="save-section"
                                class="
                                  button--2de5X button--14TuV
                                  primary--25RCR
                                "
                              >
                                Save
                              </button>
                              <button
                                class="
                                  button--2de5X button--14TuV
                                  tertiary--1L6hu
                                  styles--1hvTZ
                                "
                                data-ui="cancel-section"
                                @click="showEducation"
                              >
                                Cancel
                              </button>
                            </div>
                          </div>
                        </li>
                      </div>
                      <v-btn @click="increaseEducation" v-if="aryEducation.length > 0" v-bind:style="{margin: '20px 5px'}">Add another</v-btn>
                      <li class="styles--2SPgS">
                        <div data-ui="group">
                          <dl>
                            <dt>School</dt>
                            <dd class="styles--1J0du" data-ui="school">
                              <span>vcccccccccc</span>
                            </dd>
                          </dl>
                          <dl>
                            <dt>Field of study</dt>
                            <dd class="styles--1J0du" data-ui="field_of_study">
                              <span>cccccc</span>
                            </dd>
                          </dl>
                          <dl>
                            <dt>Degree</dt>
                            <dd class="styles--1J0du" data-ui="degree">
                              <span>cvvvvvvvv</span>
                            </dd>
                          </dl>
                          <dl data-ui="date-range">
                            <dt>Period</dt>
                            <dd class="styles--1J0du" data-ui="period">
                              <span>February 2022 - February 2022</span>
                              <span class="styles--1JeR2">(about 1 month)</span>
                            </dd>
                          </dl>
                          <div class="styles--Jt82u">
                            <div>
                              <a
                                data-ui="edit-section"
                                title="Edit"
                                aria-label="Edit vcccccccccc"
                                class="styles--jQpn9"
                                tabindex="0"
                                role="button"
                              >
                                <svg><use xlink:href="#pencil16"></use></svg
                              ></a>
                              <a
                                data-ui="remove-section"
                                title="Delete"
                                aria-label="Delete vcccccccccc"
                                class="styles--jQpn9"
                                tabindex="0"
                                role="button"
                                ><svg><use xlink:href="#trash16"></use></svg
                              ></a>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class="styles--ArVfo">
                    <div class="styles--2Z5fi">
                      <p id="education_label">
                        Experience&nbsp;
                        <small>(Optional)</small>
                      </p>
                      <button
                        data-ui="add-section"
                        aria-label="Add Experience"
                        class="button--2de5X button--32xRL secondary--2ySVn"
                        :disabled="!showExp"
                        @click="showExperience"
                        :aria-disabled="!showExp"
                      >
                        + Add
                      </button>
                    </div>
                    <ul>
                      <li v-if="!showExp" class="styles--39Oec styles--1-mi6">
                        <div data-ui="editor">
                          <div class="styles--3LPHM styles--3IYUq">
                            <label class="styles--3aPac">
                              <span class="styles--1-9tY">
                                <span
                                  class="
                                    styles--2TdGW styles--3Y34Z styles--33eUF
                                  "
                                >
                                  <strong class="styles--2kqW6">*</strong>
                                </span>
                                <span class="styles--2TdGW styles--3da4O">
                                  <strong class="styles--2kqW6">School</strong>
                                </span>
                              </span>
                              <div class="styles--1tBNa">
                                <div class="styles--3qHIU">
                                  <input
                                    aria-required="true"
                                    maxlength="255"
                                    data-hj-whitelist="true"
                                    required=""
                                    type="text"
                                    class="styles--2e9Cp"
                                    value=""
                                  />
                                </div>
                              </div>
                            </label>
                          </div>
                          <div class="styles--3LPHM styles--3IYUq">
                            <label class="styles--3aPac">
                              <span class="styles--1-9tY">
                                <span
                                  id="field_of_study_label"
                                  class="styles--2TdGW styles--3da4O"
                                >
                                  <strong class="styles--2kqW6">
                                    Field of study</strong
                                  >
                                </span>
                                <span
                                  class="
                                    styles--3VVrr styles--19x-w styles--1LuHk
                                  "
                                >
                                  (Optional)</span
                                >
                              </span>
                              <div class="styles--1tBNa">
                                <div class="styles--3qHIU">
                                  <input
                                    aria-required="true"
                                    maxlength="255"
                                    data-hj-whitelist="true"
                                    type="text"
                                    class="styles--2e9Cp"
                                    value=""
                                  />
                                </div>
                              </div>
                            </label>
                          </div>
                          <div class="styles--3LPHM styles--3IYUq">
                            <label class="styles--3aPac">
                              <span class="styles--1-9tY">
                                <span
                                  id="field_of_study_label"
                                  class="styles--2TdGW styles--3da4O"
                                >
                                  <strong class="styles--2kqW6"> Degree</strong>
                                </span>
                                <span
                                  class="
                                    styles--3VVrr styles--19x-w styles--1LuHk
                                  "
                                >
                                  (Optional)</span
                                >
                              </span>
                              <div class="styles--1tBNa">
                                <div class="styles--3qHIU">
                                  <input
                                    aria-required="true"
                                    maxlength="255"
                                    data-hj-whitelist="true"
                                    type="text"
                                    class="styles--2e9Cp"
                                    value=""
                                  />
                                </div>
                              </div>
                            </label>
                          </div>
                          <div
                            class="styles--3LPHM styles--2RhEK styles--3IYUq"
                          >
                            <label class="styles--3aPac">
                              <span class="styles--1-9tY">
                                <span
                                  id="field_of_study_label"
                                  class="styles--2TdGW styles--3da4O"
                                >
                                  <strong class="styles--2kqW6">
                                    Start date</strong
                                  >
                                </span>
                                <span
                                  class="
                                    styles--3VVrr styles--19x-w styles--1LuHk
                                  "
                                >
                                  (Optional)</span
                                >
                              </span>
                              <div class="react-datepicker-wrapper">
                                <div class="react-datepicker__input-container">
                                  <div class="styles--1tBNa">
                                    <div class="styles--3qHIU">
                                      <div class="up-dropdown-icon up-icon sm">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          aria-hidden="true"
                                          viewBox="0 0 14 14"
                                          role="img"
                                        >
                                          <path
                                            d="M.37 5l5.75 5.92a1.23 1.23 0 001.78 0L13.64 5a1.31 1.31 0 000-1.83 1.27 1.27 0 00-.86-.37H1.25A1.27 1.27 0 000 4a1.28 1.28 0 00.37 1z"
                                          ></path>
                                        </svg>
                                      </div>
                                      <select
                                        aria-required="true"
                                        maxlength="255"
                                        data-hj-whitelist="true"
                                        type="text"
                                        class="styles--2e9Cp"
                                      >
                                        <option value="" hidden="">From</option>
                                        <option role="option">2022</option>
                                        <option role="option">2021</option>
                                        <option role="option">2020</option>
                                        <option role="option">2019</option>
                                        <option role="option">2018</option>
                                        <option role="option">2017</option>
                                        <option role="option">2016</option>
                                        <option role="option">2015</option>
                                        <option role="option">2014</option>
                                        <option role="option">2013</option>
                                        <option role="option">2012</option>
                                        <option role="option">2011</option>
                                        <option role="option">2010</option>
                                        <option role="option">2009</option>
                                        <option role="option">2008</option>
                                        <option role="option">2007</option>
                                        <option role="option">2006</option>
                                        <option role="option">2005</option>
                                        <option role="option">2004</option>
                                        <option role="option">2003</option>
                                        <option role="option">2002</option>
                                        <option role="option">2001</option>
                                        <option role="option">2000</option>
                                        <option role="option">1999</option>
                                        <option role="option">1998</option>
                                        <option role="option">1997</option>
                                        <option role="option">1996</option>
                                        <option role="option">1995</option>
                                        <option role="option">1994</option>
                                        <option role="option">1993</option>
                                        <option role="option">1992</option>
                                        <option role="option">1991</option>
                                        <option role="option">1990</option>
                                        <option role="option">1989</option>
                                        <option role="option">1988</option>
                                        <option role="option">1987</option>
                                        <option role="option">1986</option>
                                        <option role="option">1985</option>
                                        <option role="option">1984</option>
                                        <option role="option">1983</option>
                                        <option role="option">1982</option>
                                        <option role="option">1981</option>
                                        <option role="option">1980</option>
                                        <option role="option">1979</option>
                                        <option role="option">1978</option>
                                        <option role="option">1977</option>
                                        <option role="option">1976</option>
                                        <option role="option">1975</option>
                                        <option role="option">1974</option>
                                        <option role="option">1973</option>
                                        <option role="option">1972</option>
                                        <option role="option">1971</option>
                                        <option role="option">1970</option>
                                        <option role="option">1969</option>
                                        <option role="option">1968</option>
                                        <option role="option">1967</option>
                                        <option role="option">1966</option>
                                        <option role="option">1965</option>
                                        <option role="option">1964</option>
                                        <option role="option">1963</option>
                                        <option role="option">1962</option>
                                        <option role="option">1961</option>
                                        <option role="option">1960</option>
                                        <option role="option">1959</option>
                                        <option role="option">1958</option>
                                        <option role="option">1957</option>
                                        <option role="option">1956</option>
                                        <option role="option">1955</option>
                                        <option role="option">1954</option>
                                        <option role="option">1953</option>
                                        <option role="option">1952</option>
                                        <option role="option">1951</option>
                                        <option role="option">1950</option>
                                        <option role="option">1949</option>
                                        <option role="option">1948</option>
                                        <option role="option">1947</option>
                                        <option role="option">1946</option>
                                        <option role="option">1945</option>
                                        <option role="option">1944</option>
                                        <option role="option">1943</option>
                                        <option role="option">1942</option>
                                        <option role="option">1941</option>
                                        <option role="option">1940</option>
                                      </select>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </label>
                          </div>
                          <div
                            class="styles--3LPHM styles--3-0gZ styles--3IYUq"
                          >
                            <label class="styles--3aPac">
                              <span class="styles--1-9tY">
                                <span
                                  id="field_of_study_label"
                                  class="styles--2TdGW styles--3da4O"
                                >
                                  <strong class="styles--2kqW6">
                                    End date</strong
                                  >
                                </span>
                                <span
                                  class="
                                    styles--3VVrr styles--19x-w styles--1LuHk
                                  "
                                >
                                  (Optional)</span
                                >
                              </span>
                              <div class="react-datepicker-wrapper">
                                <div class="react-datepicker__input-container">
                                  <div class="styles--1tBNa">
                                    <div class="styles--3qHIU">
                                      <div class="up-dropdown-icon up-icon sm">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          aria-hidden="true"
                                          viewBox="0 0 14 14"
                                          role="img"
                                        >
                                          <path
                                            d="M.37 5l5.75 5.92a1.23 1.23 0 001.78 0L13.64 5a1.31 1.31 0 000-1.83 1.27 1.27 0 00-.86-.37H1.25A1.27 1.27 0 000 4a1.28 1.28 0 00.37 1z"
                                          ></path>
                                        </svg>
                                      </div>
                                      <select
                                        aria-required="true"
                                        maxlength="255"
                                        data-hj-whitelist="true"
                                        type="text"
                                        class="styles--2e9Cp"
                                      >
                                        <option value="" hidden="">To</option>
                                        <option role="option">2029</option>
                                        <option role="option">2028</option>
                                        <option role="option">2027</option>
                                        <option role="option">2026</option>
                                        <option role="option">2025</option>
                                        <option role="option">2024</option>
                                        <option role="option">2023</option>
                                        <option role="option">2022</option>
                                        <option role="option">2021</option>
                                        <option role="option">2020</option>
                                        <option role="option">2019</option>
                                        <option role="option">2018</option>
                                        <option role="option">2017</option>
                                        <option role="option">2016</option>
                                        <option role="option">2015</option>
                                        <option role="option">2014</option>
                                        <option role="option">2013</option>
                                        <option role="option">2012</option>
                                        <option role="option">2011</option>
                                        <option role="option">2010</option>
                                        <option role="option">2009</option>
                                        <option role="option">2008</option>
                                        <option role="option">2007</option>
                                        <option role="option">2006</option>
                                        <option role="option">2005</option>
                                        <option role="option">2004</option>
                                        <option role="option">2003</option>
                                        <option role="option">2002</option>
                                        <option role="option">2001</option>
                                        <option role="option">2000</option>
                                        <option role="option">1999</option>
                                        <option role="option">1998</option>
                                        <option role="option">1997</option>
                                        <option role="option">1996</option>
                                        <option role="option">1995</option>
                                        <option role="option">1994</option>
                                        <option role="option">1993</option>
                                        <option role="option">1992</option>
                                        <option role="option">1991</option>
                                        <option role="option">1990</option>
                                        <option role="option">1989</option>
                                        <option role="option">1988</option>
                                        <option role="option">1987</option>
                                        <option role="option">1986</option>
                                        <option role="option">1985</option>
                                        <option role="option">1984</option>
                                        <option role="option">1983</option>
                                        <option role="option">1982</option>
                                        <option role="option">1981</option>
                                        <option role="option">1980</option>
                                        <option role="option">1979</option>
                                        <option role="option">1978</option>
                                        <option role="option">1977</option>
                                        <option role="option">1976</option>
                                        <option role="option">1975</option>
                                        <option role="option">1974</option>
                                        <option role="option">1973</option>
                                        <option role="option">1972</option>
                                        <option role="option">1971</option>
                                        <option role="option">1970</option>
                                        <option role="option">1969</option>
                                        <option role="option">1968</option>
                                        <option role="option">1967</option>
                                        <option role="option">1966</option>
                                        <option role="option">1965</option>
                                        <option role="option">1964</option>
                                        <option role="option">1963</option>
                                        <option role="option">1962</option>
                                        <option role="option">1961</option>
                                        <option role="option">1960</option>
                                        <option role="option">1959</option>
                                        <option role="option">1958</option>
                                        <option role="option">1957</option>
                                        <option role="option">1956</option>
                                        <option role="option">1955</option>
                                        <option role="option">1954</option>
                                        <option role="option">1953</option>
                                        <option role="option">1952</option>
                                        <option role="option">1951</option>
                                        <option role="option">1950</option>
                                        <option role="option">1949</option>
                                        <option role="option">1948</option>
                                        <option role="option">1947</option>
                                        <option role="option">1946</option>
                                        <option role="option">1945</option>
                                        <option role="option">1944</option>
                                        <option role="option">1943</option>
                                        <option role="option">1942</option>
                                        <option role="option">1941</option>
                                        <option role="option">1940</option>
                                      </select>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </label>
                          </div>
                          <div class="styles--3wmD1">
                            <button
                              data-ui="save-section"
                              class="button--2de5X button--14TuV primary--25RCR"
                            >
                              Save
                            </button>
                            <button
                              class="
                                button--2de5X button--14TuV
                                tertiary--1L6hu
                                styles--1hvTZ
                              "
                              data-ui="cancel-section"
                              @click="showExperience"
                            >
                              Cancel
                            </button>
                          </div>
                        </div>
                      </li>
                      <li class="styles--2SPgS">
                        <div data-ui="group">
                          <dl>
                            <dt>School</dt>
                            <dd class="styles--1J0du" data-ui="school">
                              <span>vcccccccccc</span>
                            </dd>
                          </dl>
                          <dl>
                            <dt>Field of study</dt>
                            <dd class="styles--1J0du" data-ui="field_of_study">
                              <span>cccccc</span>
                            </dd>
                          </dl>
                          <dl>
                            <dt>Degree</dt>
                            <dd class="styles--1J0du" data-ui="degree">
                              <span>cvvvvvvvv</span>
                            </dd>
                          </dl>
                          <dl data-ui="date-range">
                            <dt>Period</dt>
                            <dd class="styles--1J0du" data-ui="period">
                              <span>February 2022 - February 2022</span>
                              <span class="styles--1JeR2">(about 1 month)</span>
                            </dd>
                          </dl>
                          <div class="styles--Jt82u">
                            <div>
                              <a
                                data-ui="edit-section"
                                title="Edit"
                                aria-label="Edit vcccccccccc"
                                class="styles--jQpn9"
                                tabindex="0"
                                role="button"
                              >
                                <svg><use xlink:href="#pencil16"></use></svg
                              ></a>
                              <a
                                data-ui="remove-section"
                                title="Delete"
                                aria-label="Delete vcccccccccc"
                                class="styles--jQpn9"
                                tabindex="0"
                                role="button"
                                ><svg><use xlink:href="#trash16"></use></svg
                              ></a>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
              <div id="submit-label">
                <span class="b14 t-primary">
                  Are you done? Click below to finalize
                </span>
              </div>
              <div class="form-submitter" style="max-width: 600px">
                <button
                  @submit.prevent="onFormSubmit"
                  type="submit"
                  id="csApplicationSubmit"
                  class="
                    component
                    button
                    cs-application-submit
                    nopadding
                    connect-application
                    full-width
                    color-green
                    size-large
                  "
                >
                  <span class="caption">
                    <span class="title"
                      >Connect with <br />Omar, Rasha &amp; Rawan</span
                    >
                  </span>
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "@/firebase.js";
import { Icon } from '@iconify/vue2';

export default {
  components: {
    Icon
  },
  data() {
    var educationInterface = {
      school: '',
      fieldOfStudy: '',
      degree: '',
      startDate: '',
      endDate: ''
    }
    return {
      user: {education:[educationInterface]},
      showEdu: true,
      showExp: true,
      aryEducation: [],
      
    };
  },
  methods: {
    onFormSubmit(event) {
      event.preventDefault();
      db.collection("users")
        .add(this.user)
        .then(() => {
          alert("User successfully created!");
          this.user.firstname = "";
          this.user.lastname = "";
          this.user.email = "";
          this.user.address = "";
          this.user.education = [];
        })
        .catch((error) => {
          console.log(error);
        });
    },
    showEducation() {
      this.showEdu = !this.showEdu;
      this.aryEducation.push(this.aryEducation.length);
    },
    showExperience() {
      this.showExp = !this.showExp;
    },
    increaseEducation(e) {
      e.preventDefault;
      this.user.education.push([])
      this.aryEducation.push(this.aryEducation.length);
    },
    removeEducation(e, i) {
      e.preventDefault;
      var index = this.aryEducation.indexOf(i)
      this.aryEducation.splice(index, 1)
      this.aryEducation.length == 0 ? this.showEdu = true : {}
    },
  },
};
</script>





<style>
@import url(https://cdn.syncfusion.com/ej2/material.css);

li {
  list-style: none;
}

.width-350 {
  width: 250px;
}

.e-dropdownbase.e-dd-group .e-list-item {
  padding-left: 1em;
}

.e-dropdownbase .e-list-item.e-item-focus {
  background: transparent;
}
.e-dropdownbase .e-list-item:hover {
  background: #eee;
}
.e-input-group:not(.e-float-icon-left),
.e-input-group.e-success:not(.e-float-icon-left),
.e-input-group.e-warning:not(.e-float-icon-left),
.e-input-group.e-error:not(.e-float-icon-left),
.e-input-group.e-control-wrapper:not(.e-float-icon-left),
.e-input-group.e-control-wrapper.e-success:not(.e-float-icon-left),
.e-input-group.e-control-wrapper.e-warning:not(.e-float-icon-left),
.e-input-group.e-control-wrapper.e-error:not(.e-float-icon-left) {
}

.styles--3ok0-.styles--3EPF6 {
  box-sizing: border-box;
  display: inline-block;
  max-width: 50%;
  padding-right: 12px;
  vertical-align: top;
}
.styles--3ok0-.styles--2oFcR {
  box-sizing: border-box;
  display: inline-block;
  max-width: 50%;
  padding-left: 12px;
  vertical-align: top;
}
.styles--3IYUq {
  width: 100%;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
}
.styles--3ok0- {
  padding-bottom: 0;
}
.styles--3aPac {
  -ms-flex-positive: 1;
  flex-grow: 1;
}

label,
p,
ul,
ol {
  color: #333e49;
  font-size: 14px;
  letter-spacing: normal;
  line-height: 1.5;
}
.styles--3aPac > .styles--1-9tY {
  margin-bottom: 8px;
}
.styles--1-9tY {
  display: block;
  min-height: 19px;
}
.styles--3Y34Z {
  width: 7px;
  padding-right: 2px;
}
.styles--2TdGW {
  font-stretch: normal;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu,
    "Helvetica Neue", sans-serif;
  font-size: 14px;
  text-rendering: geometricPrecision;
  letter-spacing: normal;
  -webkit-font-smoothing: antialiased;
  line-height: normal;
  font-style: normal;
  font-variant-ligatures: normal;
  font-variant-caps: normal;
  font-variant-numeric: normal;
  font-variant-east-asian: normal;
  word-spacing: normal;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  -webkit-writing-mode: horizontal-tb !important;
}
.styles--33eUF {
  color: #d5351a;
}
.styles--2kqW6 {
  font-weight: 600 !important;
}
.styles--3da4O {
  color: #333e49;
}
.styles--1tBNa {
  color: #333e49;
}
.styles--1tBNa {
  border-radius: 4px;
  border: solid 1px #c4cfde;
  transition: border-color 0.2s ease-in;
  background-color: white;
}
.styles--3qHIU {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: center;
  justify-content: center;
  vertical-align: middle;
  -ms-flex-direction: row;
  flex-direction: row;
}
.styles--2e9Cp:focus {
  box-shadow: none !important;
  outline: none !important;
  border: solid 0px transparent !important;
}
.styles--2e9Cp {
  box-shadow: none !important;
  outline: none !important;
}
.styles--1tBNa textarea,
.styles--1tBNa input,
.styles--1tBNa textarea,
.styles--1tBNa select {
  font-stretch: normal;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu,
    "Helvetica Neue", sans-serif;
  font-size: 14px;
  text-rendering: geometricPrecision;
  letter-spacing: normal;
  -webkit-font-smoothing: antialiased;
  line-height: normal;
  font-style: normal;
  font-variant-ligatures: normal;
  font-variant-caps: normal;
  font-variant-numeric: normal;
  font-variant-east-asian: normal;
  word-spacing: normal;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  -webkit-writing-mode: horizontal-tb !important;
  color: inherit;
  background-color: transparent;
  border-color: transparent;
  padding: 11px 10px;
  box-sizing: border-box;
  min-width: 3em;
}
.styles--3ok0- input,
.styles--3ok0- select {
  padding: 8px;
}
.styles--2e9Cp {
  margin: 0;
  border: 0;
  padding: 0;
  display: inline-block;
  vertical-align: middle;
  white-space: normal;
  line-height: 1;
}
.styles--2e9Cp {
  box-sizing: content-box;
}
.styles--3qHIU > * {
  -ms-flex-positive: 1;
  flex-grow: 1;
}

.e-list-item.e-active {
}
.e-list-item.e-active:before {
  font-family: FontAwesome;
  content: "\f00c";
  position: absolute;
  right: 7px;
}
.top-wrapper {
  position: relative;
}
.top-wrapper.program .top-content {
  position: relative;
}
.top-wrapper.program .top-content .top-content-inside {
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-align-items: center;
  -ms-align-items: center;
  align-items: center;
}
.top-wrapper .top-content .top-content-inside {
  max-width: 1180px;
  margin: auto;
  padding-left: 10px;
  padding-right: 10px;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: -ms-flex;
  display: flex;
  -webkit-flex-wrap: nowrap;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  -webkit-justify-content: space-between;
  -ms-justify-content: space-between;
  justify-content: space-between;
}

@media (min-width: 480px) {
  .top-wrapper .top-content .top-content-inside {
    padding-left: 10px;
    padding-right: 10px;
  }
}
@media (min-width: 1024px) {
  .top-wrapper .top-content .top-content-inside {
    padding-left: 40px;
    padding-right: 40px;
  }
}
.top-wrapper.program .top-content-inside {
  padding-top: 50px;
  padding-bottom: 50px;
}
.top-content-inside.relative {
  position: relative;
  z-index: 5;
}
.top-wrapper .top-content .top-content-inside .profile-picture-container {
  -webkit-flex: none;
  -ms-flex: none;
  flex: none;
  min-width: 0;
  position: relative;
  z-index: 10;
}
.top-wrapper.program .top-content .top-content-inside > * {
  text-align: center;
}
.top-wrapper.program .top-content .top-content-inside > :not(:last-child) {
  margin-bottom: 15px;
}
.top-wrapper.program .top-content-inside > * {
  margin-bottom: 0 !important;
}
.top-content .profile-picture-container {
  box-sizing: border-box;
  width: 112px;
  height: 112px;
  padding: 0;
  border: 1px solid #fff;
  background-color: #fff;
  border-radius: 3px;
}
.profile-picture {
  z-index: 11;
  background: #d5d5d5;
  border: 1px solid #cbbbbb;
}
.top-content .profile-picture-container .profile-picture img {
  border-radius: 3px;
  top: 10px;
  position: relative;
}
.profile-picture img {
  max-width: 100%;
  width: 100%;
  height: auto;
}
img {
  color: transparent;
  font-size: 0;
  vertical-align: middle;
  -ms-interpolation-mode: bicubic;
}
.top-wrapper.program .top-content .top-content-inside .profile-details {
  -webkit-align-self: stretch;
  -ms-align-self: stretch;
  align-self: stretch;
}
.top-wrapper.program .top-content-inside > :not(:first-child) {
  margin-top: 14px !important;
}
.top-wrapper.program .top-content-inside .cover-text > :not(:last-child) {
  margin-bottom: 4px;
}
h1.cover-title,
h2.cover-title {
  margin: 0;
  padding: 0;
  font-size: 32px;
  line-height: 1.16;
  font-weight: 600;
  color: #333;
  color: #fff;
}
.cover-text > * {
  position: relative;
  z-index: 10;
}
.cover-blurb.inline {
  display: inline-block;
}
.cover-blurb {
  font-size: 21px;
  line-height: 1.6;
  font-weight: 400;
  color: #333;
  color: #fff;
  word-break: break-word;
}
.top-wrapper.program .cover-wrapper {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.top-wrapper .cover-wrapper {
  background-color: #414141;
}
.top-wrapper .cover-wrapper .cover {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  background-repeat: no-repeat;
  background-position: top;
  background-size: cover;
}
.top-wrapper.program .cover-wrapper .cover-overlay {
  top: 0;
  background-color: rgba(14, 14, 14, 0.6);
}
.top-wrapper .cover-wrapper .cover-overlay {
  position: absolute;
  z-index: 4;
  right: 0;
  bottom: 0;
  left: 0;
}
@media (min-width: 768px) {
  .program-menu-wrapper {
    min-height: 66px;
  }
}
.h-bar.neo-menu-wrapper:not(.color-white) {
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}
.h-bar:not(.left-align),
.h-bar:not(.left-align) .h-bar-content {
  -webkit-align-items: center;
  -ms-align-items: center;
  align-items: center;
}
.h-bar.color-body,
.h-bar.color-body .fade-sides {
  background-color: #f2f2f2;
}

.h-bar {
  width: 100%;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: -ms-flex;
  display: flex;
  box-sizing: border-box;
  min-height: 48px;
  border-top: 1px solid transparent;
  border-bottom: 1px solid transparent;
  position: relative;
}

@media (min-width: 768px) {
  .h-bar.neo-menu-wrapper .h-bar-content.neo-menu {
    position: relative;
  }
}

.h-bar:not(.left-align),
.h-bar:not(.left-align) .h-bar-content {
  -webkit-align-items: center;
  -ms-align-items: center;
  align-items: center;
}
.h-bar:not(.left-align) .h-bar-content {
  display: -webkit-flex;
  display: -ms-flexbox;
  display: -ms-flex;
  display: flex;
  -webkit-justify-content: center;
  -ms-justify-content: center;
  justify-content: center;
  text-align: center;
}
.h-bar .h-bar-content {
  -webkit-flex: 1 auto;
  -ms-flex: 1 auto;
  flex: 1 auto;
  min-width: 0;
  margin: auto;
  box-sizing: border-box;
  max-width: 1180px;
  font-size: 18px;
  line-height: 1.6;
  font-weight: 400;
  color: #333;
}
@media (max-width: 1439px) {
  .h-bar .h-bar-content {
    max-width: 1040px;
  }
}
@media (min-width: 768px) {
  .h-bar.neo-menu-wrapper .h-bar-content.neo-menu .permanent-content {
    -webkit-flex: 1 100%;
    -ms-flex: 1 100%;
    flex: 1 100%;
    min-width: 0;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: -ms-flex;
    display: flex;
    -webkit-flex-flow: row-reverse nowrap;
    -ms-flex-flow: row-reverse nowrap;
    flex-flow: row-reverse nowrap;
    -webkit-justify-content: space-between;
    -ms-justify-content: space-between;
    justify-content: space-between;
  }
}
body.ltr .h-bar.neo-menu-wrapper .h-bar-content.neo-menu .permanent-content {
  -webkit-flex-flow: wrap-reverse;
  -ms-flex-flow: wrap-reverse;
  flex-flow: wrap-reverse;
}
body.rtl .h-bar.neo-menu-wrapper .h-bar-content.neo-menu .permanent-content {
  -webkit-flex-flow: wrap-reverse;
  -ms-flex-flow: wrap-reverse;
  flex-flow: wrap-reverse;
}
.h-bar.neo-menu-wrapper .h-bar-content.neo-menu .permanent-content .v-padding {
  padding-top: 8px;
  padding-bottom: 8px;
}
.team-blip-wrapper {
  display: -webkit-flex;
  display: -ms-flexbox;
  display: -ms-flex;
  display: flex;
  -webkit-flex-wrap: nowrap;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  -webkit-align-items: center;
  -ms-align-items: center;
  align-items: center;
  overflow: hidden;
}
.team-blip-wrapper > * {
  -webkit-flex: none;
  -ms-flex: none;
  flex: none;
  min-width: 0;
  text-align: initial;
}
img.profile.i48 {
  width: 48px;
  height: 48px;
}
img.profile:not(.o) {
  border-radius: 100px;
}
.profile-img,
img.profile {
  max-width: 100%;
  width: 60px;
  height: 60px;
}
.stacked-thumbs > * {
  float: left;
}
.stacked-thumbs:after {
  content: " ";
  display: block;
  clear: both;
  height: 0;
}
.team-blip-wrapper > :not(:first-child) {
  margin-left: 8px;
}
.team-blip-wrapper > * {
  -webkit-flex: none;
  -ms-flex: none;
  flex: none;
  min-width: 0;
  text-align: initial;
}
.b16 {
  font-size: 16px;
  line-height: 1.4;
  font-weight: 400;
  color: #333;
}
.blk {
  display: block;
}
.main-wrapper-t {
  position: relative;
  overflow: visible;
  background-color: #f2f2f2;
}
.main-content:not(.full-width) {
  max-width: 1180px;
  margin: auto;
  padding-left: 0;
  padding-right: 0;
}
@media (min-width: 480px) {
  .main-content:not(.full-width) {
    padding-left: 10px;
    padding-right: 10px;
  }
}
@media (min-width: 1024px) {
  .main-content:not(.full-width) {
    padding-left: 40px;
    padding-right: 40px;
  }
}
.main-content {
  display: -webkit-flex;
  display: -ms-flexbox;
  display: -ms-flex;
  display: flex;
  -webkit-flex-wrap: nowrap;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  -webkit-align-items: flex-start;
  -ms-align-items: flex-start;
  align-items: flex-start;
}

@media (min-width: 1024px) {
  .main-content .sidebar:not(.right) {
    margin-right: 30px;
  }
}
@media (min-width: 1200px) {
  .main-content .sidebar:not(.right) {
    margin-right: 50px;
  }
}
.main-content .sidebar {
  -webkit-flex: none;
  -ms-flex: none;
  flex: none;
  min-width: 0;
}
@media (min-width: 1024px) {
  .main-content .sidebar {
    width: 200px;
  }
}
@media (min-width: 1024px) {
  .main-content .sidebar {
    width: 240px;
  }
}
@media (min-width: 1200px) {
  .main-content .sidebar {
    width: 280px;
  }
}
.sidebar-content > div:first-child:not(.child-no-margin),
.sidebar > div:not(.sidebar-content):first-child:not(.child-no-margin) {
  margin-top: 30px;
}
.sidebar-content > div,
.sidebar > div:not(.sidebar-content) {
  margin: 25px 0;
  color: #333;
}
.b18 {
  font-size: 18px;
  line-height: 1.6;
  font-weight: 400;
  color: #333;
}
.centered-text {
  text-align: center;
}
.side-media.no-media {
  display: -webkit-flex;
  display: -ms-flexbox;
  display: -ms-flex;
  display: flex;
  -webkit-flex-flow: row nowrap;
  -ms-flex-flow: row nowrap;
  flex-flow: row nowrap;
  -webkit-justify-content: flex-end;
  -ms-justify-content: flex-end;
  justify-content: flex-end;
  -webkit-align-items: center;
  -ms-align-items: center;
  align-items: center;
}
.media-area {
  position: relative;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: -ms-flex;
  display: flex;
  -webkit-flex-wrap: nowrap;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
}
.side-media {
  position: relative;
}
.side-media + .overview-blocks {
  margin-top: 10px;
}
.input.color-none {
  border-color: transparent;
  background: transparent;
}
.t-main {
  color: #333 !important;
}
.input {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border-radius: 2px;
  background-color: #fff;
  border: 1px solid #e6e6e6;
  color: #333;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: -ms-flex;
  display: flex;
  -webkit-flex-wrap: nowrap;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  -webkit-align-items: center;
  -ms-align-items: center;
  align-items: center;
  position: relative;
}
.input.size-b16 .typable {
  font-size: 16px;
  line-height: 1.4;
  font-weight: 400;
  color: #333;
  padding: 2px;
}
.input > .inner {
  outline: none;
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  color: #333;
  min-height: 20px;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 9px 11px;
  margin: 0;
}
.input > .inner {
  -webkit-flex: 1 auto;
  -ms-flex: 1 auto;
  flex: 1 auto;
  min-width: 0;
}
.input .typable {
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  color: #333;
  min-height: 20px;
  border: 0 !important;
  margin: 0;
  background: none;
  outline: none;
  width: 100%;
}
input {
  resize: none;
}
.overview-blocks .location-wrapper > .separator {
  -webkit-flex: 1 100%;
  -ms-flex: 1 100%;
  flex: 1 100%;
  min-width: 0;
  height: 4px;
}
.overview-blocks .location-wrapper {
  display: -webkit-flex;
  display: -ms-flexbox;
  display: -ms-flex;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}
.overview-blocks > :not(:last-child) {
  margin-bottom: 10px;
}
.overview-blocks .profile-links-wrapper .link-icon-container {
  -webkit-justify-content: flex-start !important;
  -ms-justify-content: flex-start !important;
  justify-content: flex-start !important;
  -webkit-flex-wrap: wrap !important;
  -ms-flex-wrap: wrap !important;
  flex-wrap: wrap !important;
}
.cover-links {
  display: -webkit-flex;
  display: -ms-flexbox;
  display: -ms-flex;
  display: flex;
  -webkit-flex-wrap: nowrap;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  -webkit-align-items: center;
  -ms-align-items: center;
  align-items: center;
}
.link-icon-container .link-icon {
  display: -webkit-flex;
  display: -ms-flexbox;
  display: -ms-flex;
  display: flex;
  -webkit-justify-content: center;
  -ms-justify-content: center;
  justify-content: center;
  -webkit-align-items: center;
  -ms-align-items: center;
  align-items: center;
  font-family: FontAwesome;
  font-size: inherit;
  line-height: inherit;
  color: inherit;
  font-style: normal;
  font-variant: normal;
  font-weight: 400;
  font-stretch: normal;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  cursor: pointer;
  text-decoration: none;
  color: #a6a6a6 !important;
}

.cover-links .link-icon {
  -webkit-flex: none;
  -ms-flex: none;
  flex: none;
  min-width: 0;
  width: 24px;
  height: 24px;
  font-size: 20px;
  line-height: 24px;
}
#csBlockLoader {
  position: relative;
}
.main-content .mainarea {
  -webkit-flex: 1 auto;
  -ms-flex: 1 auto;
  flex: 1 auto;
  min-width: 0;
}
.tile:not(.no-shadow) {
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 15%);
}
.tile:not(.grey) {
  background-color: #fff;
}
.tile {
  box-sizing: border-box;
  position: relative;
  padding: 24px;
}
@media (min-width: 768px) {
  .tile {
    border-radius: 3px;
  }
}
.tile + .tile {
  margin-top: 0;
}
.tile:not(.emphasis) {
  margin: 16px 0;
}
.tile .tile-banner,
.tile .tile-bleeder.section-info {
  padding: 20px 24px;
}
.tile:not(.nopadding) .tile-banner {
  margin-left: -24px;
  margin-right: -24px;
}
.tile-banner:not(.no-wrap) {
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}
.tile-banner.ash-blue {
  background-color: #bbd7ff;
}
.tile-banner {
  font-size: 21px;
  line-height: 1.16;
  font-weight: 400;
  color: #333;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: -ms-flex;
  display: flex;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-justify-content: flex-start;
  -ms-justify-content: flex-start;
  justify-content: flex-start;
  -webkit-align-items: center;
  -ms-align-items: center;
  align-items: center;
  margin-bottom: 16px;
  overflow: hidden;
}

.tile-banner > :not(:last-child) {
  margin-right: 10px;
}
.tile-banner > * {
  -webkit-flex: none;
  -ms-flex: none;
  flex: none;
  min-width: 0;
}
.tile-banner > .filler {
  -webkit-flex: 1 auto;
  -ms-flex: 1 auto;
  flex: 1 auto;
  margin-right: 0;
  min-width: 0;
}
.application-text-section {
  margin-bottom: 30px;
}
.form-questions ol {
  counter-reset: questions;
}
.form-questions ol > li {
  list-style: none;
  position: relative;
  margin-left: 20px;
}
.application-field {
  margin-bottom: 20px;
}
.form-questions.form-emphasis-larger ol > li:before {
  line-height: 20px;
}
.form-questions ol > li:before {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  content: counter(questions);
  counter-increment: questions;
  position: absolute;
  left: -2em;
  width: 2em;
  margin-right: 8px;
  font-size: 12px;
  line-height: 18px;
  font-weight: 400;
  color: #767676;
}
.application-field label:not(.inline) {
  display: block;
}
.form-emphasis-larger .application-field label {
  font-size: 16px;
  line-height: 20px;
  font-weight: 600;
  color: #333;
}
.application-field label {
  font-size: 16px;
  font-weight: 400;
  color: #333;
  margin-bottom: 8px;
}
.mandatory:after {
  content: " *";
  line-height: 1.4 !important;
}
.input.full-width,
.input.full-width > .inner {
  width: 100%;
}
.full-width {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  width: 100% !important;
}
.input {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border-radius: 2px;
  background-color: #fff;
  border: 1px solid #e6e6e6;
  color: #333;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: -ms-flex;
  display: flex;
  -webkit-flex-wrap: nowrap;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  -webkit-align-items: center;
  -ms-align-items: center;
  align-items: center;
  position: relative;
}
.dropdown {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  position: relative;
  display: inline-block;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.dropdown > .no {
  position: absolute;
  z-index: 1;
  top: 3px;
  left: 3px;
}
.dropdown:not(.compacted) > .caption {
  -webkit-justify-content: space-between;
  -ms-justify-content: space-between;
  justify-content: space-between;
}
.dropdown > .caption {
  background-color: #fff;
  border-color: #e6e6e6;
  color: #333;
}
.dropdown > .caption {
  border-radius: 2px;
  border-width: 1px;
  border-style: solid;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: -ms-flex;
  display: flex;
  -webkit-flex-flow: row nowrap;
  -ms-flex-flow: row nowrap;
  flex-flow: row nowrap;
  -webkit-align-items: center;
  -ms-align-items: center;
  align-items: center;
  width: 100%;
  position: relative;
  z-index: 2;
  cursor: pointer;
}
.dropdown:not(.compacted) > .caption > .title {
  -webkit-flex: 1 auto;
  -ms-flex: 1 auto;
  flex: 1 auto;
  min-width: 0;
}
.dropdown > .caption > .title:not(.centered) {
  text-align: left;
}
.dropdown > .caption > :not(:last-child) {
  padding-right: 2px !important;
}
.dropdown > .caption > :not(.allow-wrap) {
  text-overflow: clip;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.dropdown > .caption > * {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 9px 11px;
  margin: 0;
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  color: #333;
  min-height: 20px;
}
.dropdown > .caption > .arrow:not(.left) {
  padding-left: 2px !important;
}
.dropdown > .caption > .arrow {
  -webkit-flex: none;
  -ms-flex: none;
  flex: none;
  min-width: 0;
  color: #767676 !important;
  font-family: FontAwesome !important;
  font-size: 16px;
}
.dropdown > .caption > :not(:first-child) {
  padding-left: 2px !important;
}
.dropdown > .caption > :not(.allow-wrap) {
  text-overflow: clip;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.dropdown > .caption > .arrow:before {
  content: "\f0d7";
}
.dropdown:not(.drop-right) > .drop {
  left: 0;
}
.dropdown:not(.opened) > .drop {
  display: none;
}
.dropdown > .drop {
  border-color: #cdcdcd;
  background-color: #fff;
}
.dropdown > .drop {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  position: absolute;
  z-index: 20;
  border-width: 1px;
  border-style: solid;
}
.dropdown > .drop ul.elements {
  background-color: #fff;
  color: #333;
}
.dropdown ul.elements > li:not(.disabled),
ul.listable > li:not(.disabled) {
  cursor: pointer;
}
.dropdown ul.elements > li,
ul.listable > li {
  display: -webkit-flex;
  display: -ms-flexbox;
  display: -ms-flex;
  display: flex;
  -webkit-justify-content: space-between;
  -ms-justify-content: space-between;
  justify-content: space-between;
  -webkit-align-items: center;
  -ms-align-items: center;
  align-items: center;
  padding: 6px 16px;
  position: relative;
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
}
.dropdown > .drop ul.elements > li > .tick {
  color: #3b7dff;
}
.dropdown ul.elements > li > .tick,
ul.listable > li > .tick {
  -webkit-align-self: center;
  -ms-align-self: center;
  align-self: center;
  -webkit-flex: none;
  -ms-flex: none;
  flex: none;
  min-width: 0;
  padding-right: 8px;
  font-family: FontAwesome;
  font-size: 0.7em;
  visibility: hidden;
}
.dropdown ul.elements:not(.allow-wrap) > li > .entry,
ul.listable:not(.allow-wrap) > li > .entry {
  text-overflow: clip;
  overflow: hidden;
  white-space: nowrap;
}
.dropdown ul.elements > li > .entry,
ul.listable > li > .entry {
  -webkit-align-self: center;
  -ms-align-self: center;
  align-self: center;
  width: 100%;
}

.dropdown.opened > .drop {
  display: block;
}

#submit-label {
  width: 100%;
  text-align: center;
  margin-top: 72px;
}
.b12,
.b14 {
  line-height: 1.4;
  font-weight: 400;
  color: #333;
}
.b14 {
  font-size: 14px;
}
.form-submitter:not(.full-width) {
  max-width: 420px;
}
.form-submitter {
  margin: 12px auto;
}
.full-width {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  width: 100% !important;
}
.button:not(.bordered):not(.no-shadow):not(.disabled) > .caption,
.button:not(.bordered):not(.no-shadow):not(.disabled) > .caption:active {
  box-shadow: 0 0 4px 0 rgb(0 0 0 / 4%), 0 1px 3px 0 rgb(0 0 0 / 18%);
}
.button.color-accent > .caption,
.button.color-green > .caption {
  background-color: #3b7dff;
  border-color: #3b7dff;
}
@media (min-width: 768px) .button.size-large>.caption,
  .size-large>.button>.caption {
  padding: 12px 15px;
}
.button.nopadding > .caption {
  padding-left: 4px !important;
  padding-right: 4px !important;
}
.connect-application > .caption,
.connect-application > .caption:active {
  box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.17), 0 1px 2px 0 rgba(0, 0, 0, 0.1) !important;
}
.connect-application:not(.wrapping-label) > * {
  text-overflow: clip;
  overflow: auto;
  white-space: normal;
}
.connect-application > .caption {
  min-height: 64px;
  text-align: center;
  padding: 20px 15px !important;
}
.button > .caption {
  background-color: #fff;
  border-color: #e6e6e6;
  color: #333;
}
.button:not(.wrapping-label) > * {
  text-overflow: clip;
  overflow: hidden;
  white-space: nowrap;
}
.button > .caption {
  border-radius: 2px;
  border-width: 1px;
  border-style: solid;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: -ms-flex;
  display: flex;
  -webkit-flex-flow: row nowrap;
  -ms-flex-flow: row nowrap;
  flex-flow: row nowrap;
  -webkit-justify-content: center;
  -ms-justify-content: center;
  justify-content: center;
  -webkit-align-items: center;
  -ms-align-items: center;
  align-items: center;
  padding: 9px 11px;
  margin: 0;
  cursor: pointer;
}
.button,
.button > .caption {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.button.size-large > .caption > .title,
.size-large > .button > .caption > .title {
  font-weight: 600;
}
.connect-application > .caption .title {
  font-size: 21px;
}
@media (min-width: 768px) {
  .button.size-large > .caption > *,
  .size-large > .button > .caption > * {
    font-size: 18px;
    line-height: 22px;
    font-weight: 400;
    color: #333;
    min-height: 22px;
  }
}
.button.color-accent > .caption > *,
.button.color-green > .caption > * {
  color: #fff;
}
.button > .caption > .title {
  font-weight: 600;
}
.button > .caption > * {
  font-size: 16px;
  line-height: 20px;
  font-weight: 400;
  color: #333;
  min-height: 20px;
}

.cs-button-color-green:hover span.caption {
  color: #fff;
  border-color: #113d06;
}
.styles--19x-w {
  color: #88929e;
}
.styles--3VVrr {
  font-stretch: normal;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu,
    "Helvetica Neue", sans-serif;
  font-size: 13px;
  font-weight: 400;
  text-rendering: geometricPrecision;
  letter-spacing: normal;
  -webkit-font-smoothing: antialiased;
  line-height: normal;
  font-style: normal;
  font-variant-ligatures: normal;
  font-variant-caps: normal;
  font-variant-numeric: normal;
  font-variant-east-asian: normal;
  word-spacing: normal;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  -webkit-writing-mode: horizontal-tb !important;
}

.form-emphasis-larger {
  padding-bottom: 24px;
}
.styles--2itFq {
  padding-bottom: 24px;
}
.styles--2oDxC {
  border-bottom: solid 1px #e1e6eb;
  position: relative;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -ms-flex-align: end;
  align-items: flex-end;
  padding: 16px 0 8px;
}
.styles--2oDxC h2 {
  padding: 0 0 0 8px;
  color: #333e49;
  font-size: 22px;
  line-height: 26px;
  font-weight: 400;
}
.styles--2uKQq {
  padding-top: 18px;
}
.styles--ArVfo:first-of-type {
  margin-bottom: 12px;
}
.styles--2Z5fi {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: justify;
  justify-content: space-between;
  padding: 12px 0;
}
.styles--2Z5fi p {
  font-weight: 600;
}
label,
p,
ul,
ol {
  color: #333e49;
  font-size: 14px;
  letter-spacing: normal;
  line-height: 1.5;
}
.secondary--2ySVn:not([aria-disabled*="true"]) {
  transition: border-color 0.2s ease, color 0.2s ease;
}
.secondary--2ySVn:not([aria-disabled*="true"]) {
  color: #026df6;
}
.secondary--2ySVn:not([aria-disabled*="true"]) {
  border-color: #026df6;
}
.button--32xRL {
  font-stretch: normal;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu,
    "Helvetica Neue", sans-serif;
  font-size: 13px;
  font-weight: 600;
  text-rendering: geometricPrecision;
  letter-spacing: normal;
  -webkit-font-smoothing: antialiased;
  line-height: 100%;
  font-style: normal;
  font-variant-ligatures: normal;
  font-variant-caps: normal;
  font-variant-numeric: normal;
  font-variant-east-asian: normal;
  word-spacing: normal;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  -webkit-writing-mode: horizontal-tb !important;
  height: 33px;
  padding: 6px 23px;
}
.secondary--2ySVn {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  background: transparent;
  border: 1px solid #00756a;
  border-radius: 8px;
  color: #00756a;
}
.styles--1-mi6 {
  margin-bottom: 4px;
  padding: 16px 24px;
  border-radius: 4px;
  background-color: #e1e6eb;
}
.styles--1-mi6 .styles--3LPHM {
  margin-bottom: 24px;
}
.react-datepicker-wrapper {
  display: inline-block;
}
.react-datepicker-wrapper {
  width: 100% !important;
}
.react-datepicker__input-container {
  position: relative;
  display: inline-block;
}
.react-datepicker__input-container {
  width: 100% !important;
}
.styles--1-mi6 .styles--3LPHM.styles--2RhEK,
.styles--1-mi6 .styles--3LPHM.styles--3-0gZ {
  vertical-align: top;
}
.styles--1-mi6 .styles--3LPHM.styles--2RhEK,
.styles--1-mi6 .styles--3LPHM.styles--3-0gZ,
.styles--1-mi6 .styles--3LPHM.styles--TBUfB {
  box-sizing: border-box;
  max-width: 48%;
  float: left;
}
.styles--1-mi6 .styles--3LPHM.styles--2RhEK {
  margin-right: 4%;
}
.styles--1-mi6 .styles--3wmD1 {
  padding: 16px 0 0 24px;
  border-top: solid 1px #c4cfde;
  margin: 0 -24px 0 -24px;
  clear: both;
}
.primary--25RCR:not([aria-disabled*="true"]) {
  transition: background-color 0.2s ease, border-color 0.2s ease;
}
.primary--25RCR:not([aria-disabled*="true"]) {
  border-color: #00756a;
  border-color: #026df6;
}
.primary--25RCR:not([aria-disabled*="true"]) {
  background-color: #00756a;
  background-color: #026df6;
}
.primary--25RCR {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  background: #00756a;
  border: 1px solid #00756a;
  border-radius: 8px;
  color: #ffffff;
}
.button--2de5X[aria-disabled*="true"] {
  opacity: 0.4;
  cursor: not-allowed;
}

.button--2de5X:focus,
.button--2de5X:visited,
.button--2de5X:hover {
  text-decoration: none;
}
.button--2de5X {
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  box-sizing: border-box;
  cursor: pointer;
  position: relative;
  text-align: center;
  text-decoration: none;
  white-space: nowrap;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  line-height: 100%;
  vertical-align: baseline;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  margin: 0;
}

.button--2de5X1 {
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  box-sizing: border-box;
  cursor: pointer;
  position: relative;
  text-align: center;
  text-decoration: none;
  white-space: nowrap;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  line-height: 100%;
  vertical-align: baseline;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  margin: 25px 5px;
}
.button--14TuV {
  font-stretch: normal;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu,
    "Helvetica Neue", sans-serif;
  font-size: 14px;
  font-weight: 600;
  text-rendering: geometricPrecision;
  letter-spacing: normal;
  -webkit-font-smoothing: antialiased;
  line-height: 100%;
  font-style: normal;
  font-variant-ligatures: normal;
  font-variant-caps: normal;
  font-variant-numeric: normal;
  font-variant-east-asian: normal;
  word-spacing: normal;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  -webkit-writing-mode: horizontal-tb !important;
  height: 43px;
  padding: 10px 23px;
}
.styles--1-mi6 .styles--1hvTZ {
  margin-left: 24px;
}
.tertiary--1L6hu:not([aria-disabled*="true"]) {
  color: #636d77;
}
.tertiary--1L6hu:not([aria-disabled*="true"]) {
  transition: color 0.2s ease;
}
.tertiary--1L6hu {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  background: transparent;
  border: 0 solid transparent;
  border-radius: 4px;
  color: #636d77;
}
.tertiary--1L6hu,
.tertiary--2MBr5,
.tertiary--3icwv,
.tertiary--1fH5W,
.tertiary--1JsWJ,
.tertiary--1Esnf,
.tertiary--UC08b {
  display: inline;
  height: auto;
  padding: 0;
}

[rel="hide"] {
  display: block;
}
select {
  -webkit-appearance: none;
}
.up-dropdown-icon {
  width: 10px;
  position: absolute;
  right: 15px;
}

.styles--2SPgS {
  position: relative;
  margin-bottom: 4px;
  padding: 16px 110px 16px 24px;
  word-wrap: break-word;
  word-break: break-word;
  background-color: #f2f4f5;
  border-radius: 4px;
}
.styles--2SPgS dl:first-of-type {
  margin: 0;
}
.styles--2SPgS dl {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: top;
  align-items: top;
  margin-top: 8px;
  color: #636d77;
}
.styles--2SPgS dt {
  padding-right: 16px;
  text-align: right;
  width: 136px;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  font-weight: 600;
  color: #333e49;
}
.styles--2SPgS dt {
  padding-right: 16px;
  text-align: left;
  width: 136px;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  font-weight: 600;
  color: #333e49;
}
.styles--2SPgS .styles--1J0du {
  box-sizing: border-box;
}
.styles--2SPgS dd {
  color: #333e49;
}
.styles--2SPgS .styles--Jt82u {
  position: absolute;
  top: 16px;
  right: 10px;
}
.styles--2SPgS a {
  color: #88929e;
}
.styles--jQpn9 {
  pointer-events: auto !important;
  cursor: pointer;
}
.styles--2SPgS svg {
  height: 16px;
  width: 16px;
}
.styles--2SPgS a + a {
  margin-left: 32px;
}
.styles--2SPgS .styles--1JeR2 {
  display: inline-block;
  font-weight: 400;
  margin-left: 4px;
}
</style>
