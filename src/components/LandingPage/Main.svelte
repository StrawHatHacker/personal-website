<section aria-labelledby="name">
  <main>
    <div id="main-text">
      <h1 id="name">
        <span id="name">Panos</span>
        <span id="surname">Ntais</span>
      </h1>
      <p>
        A supercharged <b>web developer</b> and <b>designer</b> with a focus on simplicity.
      </p>
    </div>

    <img
      id="main-img"
      src="/developer.svg"
      width="900"
      alt="A developer thinking with their laptop open"
    />
  </main>
</section>

<style>
  main {
    width: var(--section-width-desktop);
    margin: 120px auto 0 auto;
    display: flex;
    gap: 4rem;
    justify-content: center;
    align-items: center;
    max-width: 1800px;
    user-select: none;
  }

  #main-text {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    & > p {
      text-wrap: balance;
    }
  }

  #main-img {
    max-width: 50%;
    height: auto;
  }

  h1 {
    font-size: 6rem;
    letter-spacing: 3px;
    font-weight: 900;
    scale: 1.2 1;
    font-family: "Allerta Stencil", sans-serif;
    transform-origin: 0;
    line-height: 1;
    display: flex;
    flex-direction: column;
    margin: 0;
    position: relative;

    &::after {
      content: "he/him";
      font-family: "Kanit", sans-serif;
      font-size: 0.7rem;
      scale: 0.8 1;
      font-weight: normal;
      transform-origin: 0;
      position: absolute;
      bottom: 0.8em;
      left: 22.5em;
    }
  }

  #surname {
    opacity: 0.5;
  }

  @media screen and (max-width: 1000px) {
    main {
      margin-top: 80px;
      flex-direction: column;
      gap: 2rem;
      scale: 1 1;
    }

    #main-text {
      justify-content: center;
      text-align: center;
      align-items: center;
    }

    h1 {
      font-size: 4rem;
      transform-origin: center;
    }

    h1::after {
      bottom: -1.2em;
      left: 50%;
      translate: -50% 0;
    }

    #main-img {
      max-width: 100%;
      height: auto;
    }
  }

  @media screen and (max-width: 1000px) {
    main {
      margin-top: 60px;
    }
  }
</style>
