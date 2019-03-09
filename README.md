### react study

- serviceworker는 pwa(progressive web app)을 구현할 수 있도록 하는 요소

* es6 클래스 기반 컴포넌트는 함수형 컴포넌트보다 렌더링 속도 느림

```
let Hello = (props) => {
    return (
        <div>
            <h1>{props}</h1>
        </div>
    )
}

```

#### props

- 자식 컴포넌트에서 this.props를 변경할 수는 없음
- 부모 컴포넌트에서 데이터를 변경하면 자식 컴포넌트의 ui가 다시 렌더링

#### state

- 상태의 변경은 보유하고 있는 컴포넌트에서만 허용
- stateful < stateless component
- setState를 호출하면 re-render를 수행 
- (따라서, 값을 비교하여 render를 매번 수행하지 않도록 해야함)
- (or shouldComponentUpdate 이용, shallow compare/pureComponent)
- (or immutable.js 사용)

#### 속성 유효성 검증
- propTypes / Flow / Typescript

#### 이벤트
- 이벤트를 가상 dom root 에 연결하고 이벤트를 위임 처리함
- 이벤트가 발생하면 리액트가 dom root에서 적절한 컴포넌트 요소로 바인딩함
- camel Casing 
- 화살표 함수에서는 this는 컴포넌트 객체
- 일반 함수에서는 this를 bind로 지정해야 컴포넌트 객체가 됨
- controlled component : state or props에 의해 제어됨
- Uncontrolled component : state or props에 의해 제어되지 않음 (html dom에 직접 접근해야 함)