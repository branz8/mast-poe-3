import React, { useState } from 'react';
import { Text, View, StyleSheet, FlatList, Image, TouchableOpacity, Animated, Easing } from 'react-native';

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
}

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

const App = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([
    
    {
      
      id: '1',
      name: 'Tomato Soup',
      description: 'Creamy tomato soup served with croutons.',
      price: 49.99,
      category: 'Starters',
      image: 'https://www.adailysomething.com/wp-content/uploads/2020/08/A-Daily-Something-x-Best-Tomato-Soup-5-768x1024.png',
    },
    {
      id: '2',
      name: 'Caesar Salad',
      description: 'Fresh romaine lettuce with Caesar dressing and croutons.',
      price: 59.99,
      category: 'Starters',
      image: 'https://th.bing.com/th/id/OIP.GJ8p5NoPRm-c1uWQspPYPAHaE5?w=206&h=136&c=7&r=0&o=5&pid=1.7',
    },
    {
      id: '3',
      name: 'Garlic Bread',
      description: 'Warm garlic bread topped with melted butter and herbs.',
      price: 39.99,
      category: 'Starters',
      image: 'https://th.bing.com/th/id/OIP.vKI490ek16eSp7KWNUUlNQHaKX?w=203&h=284&c=7&r=0&o=5&pid=1.7',
    },
    {
      id: '4',
      name: 'Bruschetta',
      description: 'Toasted bread topped with diced tomatoes and basil.',
      price: 45.99,
      category: 'Starters',
      image: 'https://th.bing.com/th/id/OIP.EqQ-crmMwM0DxxOVNoIDAAHaE8?w=203&h=203&c=7&r=0&o=5&pid=1.7',
    },
    {
      id: '5',
      name: 'Stuffed Mushrooms',
      description: 'Mushrooms filled with cheese and herbs.',
      price: 55.99,
      category: 'Starters',
      image: 'https://th.bing.com/th/id/OIP.SYY8Wx7lNI5c3N89r9XQMwHaKX?w=203&h=284&c=7&r=0&o=5&pid=1.7',
    },
    // Main Course
    {
      id: '6',
      name: 'Grilled Salmon',
      description: 'Freshly grilled salmon served with vegetables.',
      price: 149.99,
      category: 'Main Course',
      image: 'https://th.bing.com/th/id/OIP.beMt0i0mKqfstsqUgm7uZAHaDt?w=298&h=175&c=7&r=0&o=5&pid=1.7',
    },
    {
      id: '7',
      name: 'Beef Steak',
      description: 'Juicy beef steak cooked to your liking.',
      price: 199.99,
      category: 'Main Course',
      image: 'https://th.bing.com/th/id/OIP.x-vwVD7v7-YEgnAxfC4aoAHaEK?w=318&h=180&c=7&r=0&o=5&pid=1.7',
    },
    {
      id: '8',
      name: 'Chicken Alfredo',
      description: 'Creamy pasta with grilled chicken and Alfredo sauce.',
      price: 129.99,
      category: 'Main Course',
      image: 'https://th.bing.com/th/id/OIP.LzbvMmKys54tSxgfX53_RQAAAA?w=203&h=304&c=7&r=0&o=5&pid=1.7',
    },
    {
      id: '9',
      name: 'Vegetarian Pizza',
      description: 'Pizza topped with fresh vegetables and mozzarella.',
      price: 119.99,
      category: 'Main Course',
      image: 'https://th.bing.com/th/id/OIP.tn5X0VJOYElpMXynNR6xVAHaE8?w=306&h=204&c=7&r=0&o=5&pid=1.7',
    },
    {
      id: '10',
      name: 'Lamb Curry',
      description: 'Spicy lamb curry served with basmati rice.',
      price: 179.99,
      category: 'Main Course',
      image: 'https://th.bing.com/th/id/OIP.u5TWtpEVp99uoQB77fVFCQHaLH?w=134&h=201&c=7&r=0&o=5&pid=1.7',
    },
    // Desserts
    {
      id: '11',
      name: 'Chocolate Cake',
      description: 'Rich chocolate cake with a gooey center.',
      price: 79.99,
      category: 'Desserts',
      image: 'https://th.bing.com/th/id/OIP.Cyv03KZPLGWF-ORASAU8PQHaLH?w=203&h=304&c=7&r=0&o=5&pid=1.7',
    },
    {
      id: '12',
      name: 'Ice Cream Sundae',
      description: 'Vanilla ice cream topped with chocolate sauce.',
      price: 59.99,
      category: 'Desserts',
      image: 'https://th.bing.com/th/id/R.e1de9950c1f2a2d960b769d9a20d13e8?rik=zhkPKAJm6cpMjA&riu=http%3a%2f%2famericanprofile.com%2fwp-content%2fuploads%2f2007%2f07%2fice_cream_sundae.jpg&ehk=iLRfUWIm%2bf0Mp%2bOr4KILibUBI0xGovWIbLrbTDq3zqI%3d&risl=&pid=ImgRaw&r=0',
    },
    {
      id: '13',
      name: 'Cheesecake',
      description: 'Classic cheesecake with a graham cracker crust.',
      price: 89.99,
      category: 'Desserts',
      image: 'https://www.sugarsaltmagic.com/wp-content/uploads/2022/07/Baked-Ricotta-Cheesecake-8.jpg',
    },
    {
      id: '14',
      name: 'Tiramisu',
      description: 'Italian dessert made with coffee-soaked ladyfingers.',
      price: 99.99,
      category: 'Desserts',
      image: 'https://th.bing.com/th/id/OIP.FslUYAtTAGXbUizV0O0cNgAAAA?w=203&h=265&c=7&r=0&o=5&pid=1.7',
    },
    {
      id: '15',
      name: 'Fruit Salad',
      description: 'Fresh mix of seasonal fruits.',
      price: 49.99,
      category: 'Desserts',
      image: 'https://th.bing.com/th/id/OIP.I1JiiuGmAkZieEdeeIzADQHaLH?w=203&h=304&c=7&r=0&o=5&pid=1.7',
    },
    // Drinks
    {
      id: '16',
      name: 'Lemonade',
      description: 'Refreshing lemonade made from fresh lemons.',
      price: 29.99,
      category: 'Drinks',
      image: 'https://th.bing.com/th/id/OIP.DV7HT4CwpdlK4Q8OQx-QTQHaHa?w=203&h=203&c=7&r=0&o=5&pid=1.7',
    },
    {
      id: '17',
      name: 'Iced Coffee',
      description: 'Chilled coffee with a hint of vanilla.',
      price: 39.99,
      category: 'Drinks',
      image: 'https://th.bing.com/th/id/OIP.2m86YwVZYHm4kb2zXVO19AHaKy?w=203&h=295&c=7&r=0&o=5&pid=1.7',
    },
    {
      id: '18',
      name: 'Smoothie',
      description: 'Blended fruits and yogurt for a healthy drink.',
      price: 49.99,
      category: 'Drinks',
      image: 'https://th.bing.com/th/id/OIP.Tpxpb2alClQ0qvvBiWyzlQHaLH?w=203&h=304&c=7&r=0&o=5&pid=1.7',
    },
    {
      id: '19',
      name: 'Green Tea',
      description: 'Hot green tea with antioxidants.',
      price: 19.99,
      category: 'Drinks',
      image: 'https://th.bing.com/th/id/R.3ab0fed12137a6fbb16a67227a4b6ff8?rik=L4v25OW9E%2fppzw&pid=ImgRaw&r=0',
    },
    {
      id: '20',
      name: 'Sparkling Water',
      description: 'Carbonated water with a hint of lime.',
      price: 24.99,
      category: 'Drinks',
      image: 'https://th.bing.com/th/id/OIP.Z9HkldRrUq5F_v9aG0pyaQHaE8?w=306&h=204&c=7&r=0&o=5&pid=1.7',
    },
  ]);

  const [cart, setCart] = useState<CartItem[]>([]);

  const [currentScreen, setCurrentScreen] = useState('Home');
  const [filterCategory, setFilterCategory] = useState('All');
  const [scaleValue] = useState(new Animated.Value(0));

  const addToCart = (item: MenuItem) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (itemId: string) => {
    setCart((prevCart) => prevCart.filter((cartItem) => cartItem.id !== itemId));
  };

  const calculateAveragePrices = (): { [category: string]: string } => {
    const categories = ['Starters', 'Main Course', 'Desserts', 'Drinks'];
    const averages: { [category: string]: string } = {};

    categories.forEach((category) => {
      const categoryItems = menuItems.filter(
        (item) => item.category === category
      );
      const total = categoryItems.reduce((sum, item) => sum + item.price, 0);
      averages[category] =
        categoryItems.length > 0
          ? (total / categoryItems.length).toFixed(2)
          : '0.00';
    });

    return averages;
  };

  const renderHomePage = () => (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://th.bing.com/th/id/OIP.8tCCMlejIbIcQNUUINYfiAHaHa?rs=1&pid=ImgDetMain' }} 
        style={styles.logo}
      />
      <Text style={styles.title}>Welcome to Christoffel's Restaurant</Text>
      <Text style={styles.description}>Enjoy delicious meals with a variety of options for all tastes.</Text>

      <TouchableOpacity style={styles.button} onPress={() => setCurrentScreen('Filter')}>
        <Text style={styles.buttonText}>Go to Menu</Text>
      </TouchableOpacity>
    </View>
  );

  const renderFilterPage = () => {
    const averages = calculateAveragePrices();

    return (
      <View style={styles.container}>
        <Image
          source={{ uri: 'https://th.bing.com/th/id/OIP.8tCCMlejIbIcQNUUINYfiAHaHa?rs=1&pid=ImgDetMain' }} 
          style={styles.logo}
        />
        <Text style={styles.title}>Menu</Text>
        <Text style={styles.subtitle}>Average Prices by Category:</Text>
        {Object.keys(averages).map((category) => (
          <Text key={category} style={styles.average}>
            {category}: R{averages[category]}
          </Text>
        ))}

        <Text style={styles.subtitle}>Filter by Category:</Text>
        <View style={styles.filterButtons}>
          {['All', 'Starters', 'Main Course', 'Desserts', 'Drinks'].map((category) => (
            <TouchableOpacity
              key={category}
              style={[styles.button, filterCategory === category && styles.selectedButton]}
              onPress={() => setFilterCategory(category)}
            >
              <Text style={styles.buttonText}>{category}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <FlatList
          data={menuItems.filter(
            (item) =>
              filterCategory === 'All' || item.category.toLowerCase() === filterCategory.toLowerCase()
          )}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Animated.View style={[styles.menuItem, { opacity: scaleValue }]}>
              <Image source={{ uri: item.image }} style={styles.menuImage} />
              <View style={styles.itemDetails}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text>{item.description}</Text>
                <Text style={styles.itemPrice}>R{item.price.toFixed(2)}</Text>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => addToCart(item)}
                >
                  <Text style={styles.buttonText}>Add to Cart</Text>
                </TouchableOpacity>
              </View>
            </Animated.View>
          )}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => setCurrentScreen('Cart')}
        >
          <Text style={styles.buttonText}>Go to Cart</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const renderCartPage = () => (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://th.bing.com/th/id/OIP.8tCCMlejIbIcQNUUINYfiAHaHa?rs=1&pid=ImgDetMain' }} // 
        style={styles.logo}
      />
      <Text style={styles.title}>Your Cart</Text>
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.cartItem}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text>{item.quantity} x R{item.price.toFixed(2)}</Text>
            <TouchableOpacity onPress={() => removeFromCart(item.id)}>
              <Text style={styles.removeButton}>Remove</Text>
            </TouchableOpacity>
          </View>
        )}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => setCurrentScreen('Home')}
      >
        <Text style={styles.buttonText}>Go to Home</Text>
      </TouchableOpacity>
    </View>
  );

  React.useEffect(() => {
    Animated.timing(scaleValue, {
      toValue: 1,
      duration: 600,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <View style={styles.container}>
      {currentScreen === 'Home' && renderHomePage()}
      {currentScreen === 'Filter' && renderFilterPage()}
      {currentScreen === 'Cart' && renderCartPage()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FAF3E0', // Soft background color
    justifyContent: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
    textShadowColor: '#FFB6C1',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 10,
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
    color: '#666',
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 10,
    elevation: 5,
    shadowColor: '#888',
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 6,
    shadowOpacity: 0.3,
    marginTop: 20,
  },
  selectedButton: {
    backgroundColor: '#388E3C',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 22,
    marginVertical: 15,
    color: '#333',
  },
  average: {
    fontSize: 18,
    marginVertical: 5,
    color: '#888',
  },
  menuItem: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#aaa',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    shadowOpacity: 0.2,
    padding: 10,
    elevation: 3,
  },
  menuImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 20,
  },
  itemDetails: {
    flex: 1,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemPrice: {
    fontSize: 16,
    color: '#4CAF50',
    marginVertical: 10,
  },
  filterButtons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  cartItem: {
    marginBottom: 20,
  },
  removeButton: {
    color: '#F44336',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default App;
