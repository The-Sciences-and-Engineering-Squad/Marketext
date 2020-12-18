## Marketext
School project for CSc 473 - Website Design Course, with Prof. Michelle Sasson, at the City College of New York

Contributors: Kevin Chen, Albert Felix, Eddie Ozuna, & Dor Ulman

## App Concept:
Marketext is a web application where users can buy, sell, trade, and swap school textbooks. These four options are described as follows:
- **Buy**: Users are able to make postings for a textbook that they wish to sell, and can include the price that they are looking to sell it for as well as the condition that the textbook is in.
- **Sell**: Users are able to search for textbooks that they may be looking to purchase, browsing through listings according to price, condition, edition, etc.
- **Trade**: Users are able to trade a textbook they own for another specific textbook they are looking for. The owner lists the textbooks that they are willing to trade it for, with value not playing a factor.
- **Swap**: Users are able to swap a textbook that they already own for something else, with more flexibility on what they are looking for. Users are not looking for anything specific; instead, they are open to offers, and value does play a factor.

## Tools:
- **Frontend**: React, Bootstrap
- **Backend**: Python, Flask
- **Others**: Travis CI, SonarCloud Coverage

# Project Structure:
```
.
├── LICENSE.md
├── README.md
├── client
│   ├── README.md
│   ├── package-lock.json
│   ├── package.json
│   ├── public
│   │   ├── favicon.ico
│   │   ├── index.html
│   │   ├── logo192.png
│   │   ├── logo512.png
│   │   └── manifest.json
│   └── src
│       ├── App.css
│       ├── App.js
│       ├── App.test.js
│       ├── components
│       │   ├── API
│       │   │   ├── api.js
│       │   │   └── api.test.js
│       │   ├── AccessPages
│       │   │   ├── ForgotPassword
│       │   │   │   ├── ForgotPassword.css
│       │   │   │   ├── ForgotPassword.js
│       │   │   │   └── ForgotPassword.test.js
│       │   │   ├── Login
│       │   │   │   ├── Login.css
│       │   │   │   ├── Login.js
│       │   │   │   └── Login.test.js
│       │   │   └── Register
│       │   │       ├── Register.css
│       │   │       ├── Register.js
│       │   │       └── Register.test.js
│       │   ├── Footer
│       │   │   ├── Footer.css
│       │   │   └── Footer.js
│       │   ├── MainPages
│       │   │   ├── Buy
│       │   │   │   ├── Buy.css
│       │   │   │   ├── Buy.js
│       │   │   │   └── Buy.test.js
│       │   │   ├── Home
│       │   │   │   ├── Home.css
│       │   │   │   └── Home.js
│       │   │   ├── RenderTextbooks
│       │   │   │   ├── RenderTextbooks.css
│       │   │   │   ├── RenderTextbooks.js
│       │   │   │   └── RenderTextbooks.test.js
│       │   │   ├── Searchbar
│       │   │   │   ├── Searchbar.css
│       │   │   │   ├── Searchbar.js
│       │   │   │   └── Searchbar.test.js
│       │   │   ├── Sell
│       │   │   │   ├── Sell.css
│       │   │   │   ├── Sell.js
│       │   │   │   └── Sell.test.js
│       │   │   ├── Swap
│       │   │   │   ├── Swap.css
│       │   │   │   ├── Swap.js
│       │   │   │   └── Swap.test.js
│       │   │   ├── Textbooks
│       │   │   │   ├── Textbooks.css
│       │   │   │   ├── Textbooks.js
│       │   │   │   └── Textbooks.test.js
│       │   │   └── Trade
│       │   │       ├── Trade.css
│       │   │       ├── Trade.js
│       │   │       └── Trade.test.js
│       │   ├── Navbar1
│       │   │   ├── Navbar1.css
│       │   │   ├── Navbar1.js
│       │   │   └── Navbar1.test.js
│       │   ├── Navbar2
│       │   │   ├── Navbar2.css
│       │   │   ├── Navbar2.js
│       │   │   └── Navbar2.test.js
│       │   ├── Others
│       │   │   ├── NoAccess.js
│       │   │   ├── NoAccess.test.js
│       │   │   ├── ScrollToTop.js
│       │   │   └── ScrollToTop.test.js
│       │   ├── Sidebar
│       │   │   ├── Sidebar.css
│       │   │   ├── Sidebar.js
│       │   │   └── Sidebar.test.js
│       │   └── UserPages
│       │       ├── AddNew
│       │       │   ├── AddNew.css
│       │       │   ├── AddNew.js
│       │       │   └── AddNew.test.js
│       │       ├── Balance
│       │       │   ├── Balance.css
│       │       │   ├── Balance.js
│       │       │   └── Balance.test.js
│       │       ├── CurrentlyListed
│       │       │   ├── CurrentlyListed.css
│       │       │   ├── CurrentlyListed.js
│       │       │   └── CurrentlyListed.test.js
│       │       ├── Manage
│       │       │   ├── Manage.css
│       │       │   ├── Manage.js
│       │       │   └── Manage.test.js
│       │       ├── Message
│       │       │   ├── Message.css
│       │       │   ├── Message.js
│       │       │   └── Message.test.js
│       │       ├── Profile
│       │       │   ├── Profile.css
│       │       │   ├── Profile.js
│       │       │   └── Profile.test.js
│       │       └── TransactionHistory
│       │           ├── TransactionHistory.css
│       │           ├── TransactionHistory.js
│       │           └── TransactionHistory.test.js
│       ├── index.css
│       ├── index.js
│       ├── public
│       │   ├── BlankProfileImage.png
│       │   ├── Buy.png
│       │   ├── Checklist.png
│       │   ├── Goods.png
│       │   ├── Sell.png
│       │   ├── Send.png
│       │   ├── Swap.png
│       │   ├── Trade.png
│       │   ├── logo192.png
│       │   ├── sampletextbook.jpg
│       │   └── textbook.png
│       ├── serviceWorker.js
│       └── setupTests.js
├── package-lock.json
├── server
│   ├── README.md
│   ├── __init__.py
│   ├── __pycache__
│   │   └── __init__.cpython-37.pyc
│   ├── controllers
│   │   ├── __pycache__
│   │   │   ├── balance_controller.cpython-37.pyc
│   │   │   ├── books_controller.cpython-37.pyc
│   │   │   ├── currently_controller.cpython-37.pyc
│   │   │   └── user_controller.cpython-37.pyc
│   │   ├── balance_controller.py
│   │   ├── books_controller.py
│   │   ├── contact_controller.py
│   │   ├── currently_controller.py
│   │   ├── profile_controller.py
│   │   ├── token.py
│   │   ├── transaction_controller.py
│   │   └── user_controller.py
│   ├── database.sql
│   ├── models
│   │   ├── __pycache__
│   │   │   ├── balance_model.cpython-37.pyc
│   │   │   ├── books_model.cpython-37.pyc
│   │   │   ├── currently_model.cpython-37.pyc
│   │   │   └── user_model.cpython-37.pyc
│   │   ├── balance_model.py
│   │   ├── books_model.py
│   │   ├── contact_model.py
│   │   ├── currently_model.py
│   │   ├── profile_model.py
│   │   ├── transaction_model.py
│   │   └── user_model.py
│   └── requirements.txt
└── sonar-project.properties
```

## App Demo
Please refer to this [video link](https://www.youtube.com/watch?v=kHUlsg4tUJk&feature=youtu.be) for a brief overview to our application.

## Notes
This is a our final project for CSc 473 - Website Design Course, with Prof. Michelle Sasson, at the City College of New York

## License
This project is licensed under the terms of the MIT license.

## Badges
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=The-Sciences-and-Engineering-Squad_Marketext&metric=coverage)](https://sonarcloud.io/dashboard?id=The-Sciences-and-Engineering-Squad_Marketext)

[![Quality gate](https://sonarcloud.io/api/project_badges/quality_gate?project=The-Sciences-and-Engineering-Squad_Marketext)](https://sonarcloud.io/dashboard?id=The-Sciences-and-Engineering-Squad_Marketext)

[![SonarCloud](https://sonarcloud.io/images/project_badges/sonarcloud-white.svg)](https://sonarcloud.io/dashboard?id=The-Sciences-and-Engineering-Squad_Marketext)
