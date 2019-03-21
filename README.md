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

#### portal

- 렌더할 때 자식 요소를 부모 컴포넌트 돔트리 밖에 존재하는 돔 요소 내 추가할 수 있음
- ex) modal, hover, tooltip
- 부모 컴포넌트 까지 이벤트 버블링 가능

#### 컴포넌트 설계

- 재사용성 : 속성을 이용한 순수 컴포넌트로 작성
- 관리성 : 한 컴포넌트 내부에서 지나치게 복잡한 작업 수정하지 않도록 컴포넌트 분할
- 상속 < 조합 : 계층 구조로 상속받아 전체 ui를 구성하지 않고 컴포넌트들을 조합하도록 구성해야함
- 상속 < hoc

#### axios

- http 통신 라이브러리
- node.js, 브라우저에서 xmlhttprequest 객체 사용
- promise api 제공

```
* 크로스 도메인 문제 해결
1. 컨슈머 서버측에 프록시 요소 생성
- node.js 서버에 http-proxy-middleware 설정
2. 서비스 제공자측에서 cors 기능 제공
3. 서비스 제공자측에서 jsonp기능 제공

```

#### Flux

- 클라이언트-사이드 웹 어플리케이션을 만들기 위해 사용하는 어플리케이션 아키텍처
- dispatcher : action 의 메세지를 store로 전달하고 데이터 흐름 관리
- stores : 어플리케이션의 상태, action을 통해서 메세지를 전달받아야만 변경됨
- views :
- action : 사용자와 상호작업, ajax, 타이머, 웹소켓 이벤트 수행

#### Redux

- flux + hot reloading + time travel debugging
- flux는 상태와 상태 변경 로직을 모두 가지고 있는데 핫 리로딩을 할 때 문제가 됨
- 또한, 상태를 액션마다 재기록하기 때문에 time travel debugging이 불가능함
- store : 단 하나의 스토어만 가짐 (dispatch, subscribe, getState, replaceReducer 메소드)
- action : 액션은 스토어를 거쳐 리듀서로 전달되고, 리듀서가 상태를 변경하면 쓰토어로 리턴
- reducer : 순수함수, 계층적 트리구조로 구성되야 함
- middleware : 액션 생성자가 액션을 전달한 후 리듀서에 가기 전에 작업을 지정하는 기능
  (react > action creator > action > middleware > reducers > state)
- 비동기 : redux-thunk, redux-saga, promise, async/await

```
* 3 rules
- single source of truth : 단 하나의 스토어만 사용
- state is read-only : 상태변경을 위해서는 액션을 통해서만 가능
- changes are made with pure function : 리듀서는 순수 함수
```

#### react router

- url 정보를 확인해 특정 컴포넌트를 렌더링하는 기능을 제공하는 리액트 라이브러리
- spa 기능 (페이지 이동 없음)
- router, link, route
