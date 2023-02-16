import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  padding: 0.25rem;

  div.spinner {
    position: relative;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 0.625rem;
  }

  div.spinner div {
    width: 6%;
    height: 16%;
    background: #8c8c8c;
    position: absolute;
    left: 49%;
    top: 43%;
    opacity: 0;
    border-radius: 50px;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
    animation: fade 1s linear infinite;
  }

  @keyframes fade {
    from {
      opacity: 1;
    }
    to {
      opacity: 0.25;
    }
  }

  div.spinner div.bar1 {
    transform: rotate(0deg) translate(0, -130%);
    animation-delay: 0s;
  }

  div.spinner div.bar2 {
    transform: rotate(30deg) translate(0, -130%);
    animation-delay: -0.9167s;
  }

  div.spinner div.bar3 {
    transform: rotate(60deg) translate(0, -130%);
    animation-delay: -0.833s;
  }
  div.spinner div.bar4 {
    transform: rotate(90deg) translate(0, -130%);
    animation-delay: -0.7497s;
  }
  div.spinner div.bar5 {
    transform: rotate(120deg) translate(0, -130%);
    animation-delay: -0.667s;
  }
  div.spinner div.bar6 {
    transform: rotate(150deg) translate(0, -130%);
    animation-delay: -0.5837s;
  }
  div.spinner div.bar7 {
    transform: rotate(180deg) translate(0, -130%);
    animation-delay: -0.5s;
  }
  div.spinner div.bar8 {
    transform: rotate(210deg) translate(0, -130%);
    animation-delay: -0.4167s;
  }
  div.spinner div.bar9 {
    transform: rotate(240deg) translate(0, -130%);
    animation-delay: -0.333s;
  }
  div.spinner div.bar10 {
    transform: rotate(270deg) translate(0, -130%);
    animation-delay: -0.2497s;
  }
  div.spinner div.bar11 {
    transform: rotate(300deg) translate(0, -130%);
    animation-delay: -0.167s;
  }
  div.spinner div.bar12 {
    transform: rotate(330deg) translate(0, -130%);
    animation-delay: -0.0833s;
  }
`
