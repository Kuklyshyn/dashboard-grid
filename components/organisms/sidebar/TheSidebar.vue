<template>
    <div class="b-sidebar">
      <div class="b-sidebar-small">
        <NuxtLink to="/">
          <Icon name="Logo" width="40" height="40" />
        </NuxtLink>
        <nav>
          <!-- Here i have added a simple img, i am not sure in name and meaning these icon -->
          <ul class="b-sidebar-small-menu">
            <li>
              <NuxtLink to="/">
                <img src="~/assets/img/icons/01.svg" alt="1" />
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/">
                <img src="~/assets/img/icons/02.svg" alt="2" />
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/">
                <img src="~/assets/img/icons/03.svg" alt="3" />
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/">
                <img src="~/assets/img/icons/04.svg" alt="4" />
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/">
                <img src="~/assets/img/icons/05.svg" alt="5" />
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/">
                <img src="~/assets/img/icons/06.svg" alt="6" />
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/">
                <img src="~/assets/img/icons/07.svg" alt="7" />
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/">
                <img src="~/assets/img/icons/08.svg" alt="8" />
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/">
                <img src="~/assets/img/icons/09.svg" alt="9" />
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/">
                <img src="~/assets/img/icons/10.svg" alt="10" />
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/">
                <img src="~/assets/img/icons/11.svg" alt="11" />
              </NuxtLink>
            </li>
          </ul>
        </nav>
        <UserInfo />
      </div>
      <div class="b-sidebar-wide">
        <header class="b-sidebar-header">
          <h2 class="b-sidebar-title">Marketing</h2>
        </header>
        <nav>
          <ul class="b-sidebar-wide-menu">
            <li>
              <NuxtLink to="/calendar" class="b-sidebar-wide-menu-item">
                <Icon name="Calendar" width="20" height="20" />
                Calendar
              </NuxtLink>
            </li>
          </ul>
          <h3 class="b-sidebar-wide-title">Campaign</h3>
          <ul class="b-sidebar-wide-menu">
            <li>
              <NuxtLink to="/sms" class="b-sidebar-wide-menu-item">
                <Icon name="Sms" width="20" height="20" />
                Sms
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/email" class="b-sidebar-wide-menu-item">
                <Icon name="Email" width="20" height="20" />
                Email
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/push" class="b-sidebar-wide-menu-item">
                <Icon name="Push" width="20" height="20" />
                Push notifications
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/digital-screens" class="b-sidebar-wide-menu-item">
                <Icon name="Digitalsignage" width="20" height="20" />
                Digital Screens 
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/in-store-radio" class="b-sidebar-wide-menu-item">
                <Icon name="In-store-radio" width="20" height="20" />
                In-store Radio
              </NuxtLink>
            </li>
          </ul>
          <h3 class="b-sidebar-wide-title">Annoucements</h3>
          <ul class="b-sidebar-wide-menu">
            <li>
              <NuxtLink to="/news" class="b-sidebar-wide-menu-item">
                <Icon name="News" width="20" height="20" />
                News
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/events" class="b-sidebar-wide-menu-item">
                <Icon name="Events" width="20" height="20" />
                Events
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/sale" class="b-sidebar-wide-menu-item">
                <Icon name="Sale" width="20" height="20" />
                Sale
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/blog" class="b-sidebar-wide-menu-item">
                <Icon name="Blog" width="20" height="20" />
                Blogs
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/surveys" class="b-sidebar-wide-menu-item">
                <Icon name="Surveys" width="20" height="20" />
                Surveys
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/scenarios" class="b-sidebar-wide-menu-item">
                <Icon name="Scenarios" width="20" height="20" />
                Scenarios
              </NuxtLink>
            </li>
          </ul>
        </nav>
      </div>      
    </div>
</template>