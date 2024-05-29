const { test, expect } = require("@playwright/test");

const postDataBodyAPI = require("../testdata/post_data.json");
const updateDataBodyAPI = require("../testdata/update_data.json");
var varData;

test("GET API test", async ({ request }) => {
  const getAPIResponse = await request.get("https://reqres.in/api/users/2");
  expect(getAPIResponse.status()).toBe(200);
});

test("Create user", async ({ request }) => {
  const postAPIResponse = await request.post("https://reqres.in/api/users", {
    data: postDataBodyAPI,
  });
  expect(postAPIResponse.status()).toBe(201);
  expect(postAPIResponse.ok()).toBeTruthy();
  console.log(await postAPIResponse.json());
  var response = await postAPIResponse.json();
  varData = response.id; // storing id in a variable to use in another test
});

test("Update user", async ({ request }) => {
  const updateAPIResponse = await request.put(
    "https://reqres.in/api/users/" + varData,
    {
      data: updateDataBodyAPI,
    }
  );
  expect(updateAPIResponse.status()).toBe(200);
  console.log(await updateAPIResponse.json());
});

test("Delete user", async ({ request }) => {
  const deleteAPIresponse = await request.delete(
    "https://reqres.in/api/users/" + varData
  );
  expect(deleteAPIresponse.status()).toBe(204);
});
