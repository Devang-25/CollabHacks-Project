import webbrowser

url = 'http://localhost:3333?name=devangs'

# MacOS
chrome_path = 'open -a /Applications/Google\ Chrome.app %s'

webbrowser.get(chrome_path).open(url)
