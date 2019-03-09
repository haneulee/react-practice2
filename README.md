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
- -
