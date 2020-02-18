import { createGlobalStyle } from 'styled-components';
import Colors from '../../theme/color';

const GlobalStyles = createGlobalStyle` 
body {
	font-family: "Graphik" , -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
	scroll-behavior: smooth;
	font-feature-settings:  "calt", "kern", "liga";
	margin: 0;
	padding: 0;
	background: #F7FAFC;
	color: ${Colors.primaryTextColor};
    -webkit-font-smoothing: antialiased;

}

.heading {
	font-family: "Cereal",-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif !important;
	font-weight:500;
	letter-spacing:-0.025rem;
	opacity: 0.9;
}



* {
	/* outline: 1px solid red; */
}

.sticky {
	position: sticky;
	top: 0;
	width: 100%;
}

html {
	font-family: "Graphik" ,-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif !important;
	margin: 0;
	padding: 0;
	overflow: scroll;
	overflow-x: hidden;
}

::-webkit-scrollbar {
	width: 0px;
}

::-webkit-scrollbar-thumb {
	background: #FF0000;
}

* {
	margin: 0;
	padding: 0;
}

a {
	text-decoration: none;
}

.pointer {
	cursor: pointer;
}

#nprogress {
	pointer-events: none
}

#nprogress .bar {
	background: white;
	position: fixed;
	z-index: 1031;
	top: 0;
	left: 0;
	width: 100%;
	height: 3px
}

#nprogress .peg {
	display: block;
	position: absolute;
	right: 0;
	width: 100px;
	height: 100%;
	opacity: 1;
	-webkit-transform: rotate(3deg) translate(0px, -4px);
	-ms-transform: rotate(3deg) translate(0px, -4px);
	transform: rotate(3deg) translate(0px, -4px)
}

#nprogress .spinner {
	position: fixed;
	z-index: 1031;
	bottom: 20px;
	right: 20px
}

#nprogress .spinner-icon {
	width: 20px;
	height: 20px;
	box-sizing: border-box;
	border: solid 2px transparent;
	border-top-color: ${Colors.primaryColor};
	border-left-color:${Colors.primaryColor};
	border-radius: 50%;
	-webkit-animation: nprogress-spinner 400ms linear infinite;
	animation: nprogress-spinner 400ms linear infinite
}

.nprogress-custom-parent {
	overflow: hidden;
	position: relative
}

.nprogress-custom-parent #nprogress .spinner,
.nprogress-custom-parent #nprogress .bar {
	position: absolute
}

@-webkit-keyframes nprogress-spinner {
	0% {
		-webkit-transform: rotate(0deg)
	}
	100% {
		-webkit-transform: rotate(360deg)
	}
}

@keyframes nprogress-spinner {
	0% {
		transform: rotate(0deg)
	}
	100% {
		transform: rotate(360deg)
	}
}

.center {
	display: flex;
	align-items: center;
	justify-content: center
}

.container {
	padding: 0 100px;
	@media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
		padding: 20px;
	}
}

.link {
	display: inline-block;
	position: relative;
	color:${Colors.primaryTextColor};
}

.link:hover {
	font-style: italic;
}

.absolute {
	position: absolute;
}

.sk-fading-circle {
	width: 20px;
	height: 20px;
	position: relative;
}

.sk-fading-circle .sk-circle {
	width: 100%;
	height: 100%;
	position: absolute;
	left: 0;
	top: 0;
}

.sk-fading-circle .sk-circle:before {
	content: '';
	display: block;
	margin: 0 auto;
	width: 15%;
	height: 15%;
	background-color: white;
	border-radius: 100%;
	-webkit-animation: sk-circleFadeDelay 1.2s infinite ease-in-out both;
	animation: sk-circleFadeDelay 1.2s infinite ease-in-out both;
}

.sk-fading-circle .sk-circle2 {
	-webkit-transform: rotate(30deg);
	-ms-transform: rotate(30deg);
	transform: rotate(30deg);
}

.sk-fading-circle .sk-circle3 {
	-webkit-transform: rotate(60deg);
	-ms-transform: rotate(60deg);
	transform: rotate(60deg);
}

.sk-fading-circle .sk-circle4 {
	-webkit-transform: rotate(90deg);
	-ms-transform: rotate(90deg);
	transform: rotate(90deg);
}

.sk-fading-circle .sk-circle5 {
	-webkit-transform: rotate(120deg);
	-ms-transform: rotate(120deg);
	transform: rotate(120deg);
}

.sk-fading-circle .sk-circle6 {
	-webkit-transform: rotate(150deg);
	-ms-transform: rotate(150deg);
	transform: rotate(150deg);
}

.sk-fading-circle .sk-circle7 {
	-webkit-transform: rotate(180deg);
	-ms-transform: rotate(180deg);
	transform: rotate(180deg);
}

.sk-fading-circle .sk-circle8 {
	-webkit-transform: rotate(210deg);
	-ms-transform: rotate(210deg);
	transform: rotate(210deg);
}

.sk-fading-circle .sk-circle9 {
	-webkit-transform: rotate(240deg);
	-ms-transform: rotate(240deg);
	transform: rotate(240deg);
}

.sk-fading-circle .sk-circle10 {
	-webkit-transform: rotate(270deg);
	-ms-transform: rotate(270deg);
	transform: rotate(270deg);
}

.sk-fading-circle .sk-circle11 {
	-webkit-transform: rotate(300deg);
	-ms-transform: rotate(300deg);
	transform: rotate(300deg);
}

.sk-fading-circle .sk-circle12 {
	-webkit-transform: rotate(330deg);
	-ms-transform: rotate(330deg);
	transform: rotate(330deg);
}

.sk-fading-circle .sk-circle2:before {
	-webkit-animation-delay: -1.1s;
	animation-delay: -1.1s;
}

.sk-fading-circle .sk-circle3:before {
	-webkit-animation-delay: -1s;
	animation-delay: -1s;
}

.sk-fading-circle .sk-circle4:before {
	-webkit-animation-delay: -0.9s;
	animation-delay: -0.9s;
}

.sk-fading-circle .sk-circle5:before {
	-webkit-animation-delay: -0.8s;
	animation-delay: -0.8s;
}

.sk-fading-circle .sk-circle6:before {
	-webkit-animation-delay: -0.7s;
	animation-delay: -0.7s;
}

.sk-fading-circle .sk-circle7:before {
	-webkit-animation-delay: -0.6s;
	animation-delay: -0.6s;
}

.sk-fading-circle .sk-circle8:before {
	-webkit-animation-delay: -0.5s;
	animation-delay: -0.5s;
}

.sk-fading-circle .sk-circle9:before {
	-webkit-animation-delay: -0.4s;
	animation-delay: -0.4s;
}

.sk-fading-circle .sk-circle10:before {
	-webkit-animation-delay: -0.3s;
	animation-delay: -0.3s;
}

.sk-fading-circle .sk-circle11:before {
	-webkit-animation-delay: -0.2s;
	animation-delay: -0.2s;
}

.sk-fading-circle .sk-circle12:before {
	-webkit-animation-delay: -0.1s;
	animation-delay: -0.1s;
}

@-webkit-keyframes sk-circleFadeDelay {
	0%,
	39%,
	100% {
		opacity: 0;
	}
	40% {
		opacity: 1;
	}
}

@keyframes sk-circleFadeDelay {
	0%,
	39%,
	100% {
		opacity: 0;
	}
	40% {
		opacity: 1;
	}
}

@keyframes slide-bottom {
	0% {
		-webkit-transform: translateY(0);
		transform: translateY(0);
	}
	100% {
		-webkit-transform: translateY(200px);
		transform: translateY(200px);
	}
}

`;
export default GlobalStyles;
