// AngularJS file

app.controller('MainController', ['$scope', function($scope) {
  $scope.specials = [
    // Sunday
    [
      {
        dish: 'Cabbage Rolls',
        description: 'with mashed potatoes and fresh dinner rolls',
        price: 8.50
      }
    ],
    // Monday
    [
      {
        dish: 'Swiss Steak',
        description: '',
        price: 7.25
      },
      {
        dish: 'Stuffed Pepper',
        description: '',
        price: 7.25
      },
      {
        dish: 'Chicken Tenders(4)',
        description: '',
        price: 7.25
      },
      {
        dish: 'Philly Steak Sandwich',
        description: 'served w/ one side',
        price: 7.25
      }
    ],
    // Tuesday
    [
      {
        dish: 'Baked Chicken',
        description: '',
        price: 7.25
      },
      {
        dish: 'Salisbury Steak',
        description: '',
        price: 7.25
      },
      {
        dish: 'Rigatoni',
        description: 'with meat sauce and tossed salad',
        price: 7.25
      },
      {
        dish: 'S&D\'s Chicken Bowl',
        description: 'chicken tenders, mashed potatoes, corn, cheese and yummy gravy all in a bowl! Served with tossed salad',
        price: 7.25
      }
    ],
    // Wednesday
    [
      {
        dish: 'Cabbage Rolls',
        description: '',
        price: 7.25
      },
      {
        dish: 'Liver & Onions',
        description: '',
        price: 7.25
      },
      {
        dish: 'Kolbassi & Sauerkraut',
        description: '',
        price: 7.25
      },
      {
        dish: 'Kolbassi Sandwich',
        description: 'served w/ one side',
        price: 7.25
      }
    ],
    // Thursday
    [
      {
        dish: 'Homemade Beef Stew',
        description: 'served w/ Italian bread',
        price: 4.75
      },
      {
        dish: 'Creamed Chicken',
        description: 'on a homemade biscuit, served w/ mashed potatoes and slaw',
        price: 7.25
      },
      {
        dish: 'Ham Loaf w/ Pineapple Glaze',
        description: '',
        price: 7.25
      },
      {
        dish: 'Reuben Sandwich',
        description: 'served w/ one side',
        price: 7.25
      }
    ],
    // Friday
    [
      {
        dish: 'Homemade Potato Soup',
        description: '',
        price: 3.95
      },
      {
        dish: 'New England Clam Chowder',
        description: '',
        price: 3.95
      },
      {
        dish: 'Pierogi(6)',
        description: 'served w/ Italian bread and tossed salad',
        price: 7.25
      },
      {
        dish: 'Fish Fry',
        description: 'fried or broiled fillets, served w/ fries, coleslaw & Italian bread',
        price: 8.50
      },
      {
        dish: 'Homemade Salmon Loaf',
        description: 'served with baked macaroni, green beans & Italian bread',
        price: 7.25
      },
      {
        dish: 'Cabbage & Noodles',
        description: 'served with baked macaroni, tuna salad & Italian bread',
        price: 7.25
      },
      {
        dish: 'Shrimp in a Basket',
        description: 'served w/ fries & coleslaw',
        price: 8.25
      },
      {
        dish: 'Crab Cakes(2)',
        description: 'golden fried, served w/ french fries & coleslaw',
        price: 8.50
      }
    ],
    // Saturday
    [
      {
        dish: 'Homemade Lima Bean Soup',
        description: '',
        price: 3.95
      },
      {
        dish: 'Spagheti & a Meatball',
        description: 'served with our homemade sauce & tossed salad',
        price: 7.50 
      },
      {
        dish: 'Beef Tips & Noodles',
        description: 'served with our own mushroom gravy',
        price: 7.50
      },
      {
        dish: 'Meat Loaf Platter',
        description: 'served with mashed potatoes & applesauce',
        price: 7.50
      },
      {
        dish: 'Stuffed Shells(3)',
        description: 'served w/ tossed salad',
        price: 7.50
      }
    ]
  ];
  
  $scope.Sunday = [
    {
      dish: 'Cabbage Rolls',
      description: 'with mashed potatoes and fresh dinner rolls',
      price: 8.50
    }
  ];

  $scope.Monday = [
    {
      dish: 'Swiss Steak',
      description: '',
      price: 7.25
    },
    {
      dish: 'Stuffed Pepper',
      description: '',
      price: 7.25
    },
    {
      dish: 'Chicken Tenders(4)',
      description: '',
      price: 7.25
    },
    {
      dish: 'Philly Steak Sandwich',
      description: 'served w/ one side',
      price: 7.25
    }
  ];

  $scope.Tuesday = [
    {
      dish: 'Baked Chicken',
      description: '',
      price: 7.25
    },
    {
      dish: 'Salisbury Steak',
      description: '',
      price: 7.25
    },
    {
      dish: 'Rigatoni',
      description: 'with meat sauce and tossed salad',
      price: 7.25
    },
    {
      dish: 'S&D\'s Chicken Bowl',
      description: 'chicken tenders, mashed potatoes, corn, cheese and yummy gravy all in a bowl! Served with tossed salad',
      price: 7.25
    }
  ];

  $scope.Wednesday = [
    {
      dish: 'Cabbage Rolls',
      description: '',
      price: 7.25
    },
    {
      dish: 'Liver & Onions',
      description: '',
      price: 7.25
    },
    {
      dish: 'Kolbassi & Sauerkraut',
      description: '',
      price: 7.25
    },
    {
      dish: 'Kolbassi Sandwich',
      description: 'served w/ one side',
      price: 7.25
    }
  ];

  $scope.Thursday = [
    {
      dish: 'Homemade Beef Stew',
      description: 'served w/ Italian bread',
      price: 4.75
    },
    {
      dish: 'Creamed Chicken',
      description: 'on a homemade biscuit, served w/ mashed potatoes and slaw',
      price: 7.25
    },
    {
      dish: 'Ham Loaf w/ Pineapple Glaze',
      description: '',
      price: 7.25
    },
    {
      dish: 'Reuben Sandwich',
      description: 'served w/ one side',
      price: 7.25
    }
  ];

  $scope.Friday = [
    {
      dish: 'Homemade Potato Soup',
      description: '',
      price: 3.95
    },
    {
      dish: 'New England Clam Chowder',
      description: '',
      price: 3.95
    },
    {
      dish: 'Pierogi(6)',
      description: 'served w/ Italian bread and tossed salad',
      price: 7.25
    },
    {
      dish: 'Fish Fry',
      description: 'fried or broiled fillets, served w/ fries, coleslaw & Italian bread',
      price: 8.50
    },
    {
      dish: 'Homemade Salmon Loaf',
      description: 'served with baked macaroni, green beans & Italian bread',
      price: 7.25
    },
    {
      dish: 'Cabbage & Noodles',
      description: 'served with baked macaroni, tuna salad & Italian bread',
      price: 7.25
    },
    {
      dish: 'Shrimp in a Basket',
      description: 'served w/ fries & coleslaw',
      price: 8.25
    },
    {
      dish: 'Crab Cakes(2)',
      description: 'golden fried, served w/ french fries & coleslaw',
      price: 8.50
    }
  ];

  $scope.Saturday = [
    {
      dish: 'Homemade Lima Bean Soup',
      description: '',
      price: 3.95
    },
    {
      dish: 'Spagheti & a Meatball',
      description: 'served with our homemade sauce & tossed salad',
      price: 7.50 
    },
    {
      dish: 'Beef Tips & Noodles',
      description: 'served with our own mushroom gravy',
      price: 7.50
    },
    {
      dish: 'Meat Loaf Platter',
      description: 'served with mashed potatoes & applesauce',
      price: 7.50
    },
    {
      dish: 'Stuffed Shells(3)',
      description: 'served w/ tossed salad',
      price: 7.50
    }
  ];
}]);