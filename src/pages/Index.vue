<template>
  <Layout>
    <!-- Hero -->
    <div class="flex items-center relative z-10 md:h-screen pb-8 md:pb-0 bg-white">
      <div class="inner relative z-10">
        <h1 class="text-black font-display text-4xl md:text-6xl leading-extra-tight">
          A frontend engineer and UX designer interested in accessibility.
        </h1>
        <p class="md:mt-12 md:mb-8 text-gray-600 text-xl md:text-2xl">
          Design and technology make a great pairing—luckily, I have a background in both. Currently a frontend engineer
          working in Denver, Colorado. Check out some of my recent work at Dribbble and GitHub. You can also learn more
          about me below or take a look at my résumé.
        </p>
        <a
          href=""
          class="inline-flex items-center mr-2 py-4 px-6 bg-white text-black border border-gray-600 rounded shadow text-lg font-medium hover:text-dribbble hover:border-dribbble"
        >
          <svg
            class="w-5 mr-2 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 0c-6.628 0-12 5.373-12 12s5.372 12 12 12 12-5.373 12-12-5.372-12-12-12zm9.885 11.441c-2.575-.422-4.943-.445-7.103-.073-.244-.563-.497-1.125-.767-1.68 2.31-1 4.165-2.358 5.548-4.082 1.35 1.594 2.197 3.619 2.322 5.835zm-3.842-7.282c-1.205 1.554-2.868 2.783-4.986 3.68-1.016-1.861-2.178-3.676-3.488-5.438.779-.197 1.591-.314 2.431-.314 2.275 0 4.368.779 6.043 2.072zm-10.516-.993c1.331 1.742 2.511 3.538 3.537 5.381-2.43.715-5.331 1.082-8.684 1.105.692-2.835 2.601-5.193 5.147-6.486zm-5.44 8.834l.013-.256c3.849-.005 7.169-.448 9.95-1.322.233.475.456.952.67 1.432-3.38 1.057-6.165 3.222-8.337 6.48-1.432-1.719-2.296-3.927-2.296-6.334zm3.829 7.81c1.969-3.088 4.482-5.098 7.598-6.027.928 2.42 1.609 4.91 2.043 7.46-3.349 1.291-6.953.666-9.641-1.433zm11.586.43c-.438-2.353-1.08-4.653-1.92-6.897 1.876-.265 3.94-.196 6.199.196-.437 2.786-2.028 5.192-4.279 6.701z"
            />
          </svg>
          <span>Dribbble</span>
        </a>
        <a
          href="https://github.com/admrbsn/"
          target="_blank"
          class="inline-flex items-center mr-2 py-4 px-6 bg-white text-black border border-gray-600 rounded shadow text-lg font-medium hover:text-github hover:border-github"
        >
          <svg
            class="w-5 mr-2 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
            />
          </svg>
          <span>GitHub</span>
        </a>
      </div>
      <g-image class="absolute bottom-0 z-0 w-full" alt="Shapes" src="~/assets/img/shapes.svg" />
    </div>
    <!-- end Hero -->

    <!-- Work history -->
    <div class="z-20 py-10 md:py-20 bg-dark_blue">
      <div class="inner">
        <div class="md:flex">
          <div class="md:w-3/6 md:h-screen md:sticky md:mr-12 mb-10 md:mb-0">
            <div class="text-baby_blue text-xl md:text-2xl font-medium">
              Experience is growth
            </div>
            <h4 class="text-white text-3xl md:text-5xl font-display leading-extra-tight">
              Some of the things I've done
            </h4>
            <p class="text-white_75">
              I’ve been fortunate enough to have worked for a variety of great companies in both design and engineering
              roles. For more information, view my full résumé.
            </p>
            <button class="inline-flex items-center bg-white text-black shadow rounded mr-2 py-4 px-6 font-medium">
              <svg
                class="w-5 mr-2 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M4 22v-20h16v11.543c0 4.107-6 2.457-6 2.457s1.518 6-2.638 6h-7.362zm18-7.614v-14.386h-20v24h10.189c3.163 0 9.811-7.223 9.811-9.614zm-5-1.386h-10v-1h10v1zm0-4h-10v1h10v-1zm0-3h-10v1h10v-1z"
                />
              </svg>
              <span>View my Résumé</span>
            </button>
          </div>
          <div class="md:w-3/6 md:ml-12">
            <div class="mb-8 md:border-b md:border-white_25">
              <div class="text-sm md:text-xl font-display text-pink font-normal">
                December 2019 - Present
              </div>
              <div class="mb-5 md:mb-6 font-display text-xl md:text-2xl text-white font-weight-bold leading-tight">
                Freelance Design &amp; Development at Droplr
              </div>
              <p class="text-white_75">
                Consulted
                <a href="https://droplr.com/" target="_blank">Droplr</a>
                on rebranding and redesining their consumer-facing sites. Built a custom WordPress multi-site theme with
                a focus on SEO and page speed; increased organic traffic by ~115% over the course of 4 months and
                achieved a 99/85 on Google PageSpeed Insights. Led an effort to standardize, improve, and codify the use
                of brand assets.
              </p>
            </div>
            <div class="mb-8 md:border-b md:border-white_25">
              <div class="text-sm md:text-xl font-display text-pink font-normal">
                March 2014 - Present
              </div>
              <div class="mb-5 md:mb-6 font-display text-xl md:text-2xl text-white font-weight-bold leading-tight">
                Manager, UX/UI &amp; Frontend Development at Peterson's
              </div>
              <p class="text-white_75">
                Combined the art of design with the science of programming to lead all UX/UI and frontend development
                for the company. Was responsible for executing product visions from wireframing and high-fidelity mocks
                to prototyping and production-ready code, all in in an Angile enviornment. Worked with Laravel, VueJS,
                and Bootstrap to build a handful of both D2C and client portal sites.
              </p>
            </div>
            <div class="mb-8 md:border-b md:border-white_25">
              <div class="text-sm md:text-xl font-display text-pink font-normal">
                December 2011 - March 2014
              </div>
              <div class="mb-5 md:mb-6 font-display text-xl md:text-2xl text-white font-weight-bold leading-tight">
                WordPress Designer/Developer at Webolutions
              </div>
              <p class="text-white_75">
                Responsible for the design and frontend development of all client websites with a focus on user-centered
                design principles, best practices, and industry trends. Worked independently to meet tight deadlines,
                sometimes delivering a new site on a weekly basis. Also responsible for all branding and print design.
              </p>
            </div>
            <div class="mb-8 md:border-b md:border-white_25">
              <div class="text-sm md:text-xl font-display text-pink font-normal">
                July 2017 - November 2019
              </div>
              <div class="mb-5 md:mb-6 font-display text-xl md:text-2xl text-white font-weight-bold leading-tight">
                Freelance Design &amp; Development at ETHDenver
              </div>
              <p class="text-white_75">
                Led all web efforts for ETHDenver, the world's largest Etherium hackathon event with over 2,000
                participants. This included the the promotional site, application forms for teams, event schedule, and
                social media assets. Used WordPress and integrated woth Devfolio.
              </p>
            </div>
            <div class="mb-8 md:border-b md:border-white_25">
              <div class="text-sm md:text-xl font-display text-pink font-normal">
                January 2014 - August 2017
              </div>
              <div class="mb-5 md:mb-6 font-display text-xl md:text-2xl text-white font-weight-bold leading-tight">
                Freelance Design &amp; Development at Inspirato
              </div>
              <p class="text-white_75">
                Inspirato is a luxury hospitality company that provides it's members access to several hundred million
                dollars worth of luxury vacation homes in beach, mountain and metropolitan destinations around the
                world. Designed and developed the company's
                <a href="https://www.inspirato.com/details/" target="_blank">
                  blog
                </a>
                . Also, helped launch
                <em>Inspirato with American Express</em>
                , a partnership offering benefits to American Express cardmembers.
              </p>
            </div>
            <div class="mb-8 md:border-b md:border-white_25">
              <div class="text-sm md:text-xl font-display text-pink font-normal">
                July 2006 - December 2011
              </div>
              <div class="mb-5 md:mb-6 font-display text-xl md:text-2xl text-white font-weight-bold leading-tight">
                Lead Interactive Designer at Miles Media
              </div>
              <p class="text-white_75">
                The creative lead for all web and interactive design for over 10 clients, including sites, banner ads,
                iOS apps, and Adobe Flash applications. Notable clients included the official tourism sites for
                <a href="https://colorado.com/" target="_blank">Colorado</a>
                ,
                <a href="https://sftravel.com/" target="_blank">
                  San Francisco
                </a>
                ,
                <a href="https://visitphilly.com/" target="_blank">
                  Philadelphia
                </a>
                ,
                <a href="https://austintexas.org/" target="_blank">Austin</a>
                , and
                <a href="https://visitseattle.org/" target="_blank">Seattle</a>
                . Also responsible for the design and management of banner ads via 24/7 Open AdStream.
              </p>
            </div>
            <div class="mb-8 md:border-b md:border-white_25">
              <div class="text-sm md:text-xl font-display text-pink font-normal">
                Februrary 2014 - April 2014
              </div>
              <div class="mb-5 md:mb-6 font-display text-xl md:text-2xl text-white font-weight-bold leading-tight">
                Freelance Design &amp; Development at Squaremouth
              </div>
              <p class="text-white_75">
                <a href="https://www.tinleg.com/" target="_blank">Tin Leg</a> was founded in 2014 by the travel
                insurance industry experts at Squaremouth. I helped launch the consumer-facing site by building brand
                guidelines and a custom WordPress site.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end Work history -->

    <!-- Bio -->
    <div class="z-10 overflow-hidden py-10 md:py-20 bg-light_pink">
      <div class="inner">
        <div class="flex align-center flex-col md:flex-row relative">
          <div class="bio-images order-last md:order-first relative md:w-3/6 md:mr-12">
            <div class="shapes relative z-0">
              <vue-parallax :image="require('../assets/img/bio-circle-1.svg')" :intensity="40"></vue-parallax>
              <vue-parallax :image="require('../assets/img/bio-circle-2.svg')" :intensiy="30"></vue-parallax>
              <vue-parallax :image="require('../assets/img/bio-triangle.svg')" :intensiy="20"></vue-parallax>
            </div>
            <g-image
              class="img-1 hidden md:block absolute z-10 w-4/6 shadow"
              alt="Bio Image 1"
              src="~/assets/img/Slash2.jpg"
            />
            <g-image
              class="img-2 hidden md:block absolute z-20 w-4/6 shadow"
              alt="Bio Image 2"
              src="~/assets/img/adam.jpg"
            />
            <g-image
              class="img-3 relative md:absolute z-30 w-full md:w-3/6 shadow"
              alt="Bio Image 3"
              src="~/assets/img/colorado.jpg"
            />
          </div>
          <div class="order-first md:order-last md:w-3/6 relative z-10 md:ml-12">
            <div class="text-pink text-xl md:text-2xl font-display font-medium">
              A little about myself
            </div>
            <h4 class="text-black text-3xl md:text-5xl font-display leading-extra-tight">
              Designer. Developer. Creative.
            </h4>
            <p class="text-gray-800">
              I like to wear hats. In fact, I wear so many hats at work, I've adopted the nickname "Slash." While I love
              design, I'm always growing my
              <a href="https://medium.com/@jchyip/why-t-shaped-people-e8706198e437" targey="_blank">
                T-shape
              </a>
              , whether it's reading usability studies, geeking out with new tools, or experimenting with JavaScript
              libraries. My expertise, however, is rooted in UX design and frontend development. Good design is what
              separates the best products from the good ones. One of my favorite quotes is "The details are not the
              details... They make the design," by Charles Eames. I obsess over typography, alignment, colors, and neat
              code.
            </p>
            <p class="text-gray-800">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </p>
          </div>
        </div>
        <!--TODO:add recent work via dribbble or behance api-->
        <!-- <div class="flex items-center justify-between mt-20">
                <div>
                    <div class="text-2xl text-pink font-normal">Recent work</div>
                    <h4 class="mb-0 text-5xl text-black leading-extra-tight">Recent work</h4>
                </div>
                <div>
                    View more work
                </div>
            </div> -->
      </div>
    </div>
    <!-- end Bio -->

    <!-- LinkedIn -->
    <div class="relative overflow-hidden py-10 md:py-20 bg-white">
      <div class="inner relative z-10">
        <div class="md:flex md:items-center relative">
          <div class="md:w-3/6 md:mr-12">
            <h4 class="text-black text-3xl md:text-5xl font-display leading-extra-tight">
              What co-workers have to say
            </h4>
            <p class="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </p>
            <button
              class="inline-flex items-center mr-2 py-4 px-6 bg-white text-black hover:text-linkedin border border-gray-400 hover:border-linkedin rounded shadow font-medium"
            >
              <svg
                class="h-4 mr-2 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"
                />
              </svg>
              <span>View my LinkedIn</span>
            </button>
          </div>
          <div class="md:w-3/6 md:ml-12">
            <div class="my-5 md:-ml-12 p-8 shadow bg-white rounded">
              <svg
                class="w-8 h-8 mb-2 fill-red"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z"
                />
              </svg>
              <p class="mb-3 text-black">
                It was a pleasure working with Adam and I'd so again in a heartbeat. He's the type of guy you want on
                your team: creative, driven, resourceful and fun to work with. Any company would be lucky to have him.
              </p>
              <p class="mb-0 text-black font-bold">Nate Frick</p>
              <p class="mb-0 text-black opacity-50">
                Vice President, Services at Wayin
              </p>
            </div>
            <div class="my-5 md:-mr-12 p-8 shadow bg-white rounded">
              <svg
                class="inline w-5 h-5 mb-2 fill-yellow"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"
                />
              </svg>
              <svg
                class="inline w-5 h-5 mb-2 fill-yellow"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"
                />
              </svg>
              <svg
                class="inline w-5 h-5 mb-2 fill-yellow"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"
                />
              </svg>
              <svg
                class="inline w-5 h-5 mb-2 fill-yellow"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"
                />
              </svg>
              <svg
                class="inline w-5 h-5 mb-2 fill-yellow"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"
                />
              </svg>
              <p class="mb-3 text-black">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.
              </p>
              <p class="mb-0 text-black font-bold">Person Name</p>
              <p class="mb-0 text-black opacity-50">Person Title</p>
            </div>
          </div>
        </div>
      </div>
      <g-image
        class="fixed top-0 right-0 z-0 w-2/3 md:w-3/6 opacity-25"
        alt="Quarter circle"
        src="~/assets/img/quarter-circle-bg.svg"
      />
    </div>
    <!-- end Bio -->

    <!-- Contact -->
    <div class="z-10 py-10 md:py-20 bg-yellow_50">
      <div class="inner">
        <div class="flex justify-center md:text-center">
          <div class="md:w-3/4">
            <h4 class="text-black text-3xl md:text-5xl font-display leading-extra-tight">
              Id'd love to build something amazing together..
            </h4>
            <p class="mb-5 text-gray-700">
              Have a project? Let's chat. I'm currently accepting inquiries for small and medium sized projects.
            </p>
            <a href="mailto:hi@adam.build" class="flex items-center md:justify-center">
              <svg
                class="w-10 mt-2 mr-1 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M24 0l-6 22-8.129-7.239 7.802-8.234-10.458 7.227-7.215-1.754 24-12zm-15 16.668v7.332l3.258-4.431-3.258-2.901z"
                />
              </svg>
              <span class="text-2xl md:text-3xl text-black underline">
                hi@adam.build
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
    <!-- end Contact -->

    <!-- Footer -->
    <footer class="z-10 py-5 md:py-10 bg-white">
      <div class="inner">
        <div class="md:flex justify-between text-sm">
          <div>&copy;{{ new Date().getFullYear() }} Adam Robertson</div>
          <div class="flex flex-wrap md:flex-no-wrap">
            <div class="md:inline">
              Built with&nbsp;
              <span class="inline-flex items-center">
                <g-image alt="Gridsome" src="~/assets/img/gridsome.svg" class="w-4" />
                &nbsp;
                <a href="https://gridsome.org/" target="_blank" class="font-medium underline" style="color: #17a672;">
                  Gridsome
                </a>
              </span>
              &nbsp;and&nbsp;
              <span class="inline-flex items-center">
                <g-image alt="VueJS" src="~/assets/img/vue.svg" class="w-4" />
                &nbsp;
                <a href="https://vuejs.org/" target="_blank" class="font-medium underline" style="color: #41b883;">
                  VueJS
                </a>
              </span>
              .
            </div>
            <div class="md:inline">
              Styled with&nbsp;
              <span class="inline-flex items-center">
                <g-image alt="Tailwind CSS" src="~/assets/img/tailwind-css.svg" class="w-4" />
                &nbsp;
                <a
                  href="https://tailwindcss.com/"
                  target="_blank"
                  class="font-medium underline"
                  style="color: #1dbfb8;"
                >
                  Tailwind CSS
                </a>
              </span>
            </div>
            <div class="md:inline">
              Deployed with&nbsp;
              <span class="inline-flex items-center">
                <g-image alt="Netlify" src="~/assets/img/netlify.svg" class="w-4" />
                &nbsp;
                <a
                  href="https://www.netlify.com/"
                  target="_blank"
                  class="font-medium underline"
                  style="color: #146396;"
                >
                  Netlfiy
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <!-- end Footer -->
  </Layout>
</template>

<!-- <static-query>
query {
  metadata {
    siteName
  }
}
</static-query> -->

<script>
export default {
  metaInfo: {
    title: "Adam Robertson - Single Page Gridsome Starter",
  },
};
</script>
