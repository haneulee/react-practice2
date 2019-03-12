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
- (or immutable.js, immutability-helper, _immer.js_, deepcopy, lodash \_.extend(), Object.assign() 사용)

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

#### 부모, 자식 컴포넌트 간의 통신

- 부모 > 자식 : props로 전달
- 자식 > 부모 : 부모 컴포넌트의 콜백함수 전달
- 부모 컴포넌트에서 render 호출되면 자식 컴포넌트들에도 render 호출됨 (shouldComponentUpdate로 불필요한 렌더 줄이기)
- 자식 컴포넌트에서 this.props사용시 위 조건

#### 라이프 사이클

- 컴포넌트 마운트 : constructor > componentWillMount > render > componentDidMount
- 속성 변경 시 : componentWillReceiveProps > shouldComponentUpdate > componentWillUpdate > render > componentDidUpdate
- 상태 변경 시 : shouldComponentUpdate > componentWillUpdate > render > componentDidUpdate
- 컴포넌트 언마운트 시(화면 전환) : componentWillUnMount
- 오류 발생 시 : componenetDidCatch

- componentWillReceiveProps(nextProps) : 부모 컴포넌트로부터 전달받은 속성으로 로컬 상태 변경 시
- componentDidUpdate : dom이 변경 된 후

**_react v16.3~_**

- 컴포넌트 마운트 : constructor > getDerivedStateFromProps > render > componentDidMount
- 속성 변경 시 : getDerivedStateFromProps > shouldComponentUpdate > render > getSnapshotBeforeUpdate > componentDidUpdate
- 상태 변경 시 : shouldComponentUpdate > componentWillUpdate > render > getSnapshotBeforeUpdate > componentDidUpdate

#### virtual dom

- dom 추상화 객체
- reflow, repaint 일어나지 않음
- reconciliation : 이전 스냅샷과 돔 변경 후 스냅샷을 비교해 차이 나는 부분만 실제 html dom 업데이트 함 (diff 알고리즘)

#### pureComponent

- shouldshouldComponentUpdate가 shallow compare하도록 이미 구현되어 있음

#### HOC

- higher order component
- 컴포넌트를 입력값으로 받아 새로운 기능을 추가하여 다시 리턴하는 컴포넌트
- 고차 함수와 비슷
- ex) 사용자 로그인 여부, 권한 상태 확인, 에러 페이지, 로깅 기능

- 컴포넌트 내부 공통 기능을 모듈화하여 코드 재사용
- 렌더링 과정 하이재킹
- 상태 추상화
- 속성 조작
