
# datamoc.com Dashboard (assignment)
This Full Stack web application is designed to visualize activities and orders using line and bar graphs, while also leveraging MongoDB for data storage. The project includes the creation of APIs that facilitate seamless connectivity to the MongoDB database.

The application provides users with an intuitive interface to view and interact with the visual representations of the activity and order data. By utilizing MongoDB's data storage capabilities, the project ensures efficient data retrieval and management for a smooth user experience.

In addition to the visualizations, the application features a search bar that allows users to query the MongoDB database for specific individuals. Upon searching, the application dynamically retrieves relevant data and provides links to corresponding LinkedIn profiles, creating a comprehensive and interconnected experience.

To enhance usability, the project incorporates responsive design principles, ensuring that the application adapts and performs optimally across different devices and screen sizes.

The README file accompanying the project provides detailed information on how to set up and run the application, as well as any additional dependencies or configurations required.

Note: The primary objective of this project is to showcase Full Stack development skills, particularly the integration of MongoDB for data storage and the creation of APIs to facilitate data retrieval and manipulation.
## Authors

- [@Abhikumar Gupta](https://github.com/Abhi87374)


## Deployment

Download or clone the repo. 

```bash
git clone git@github.com:hars008/datamoc.git
```

open the folder in terminal, and run commands

```bash
  npm install 
  npm run dev
```

Open http://localhost:3000 with your browser to see the result.



    




## API Reference

#### Get orders with their profit in particular month of the year

```http
   /api/orders
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. api endpoints |

#### Get activities data

```http
   /api/activities?year-${year}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `year`      | `string` | **Required**. year of activity to fetch |

#### get all users or people, for search box

```http
  api/search
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `api_key`      | `string` | **Required**. api endpoints  |



<!-- ## Demo -->



