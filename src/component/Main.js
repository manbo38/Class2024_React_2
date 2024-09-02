
// 자식 컴포넌트에게 2개의 값 전달하기
// function Main({name, color}){
const Main=({name, color})=>{

    return(
        <div>
            <main>
                <h1>메인 입니다.</h1>
                <h1 style={{color}}>내 이름은 {name}입니다.</h1>
            </main>
        </div>
    );
}

export default Main;