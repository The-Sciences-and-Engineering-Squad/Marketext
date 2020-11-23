import Cookies from 'universal-cookie';

export default class API {
  async logIn(data){
    const response = await fetch('/auth/login', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const response_1 = await response.json();
    if (response_1['authenticated']) {
      const cookies = new Cookies();
      cookies.set('token', response_1['token'], { path: '/' });
      window.location.href = '/';
    } else {
      return response_1['error'];
    }
  }



  async addBalance(data){
    const response = await fetch('/balance/add', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const response_1 = await response.json();
    return response_1['newBalance'];
  }

  async subBalance(data){
    const response = await fetch('/balance/sub', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const response_1 = await response.json();
    return response_1['newBalance'];
  }

  async getBalance(data){
    const response = await fetch('/balance/getBalance', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const response_1 = await response.json();
    return response_1['balance'];
  }

  async register(data){
    const response = await fetch('/auth/register', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const response_1 = await response.json();
    if (response_1['registered']) {
      window.location.href = '/Login';
    } else {
      return response_1['error'];
    }
  }

  async forgotPassword(data){
    const response = await fetch('/auth/forgot_password', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
        body: JSON.stringify(data),
      });
    const response_1 = await response.json();
    if (response_1['userExist']) {
      window.location.href = '/Login';
    } else {
      return response_1['error'];
    }
  }


  async addTextBooks(data){
    const response = await fetch('/currently/add', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
        body: JSON.stringify(data),
      });
    const response_1 = await response.json();
    if (response_1['Added']) {
      window.location.href = '/CurrentlyListed';
    } else {
      return response_1['error'];
    }
  }

  async getUserList(data){
    const response = await fetch('/currently/userList', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
        body: JSON.stringify(data),
      });
    const response_1 = await response.json();
    return response_1['books']
  }

   async getBookDetails(isbn) {


    const response = await fetch("https://www.googleapis.com/books/v1/volumes?q=isbn:" + isbn);
     const result = await response.json();
     if (result.items !== null) {
       let book = result.items[0];

       let title = (book["volumeInfo"]["title"]);
       let subtitle = (book["volumeInfo"]["subtitle"]);
       let authors = (book["volumeInfo"]["authors"]);


       let bookInfo = { 'title': title, 'subtitle': subtitle, ' authors': authors };
       return bookInfo;
     }
  }

  async showList(data){
    const response = await fetch('/currently/showList', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
        body: JSON.stringify(data),
      });
    const response_1 = await response.json();
    return response_1['booksListed']
  }

  async getUserName(id){
    const response = await fetch('/auth/getUserName', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(id),
    });
    const response_1 = await response.json();
    return response_1['username'];
  }


  async updateProfile(data){
    const response = await fetch('/profile/update', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const response_1 = await response.json();
    return response_1['newBalance'];
  }

async getUserProfile(data){
    const response = await fetch('/profile/getProfile', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
        body: JSON.stringify(data),
      });
    const response_1 = await response.json();
    return response_1['profile']
  }

}

