const products = {
  individual: [
    {
      name: 'Individual Life Policy',
      description: 'Comprehensive life insurance coverage tailored to your personal needs and financial goals.',
      features: [
        'Flexible coverage options',
        'Customizable benefits',
        'Death and disability benefits',
        'Optional riders available'
      ],
      icon: 'fa-user-shield'
    },
    {
      name: 'Pinnacle Life Protection Plan',
      description: 'Our flagship protection plan offering complete financial security for you and your loved ones.',
      features: [
        'Enhanced coverage benefits',
        'Investment component',
        'Flexible premium payment',
        'Additional protection riders'
      ],
      icon: 'fa-shield-alt'
    },
    {
      name: 'Royal Funeral Policy',
      description: 'Comprehensive funeral coverage ensuring dignified arrangements without financial burden.',
      features: [
        'Immediate funeral expenses coverage',
        'Family support benefits',
        'Quick claims processing',
        'Flexible payment options'
      ],
      icon: 'fa-heart'
    }
  ],
  group: [
    {
      name: 'Comprehensive Group Life Policy',
      description: 'Complete group life insurance solution for organizations and their employees.',
      features: [
        'Death and disability coverage',
        'Critical illness benefits',
        'Family protection',
        'Flexible benefit structure'
      ],
      icon: 'fa-users'
    },
    {
      name: 'Keyman Protection Policy',
      description: 'Protect your business against the loss of key employees and executives.',
      features: [
        'Business continuity protection',
        'Key person replacement costs',
        'Flexible sum assured',
        'Quick claims settlement'
      ],
      icon: 'fa-user-tie'
    },
    {
      name: 'Group Life Policy',
      description: 'Essential life coverage for groups and organizations of all sizes.',
      features: [
        'Basic life coverage',
        'Accidental death benefits',
        'Easy administration',
        'Cost-effective premiums'
      ],
      icon: 'fa-building'
    }
  ],
  education: [
    {
      name: 'Future Scholar Policy',
      description: 'Secure your children\'s educational future with our comprehensive education plan.',
      features: [
        'Guaranteed education fund',
        'Flexible premium payment',
        'Life insurance protection',
        'Waiver of premium benefit'
      ],
      icon: 'fa-graduation-cap'
    },
    {
      name: 'Skuul Boafo Plan',
      description: 'Affordable education savings plan designed for all income levels.',
      features: [
        'Low premium options',
        'Education support benefits',
        'Flexible payment terms',
        'Additional family benefits'
      ],
      icon: 'fa-book'
    },
    {
      name: 'Edwadifuo Ahobanbo Plan',
      description: 'Comprehensive savings plan combining education and life protection.',
      features: [
        'Education savings',
        'Life insurance coverage',
        'Investment benefits',
        'Family protection'
      ],
      icon: 'fa-piggy-bank'
    }
  ],
  pension: [
    {
      name: 'Personal Pension Plan',
      description: 'Secure your retirement with our flexible personal pension scheme.',
      features: [
        'Tax-advantaged savings',
        'Flexible contributions',
        'Investment options',
        'Retirement benefits'
      ],
      icon: 'fa-chart-line'
    },
    {
      name: 'Executive Pension Plan',
      description: 'Premium pension solution designed for corporate executives and professionals.',
      features: [
        'Enhanced benefits',
        'Investment choices',
        'Tax efficiency',
        'Flexible retirement options'
      ],
      icon: 'fa-briefcase'
    }
  ],
  protection: [
    {
      name: 'Loan Protection Policy',
      description: 'Protect your loans and ensure your family isn\'t burdened with debt.',
      features: [
        'Outstanding loan coverage',
        'Flexible terms',
        'Quick claims process',
        'Peace of mind'
      ],
      icon: 'fa-credit-card'
    },
    {
      name: 'Mortgage Protection Policy',
      description: 'Safeguard your mortgage payments and protect your family\'s home.',
      features: [
        'Mortgage balance coverage',
        'Property protection',
        'Flexible premium options',
        'Family security'
      ],
      icon: 'fa-home'
    }
  ]
};

export const productCategories = {
  individual: products.individual.map(product => ({
    id: product.name.toLowerCase().replace(/ /g, '-'),
    name: product.name,
    description: product.description,
    category: 'Individual Life Insurance',
    features: product.features,
    benefits: [
      'Financial security for your loved ones',
      'Tax-advantaged savings component',
      'Flexible premium payment options',
      'Coverage that grows with your needs'
    ],
    eligibility: [
      'Age 18-65 years',
      'Valid identification',
      'Good health condition',
      'Ghanaian resident or citizen'
    ],
    icon: product.icon,
    image: 'https://public.readdy.ai/ai/img_res/dfb189457cf3c25ac94cf41494bcd2b1.jpg',
    highlights: [
      { title: 'Coverage Amount', value: 'Up to GH₵ 1,000,000' },
      { title: 'Premium Payment', value: 'Monthly/Quarterly/Annually' },
      { title: 'Policy Term', value: '10-30 years' },
      { title: 'Free Look Period', value: '30 days' }
    ],
    additionalInfo: {
      premiumRange: 'GH₵ 100 - GH₵ 5,000 per month',
      minTerm: '10 years',
      maxTerm: '30 years',
      maxEntryAge: '65 years',
      minEntryAge: '18 years',
      maxCoverage: 'GH₵ 1,000,000'
    }
  })),
  education: products.education.map(product => ({
    id: product.name.toLowerCase().replace(/ /g, '-'),
    name: product.name,
    description: product.description,
    category: 'Education Plans',
    features: product.features,
    benefits: [
      'Guaranteed education fund for your children',
      'Protection against unforeseen circumstances',
      'Competitive investment returns',
      'Flexible payment schedule'
    ],
    eligibility: [
      'Parents aged 18-60 years',
      'Children under 18 years',
      'Valid identification',
      'Ghanaian resident or citizen'
    ],
    icon: product.icon,
    image: 'https://public.readdy.ai/ai/img_res/e028051d4e4a477255260c555dd7add6.jpg',
    highlights: [
      { title: 'Coverage Amount', value: 'Up to GH₵ 500,000' },
      { title: 'Premium Payment', value: 'Monthly/Quarterly/Annually' },
      { title: 'Policy Term', value: '5-20 years' },
      { title: 'Free Look Period', value: '30 days' }
    ],
    additionalInfo: {
      premiumRange: 'GH₵ 50 - GH₵ 2,000 per month',
      minTerm: '5 years',
      maxTerm: '20 years',
      maxEntryAge: '60 years',
      minEntryAge: '18 years',
      maxCoverage: 'GH₵ 500,000'
    }
  })),
  group: products.group.map(product => ({
    id: product.name.toLowerCase().replace(/ /g, '-'),
    name: product.name,
    description: product.description,
    category: 'Group Insurance',
    features: product.features,
    benefits: [
      'Financial security for employees',
      'Tax benefits for employers',
      'Customizable coverage options',
      'Easy administration'
    ],
    eligibility: [
      'Registered organizations',
      'Minimum 10 employees',
      'Valid business documentation',
      'Employee age 18-65 years'
    ],
    icon: product.icon,
    image: 'https://public.readdy.ai/ai/img_res/group-insurance.jpg',
    highlights: [
      { title: 'Coverage Amount', value: 'Customizable per group' },
      { title: 'Premium Payment', value: 'Monthly/Quarterly/Annually' },
      { title: 'Policy Term', value: 'Annual renewable' },
      { title: 'Group Size', value: '10+ employees' }
    ],
    additionalInfo: {
      premiumRange: 'Customized based on group size',
      minGroupSize: '10 employees',
      renewalTerms: 'Annual',
      maxEntryAge: '65 years',
      minEntryAge: '18 years',
      coverageOptions: 'Flexible per organization'
    }
  })),
  pension: products.pension.map(product => ({
    id: product.name.toLowerCase().replace(/ /g, '-'),
    name: product.name,
    description: product.description,
    category: 'Pension Plans',
    features: product.features,
    benefits: [
      'Tax-efficient retirement savings',
      'Investment growth potential',
      'Flexible contribution options',
      'Guaranteed retirement income'
    ],
    eligibility: [
      'Age 18-55 years',
      'Valid identification',
      'Regular income source',
      'Ghanaian resident or citizen'
    ],
    icon: product.icon,
    image: 'https://public.readdy.ai/ai/img_res/pension-plan.jpg',
    highlights: [
      { title: 'Contribution Range', value: 'Flexible amounts' },
      { title: 'Payment Options', value: 'Monthly/Quarterly/Annually' },
      { title: 'Investment Options', value: 'Multiple choices' },
      { title: 'Retirement Age', value: '60 years' }
    ],
    additionalInfo: {
      contributionRange: 'Flexible based on income',
      retirementAge: '60 years',
      minContributionPeriod: '5 years',
      maxEntryAge: '55 years',
      minEntryAge: '18 years',
      investmentOptions: 'Conservative to Aggressive'
    }
  })),
  protection: products.protection.map(product => ({
    id: product.name.toLowerCase().replace(/ /g, '-'),
    name: product.name,
    description: product.description,
    category: 'Protection Plans',
    features: product.features,
    benefits: [
      'Debt-free legacy for family',
      'Affordable premiums',
      'Easy application process',
      'Immediate coverage'
    ],
    eligibility: [
      'Age 18-65 years',
      'Valid loan agreement',
      'Good health condition',
      'Ghanaian resident or citizen'
    ],
    icon: product.icon,
    image: 'https://public.readdy.ai/ai/img_res/loan-protection.jpg',
    highlights: [
      { title: 'Coverage Amount', value: 'Equal to loan amount' },
      { title: 'Premium Payment', value: 'Single or regular payment' },
      { title: 'Policy Term', value: 'Matches loan tenure' },
      { title: 'Processing Time', value: '24-48 hours' }
    ],
    additionalInfo: {
      maxLoanCoverage: 'Based on loan amount',
      premiumType: 'Single or regular',
      maxTerm: 'Matches loan tenure',
      maxEntryAge: '65 years',
      minEntryAge: '18 years',
      claimSettlement: '24-48 hours'
    }
  }))
};

export const getProductById = (productId) => {
  for (const category of Object.values(productCategories)) {
    const product = category.find(p => p.id === productId);
    if (product) return product;
  }
  return null;
};

export const getRelatedProducts = (productId, maxCount = 3) => {
  for (const category of Object.values(productCategories)) {
    const product = category.find(p => p.id === productId);
    if (product) {
      return category
        .filter(p => p.id !== productId)
        .slice(0, maxCount);
    }
  }
  return [];
};

export const getAllProducts = () => {
  return Object.values(productCategories).flat();
};

export const getProductsByCategory = (categoryId) => {
  return productCategories[categoryId] || [];
}; 