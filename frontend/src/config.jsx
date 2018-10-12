var Config = {
	apiBaseUrl: "http://" + window.location.host
}

if (/.*localhost:8888.*/.test(window.location.href)) {
	Config.apiBaseUrl = "http://localhost:8080"
}

export default Config;
