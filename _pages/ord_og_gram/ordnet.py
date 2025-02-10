# -*- coding: utf-8 -*-

from urllib import request, parse
from bs4 import BeautifulSoup
import argparse

def main():
    parser = argparse.ArgumentParser(description='Get word pronunciation from ordnet.dk')
    parser.add_argument('-n', '--words', nargs='+', default=[])
    parser.add_argument('--path')
    args = parser.parse_args()

    words = args.words
    for word in words:
        url = "https://ordnet.dk/ddo/ordbog?query=" + parse.quote(word)
        page = request.urlopen(url)
        soup = BeautifulSoup(page, "html.parser")

        # Find the line containing ".mp3" URL
        mp3_line = soup.find("a", href=lambda href: href and ".mp3" in href)["href"]
        script = soup.find("span", class_="lydskrift").text

        # Assuming you have the HTML content in a file named "your_file.html"
        file_path = args.path

        with open(file_path, "r", encoding="utf-8") as file:
            html_content = file.read()
        
        soup = BeautifulSoup(html_content, "html.parser")
        # for tr in soup.find_all('tr'):
        #     l = len(tr.find_all('td'))
        #     if l != 0 and word in tr.find_all('td')[0].text:
        #         text = tr.find_all('td')[0].text
        #         tr.find_all('td')[0].string.replace_with(BeautifulSoup(f'<a href="{url}">{text}</a>', 'html.parser'))

        # Find the relevant audio and span elements
        audio_element = soup.find("audio", {"id": word})
        span_element = soup.find("span", onclick="playSound('"+word+"');")

        # Update the src attribute of the audio element
        if audio_element:
            audio_element['src'] = mp3_line

        # Update the content inside the span element
        if span_element:
            span_element.string = script[:-2]

        # Save the modified HTML content back to the file
        with open(file_path, "w", encoding="utf-8") as output_file:
            output_file.write(str(soup))

if __name__ == "__main__":
    main()
    # file_path = 'verbs.html'
    #
    # with open(file_path, "r", encoding="utf-8") as file:
    #     html_content = file.read()
    #
    # soup = BeautifulSoup(html_content, "html.parser")
    # for tr in soup.find_all('tr'):
    #     l = len(tr.find_all('td'))
    #     if l != 0:
    #         text = tr.find_all('td')[0].text
    #         url = "https://ordnet.dk/ddo/ordbog?query=" + parse.quote(text.split(' ')[2])
    #         tr.find_all('td')[0].string.replace_with(BeautifulSoup(f'<a href="{url}">{text}</a>', 'html.parser'))
    #
    # with open(file_path, "w", encoding="utf-8") as output_file:
    #     output_file.write(str(soup))