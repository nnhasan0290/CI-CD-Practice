const request = require("supertest");
const app = require("../index.js");

describe('GET /', () => {
    it('respond with hello world', () => {
        request(app).get('/').expect("Hello World", done);
    })
})