const chai = require('chai');
const chaiHttp = require('chai-http');
const url = 'http://localhost:9000';
const app = require('./app');

chai.use(chaiHttp);
const expect = chai.expect;

describe('Service Record API Test Suite', () => {
  let serviceId;

  // Test the CREATE (POST) endpoint
  it('should create a new service record', async function () {
    const createServiceData = { 
      name: 'Test Service'
    };

    try {
      const response = await chai.request(url)
        .post('/serviceRecord/create-service-record')
        .send(createServiceData);

      expect(response).to.have.status(200);
      expect(response.body).to.have.property('data');
      console.log(response.body);
      serviceId = response.body.data.id;
    } catch (error) {
      throw error;
    }
  });

  // Test the READ (GET) endpoint
  it('should get all service records', async function() {
    try {
      const response = await chai.request(url)
        .get('/serviceRecord/get-all-service-records');

      expect(response).to.have.status(200);
    } catch (error) {
      throw error;
    }
  });

  // Test the GET (GET) endpoint
  it('should get a service record by ID', async function() {
    try {
      const response = await chai.request(url)
        .get(`/serviceRecord/${serviceId}`);

      expect(response).to.have.status(200);
    } catch (error) {
      throw error;
    }
  });

  // Test the UPDATE (PUT) endpoint
  it('should update a service record', async function() {
    const updatedServiceData = { 
      name: 'Updated Test Service'
    };

    try {
      let response = await chai.request(url)
        .put(`/serviceRecord/update/${serviceId}`)
        .send(updatedServiceData);

      expect(response).to.have.status(200);
    } catch (error) {
      throw error;
    }
  });

  // Test the DELETE (DELETE) endpoint
  it('should delete a service record', async function() {
    try {
      let response = await chai.request(url)
        .delete(`/serviceRecord/delete/${serviceId}`);

      expect(response).to.have.status(200);
    } catch (error) {
      throw error;
    }
  });
});

