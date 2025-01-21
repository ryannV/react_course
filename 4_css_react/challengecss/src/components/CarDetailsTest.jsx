import styles from './CarDetailsTest.module.css'

const CarDetailsTest = ({car}) => {
    return(
        <div className={styles.card}>
            <h1>{car.name}</h1>
            <ul className={styles.list}>
                <li>Marca - {car.marca}</li>
                <li>Ano - {car.ano}</li>
            </ul>
        </div>
    )
}

export default CarDetailsTest