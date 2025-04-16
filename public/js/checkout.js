// Checkout Functionality
document.addEventListener('DOMContentLoaded', function() {
  // Initialize variables
  const continueBtn = document.getElementById('continueToShipping');
  const toggleCartBtn = document.getElementById('toggleCart');
  const cartContent = document.getElementById('cartContent');
  const countrySelect = document.getElementById('country');
  const stateSelect = document.getElementById('state');
  const discountForm = document.querySelector('.discount-form');
  const cartItemsContainer = document.querySelector('.cart-content');
  const summaryTotals = document.querySelector('.summary-totals');
  
  // Toggle cart summary on mobile
  if (toggleCartBtn && cartContent) {
    toggleCartBtn.addEventListener('click', function() {
      cartContent.classList.toggle('expanded');
      
      const toggleText = toggleCartBtn.querySelector('.toggle-text');
      if (cartContent.classList.contains('expanded')) {
        toggleText.textContent = 'Hide order summary';
      } else {
        toggleText.textContent = 'Show order summary';
      }
    });
  }

  // Load saved user information from localStorage
  function loadSavedInfo() {
    const savedInfo = JSON.parse(localStorage.getItem('globalMunchUserInfo')) || {};
    
    if (savedInfo.email) document.getElementById('email').value = savedInfo.email;
    if (savedInfo.firstName) document.getElementById('firstName').value = savedInfo.firstName;
    if (savedInfo.lastName) document.getElementById('lastName').value = savedInfo.lastName;
    if (savedInfo.address) document.getElementById('address').value = savedInfo.address;
    if (savedInfo.apartment) document.getElementById('apartment').value = savedInfo.apartment;
    if (savedInfo.city) document.getElementById('city').value = savedInfo.city;
    if (savedInfo.country) document.getElementById('country').value = savedInfo.country;
    
    // If country is set, update state/province options
    if (savedInfo.country) {
      updateRegionOptions(savedInfo.country);
      if (savedInfo.state) document.getElementById('state').value = savedInfo.state;
    }
    
    if (savedInfo.zip) document.getElementById('zip').value = savedInfo.zip;
    if (savedInfo.phone) document.getElementById('phone').value = savedInfo.phone;
    
    // Check if save info checkbox should be checked
    if (savedInfo.saveInfo) document.getElementById('saveAddress').checked = true;
  }

  // Load country and state/province options
  function loadLocationOptions() {
    // Countries data (simplified)
    const countries = [
      { code: 'US', name: 'United States' },
      { code: 'CA', name: 'Canada' },
      { code: 'GB', name: 'United Kingdom' },
      { code: 'AU', name: 'Australia' },
      { code: 'DE', name: 'Germany' },
      { code: 'FR', name: 'France' },
      { code: 'JP', name: 'Japan' },
      { code: 'CN', name: 'China' },
      { code: 'IN', name: 'India' },
      { code: 'BR', name: 'Brazil' },
      { code: 'MX', name: 'Mexico' }
    ];
    
    // US states
    const usStates = [
      { code: 'AL', name: 'Alabama' },
      { code: 'AK', name: 'Alaska' },
      { code: 'AZ', name: 'Arizona' },
      { code: 'AR', name: 'Arkansas' },
      { code: 'CA', name: 'California' },
      { code: 'CO', name: 'Colorado' },
      { code: 'CT', name: 'Connecticut' },
      { code: 'DE', name: 'Delaware' },
      { code: 'FL', name: 'Florida' },
      { code: 'GA', name: 'Georgia' },
      { code: 'HI', name: 'Hawaii' },
      { code: 'ID', name: 'Idaho' },
      { code: 'IL', name: 'Illinois' },
      { code: 'IN', name: 'Indiana' },
      { code: 'IA', name: 'Iowa' },
      { code: 'KS', name: 'Kansas' },
      { code: 'KY', name: 'Kentucky' },
      { code: 'LA', name: 'Louisiana' },
      { code: 'ME', name: 'Maine' },
      { code: 'MD', name: 'Maryland' },
      { code: 'MA', name: 'Massachusetts' },
      { code: 'MI', name: 'Michigan' },
      { code: 'MN', name: 'Minnesota' },
      { code: 'MS', name: 'Mississippi' },
      { code: 'MO', name: 'Missouri' },
      { code: 'MT', name: 'Montana' },
      { code: 'NE', name: 'Nebraska' },
      { code: 'NV', name: 'Nevada' },
      { code: 'NH', name: 'New Hampshire' },
      { code: 'NJ', name: 'New Jersey' },
      { code: 'NM', name: 'New Mexico' },
      { code: 'NY', name: 'New York' },
      { code: 'NC', name: 'North Carolina' },
      { code: 'ND', name: 'North Dakota' },
      { code: 'OH', name: 'Ohio' },
      { code: 'OK', name: 'Oklahoma' },
      { code: 'OR', name: 'Oregon' },
      { code: 'PA', name: 'Pennsylvania' },
      { code: 'RI', name: 'Rhode Island' },
      { code: 'SC', name: 'South Carolina' },
      { code: 'SD', name: 'South Dakota' },
      { code: 'TN', name: 'Tennessee' },
      { code: 'TX', name: 'Texas' },
      { code: 'UT', name: 'Utah' },
      { code: 'VT', name: 'Vermont' },
      { code: 'VA', name: 'Virginia' },
      { code: 'WA', name: 'Washington' },
      { code: 'WV', name: 'West Virginia' },
      { code: 'WI', name: 'Wisconsin' },
      { code: 'WY', name: 'Wyoming' }
    ];
    
    // Canadian provinces
    const caProvinces = [
      { code: 'AB', name: 'Alberta' },
      { code: 'BC', name: 'British Columbia' },
      { code: 'MB', name: 'Manitoba' },
      { code: 'NB', name: 'New Brunswick' },
      { code: 'NL', name: 'Newfoundland and Labrador' },
      { code: 'NS', name: 'Nova Scotia' },
      { code: 'NT', name: 'Northwest Territories' },
      { code: 'NU', name: 'Nunavut' },
      { code: 'ON', name: 'Ontario' },
      { code: 'PE', name: 'Prince Edward Island' },
      { code: 'QC', name: 'Quebec' },
      { code: 'SK', name: 'Saskatchewan' },
      { code: 'YT', name: 'Yukon' }
    ];
    
    // Populate countries dropdown
    if (countrySelect) {
      // Clear existing options except the first one
      while (countrySelect.options.length > 1) {
        countrySelect.remove(1);
      }
      
      // Add country options
      countries.forEach(country => {
        const option = document.createElement('option');
        option.value = country.code;
        option.textContent = country.name;
        countrySelect.appendChild(option);
      });
    }
    
    // Set up country change event
    if (countrySelect) {
      countrySelect.addEventListener('change', function() {
        updateRegionOptions(this.value);
      });
    }
  }
  
  // Update state/province options based on selected country
  function updateRegionOptions(countryCode) {
    if (!stateSelect) return;
    
    // Clear existing options
    while (stateSelect.options.length > 1) {
      stateSelect.remove(1);
    }
    
    let regionOptions = [];
    let regionLabel = document.querySelector('label[for="state"]');
    
    // Set the appropriate regions based on country
    if (countryCode === 'US') {
      regionOptions = usStates;
      regionLabel.textContent = 'State';
      document.querySelector('label[for="zip"]').textContent = 'ZIP code';
    } else if (countryCode === 'CA') {
      regionOptions = caProvinces;
      regionLabel.textContent = 'Province';
      document.querySelector('label[for="zip"]').textContent = 'Postal code';
    } else if (countryCode === 'GB') {
      // UK counties would go here
      regionLabel.textContent = 'County';
      document.querySelector('label[for="zip"]').textContent = 'Postcode';
    } else {
      regionLabel.textContent = 'State/Province';
      document.querySelector('label[for="zip"]').textContent = 'Postal code';
    }
    
    // Add region options
    regionOptions.forEach(region => {
      const option = document.createElement('option');
      option.value = region.code;
      option.textContent = region.name;
      stateSelect.appendChild(option);
    });
  }
  
  // Load cart items from localStorage
  function loadCartItems() {
    const cart = JSON.parse(localStorage.getItem('globalMunchCart')) || [];
    
    if (cart.length === 0) {
      // If cart is empty, show message or redirect to cart page
      window.location.href = 'cart.html';
      return;
    }
    
    // Clear existing cart items
    const cartItemsElements = cartItemsContainer.querySelectorAll('.cart-item');
    cartItemsElements.forEach(item => {
      if (!item.classList.contains('static-item')) {
        item.remove();
      }
    });
    
    // Add cart items
    let subtotal = 0;
    cart.forEach(item => {
      const itemTotal = item.price * item.quantity;
      subtotal += itemTotal;
      
      const cartItemElement = document.createElement('div');
      cartItemElement.classList.add('cart-item');
      cartItemElement.innerHTML = `
        <div class="item-image">
          <img src="${item.image}" alt="${item.name}">
          <span class="item-quantity">${item.quantity}</span>
        </div>
        <div class="item-details">
          <div class="item-title">${item.name}</div>
          <div class="item-variant">${item.variant || ''}</div>
        </div>
        <div class="item-price">$${itemTotal.toFixed(2)}</div>
      `;
      
      // Insert before the discount section
      const discountSection = cartItemsContainer.querySelector('.discount-section');
      if (discountSection) {
        cartItemsContainer.insertBefore(cartItemElement, discountSection);
      } else {
        cartItemsContainer.appendChild(cartItemElement);
      }
    });
    
    // Update subtotal and total
    const subtotalElement = summaryTotals.querySelector('.summary-line:first-child span:last-child');
    const totalElement = summaryTotals.querySelector('.total-price');
    
    if (subtotalElement) subtotalElement.textContent = `$${subtotal.toFixed(2)}`;
    if (totalElement) totalElement.textContent = `$${subtotal.toFixed(2)} USD`;
  }
  
  // Apply discount code
  if (discountForm) {
    const applyButton = discountForm.querySelector('.apply-btn');
    const discountInput = discountForm.querySelector('input');
    
    applyButton.addEventListener('click', function() {
      const discountCode = discountInput.value.trim();
      
      if (!discountCode) {
        alert('Please enter a discount code');
        return;
      }
      
      // Example discount codes
      const validDiscounts = {
        'WELCOME10': 10,
        'GLOBAL20': 20,
        'FREESHIP': 'freeshipping'
      };
      
      if (validDiscounts[discountCode]) {
        const discount = validDiscounts[discountCode];
        const subtotalStr = summaryTotals.querySelector('.summary-line:first-child span:last-child').textContent;
        const subtotal = parseFloat(subtotalStr.replace('$', ''));
        
        // Add discount line if it doesn't exist
        let discountLine = summaryTotals.querySelector('.discount-line');
        if (!discountLine) {
          discountLine = document.createElement('div');
          discountLine.classList.add('summary-line', 'discount-line');
          
          // Insert before total
          const totalLine = summaryTotals.querySelector('.summary-line.total');
          summaryTotals.insertBefore(discountLine, totalLine);
        }
        
        if (discount === 'freeshipping') {
          // Handle free shipping
          discountLine.innerHTML = `<span>Discount (${discountCode})</span><span>Free shipping</span>`;
          
          // Update shipping line
          const shippingLine = summaryTotals.querySelector('.summary-line:nth-child(2) span:last-child');
          if (shippingLine) shippingLine.textContent = '$0.00';
          
          alert('Free shipping discount applied!');
        } else {
          // Handle percentage discount
          const discountAmount = (subtotal * discount / 100).toFixed(2);
          const newTotal = (subtotal - discountAmount).toFixed(2);
          
          discountLine.innerHTML = `<span>Discount (${discountCode})</span><span>-$${discountAmount}</span>`;
          
          // Update total
          const totalElement = summaryTotals.querySelector('.total-price');
          if (totalElement) totalElement.textContent = `$${newTotal} USD`;
          
          alert(`${discount}% discount applied!`);
        }
        
        // Disable input and button
        discountInput.disabled = true;
        applyButton.disabled = true;
      } else {
        alert('Invalid discount code');
      }
    });
  }
  
  // Form validation and submission
  if (continueBtn) {
    continueBtn.addEventListener('click', function() {
      // Get form values
      const email = document.getElementById('email').value;
      const firstName = document.getElementById('firstName').value;
      const lastName = document.getElementById('lastName').value;
      const address = document.getElementById('address').value;
      const apartment = document.getElementById('apartment').value;
      const city = document.getElementById('city').value;
      const country = document.getElementById('country').value;
      const state = document.getElementById('state').value;
      const zip = document.getElementById('zip').value;
      const phone = document.getElementById('phone').value;
      const saveInfo = document.getElementById('saveAddress').checked;
      
      // Basic validation
      if (!email || !firstName || !lastName || !address || !city || !country || !state || !zip) {
        alert('Please fill out all required fields');
        return;
      }
      
      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert('Please enter a valid email address');
        return;
      }
      
      // Save information to localStorage if checkbox is checked
      if (saveInfo) {
        const userInfo = {
          email,
          firstName,
          lastName,
          address,
          apartment,
          city,
          country,
          state,
          zip,
          phone,
          saveInfo
        };
        
        localStorage.setItem('globalMunchUserInfo', JSON.stringify(userInfo));
      }
      
      // Save current checkout state
      const checkoutState = {
        email,
        firstName,
        lastName,
        address,
        apartment,
        city,
        country,
        state,
        zip,
        phone
      };
      
      localStorage.setItem('globalMunchCheckoutState', JSON.stringify(checkoutState));
      
      // Redirect to shipping page (in a real implementation)
      alert('Form validated! In a real implementation, this would proceed to the shipping page.');
      // window.location.href = 'shipping.html';
    });
  }
  
  // Initialize page
  loadLocationOptions();
  loadSavedInfo();
  
  // For demo purposes, don't actually load cart items
  // loadCartItems();
});

// Utility function: format currency
function formatCurrency(amount) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  }).format(amount);
} 