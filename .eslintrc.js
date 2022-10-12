module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    // TODO: 설정 추가, 인터페이스 body 없음 허용
    '@typescript-eslint/no-empty-interface': 'off',
    // TODO: 설정 추가, 클래스 속성의 타입 선언과 디폴트 값 선언을 같이 사용하기 위해 허용
    '@typescript-eslint/no-inferrable-types': 'off',
  },
};
