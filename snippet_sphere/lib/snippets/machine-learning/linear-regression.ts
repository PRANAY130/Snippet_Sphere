import { type CodeSnippet } from '../types';

export const linearRegression: CodeSnippet = {
  id: 'linear-regression',
  title: 'Simple Linear Regression',
  description: 'Implementation of simple linear regression from scratch',
  language: 'python',
  code: `import numpy as np

class LinearRegression:
    def __init__(self, learning_rate=0.01, n_iterations=1000):
        self.learning_rate = learning_rate
        self.n_iterations = n_iterations
        self.weights = None
        self.bias = None
        
    def fit(self, X, y):
        n_samples, n_features = X.shape
        self.weights = np.zeros(n_features)
        self.bias = 0
        
        for _ in range(self.n_iterations):
            y_predicted = np.dot(X, self.weights) + self.bias
            
            # Compute gradients
            dw = (1/n_samples) * np.dot(X.T, (y_predicted - y))
            db = (1/n_samples) * np.sum(y_predicted - y)
            
            # Update parameters
            self.weights -= self.learning_rate * dw
            self.bias -= self.learning_rate * db
            
    def predict(self, X):
        return np.dot(X, self.weights) + self.bias`,
  tags: ['machine-learning', 'math', 'data-science', 'advanced'],
  author: {
    name: 'Pranay De',
    github: 'https://github.com/PRANAY130',
  },
};